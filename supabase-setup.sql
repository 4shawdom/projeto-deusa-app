-- =============================================
-- PROJETO DEUSA — Setup do Banco de Dados
-- Execute este SQL no Supabase SQL Editor
-- =============================================

-- 1. TABELA DE PERFIS (vinculada ao auth.users)
create table if not exists public.profiles (
  id         uuid references auth.users on delete cascade primary key,
  nome       text,
  peso_inicial numeric(5,2),
  peso_atual   numeric(5,2),
  altura       numeric(5,1),
  fase_atual   int default 1 check (fase_atual between 1 and 3),
  semana_atual int default 1 check (semana_atual between 1 and 6),
  created_at   timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Usuária vê e edita seu próprio perfil"
  on public.profiles for all
  using (auth.uid() = id);

-- Trigger: cria perfil automaticamente quando usuária se cadastra
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, nome)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'nome', split_part(new.email, '@', 1))
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 2. TABELA DE PROGRESSO
create table if not exists public.progresso (
  id        uuid default gen_random_uuid() primary key,
  user_id   uuid references auth.users on delete cascade not null,
  data      date default current_date not null,
  peso      numeric(5,2),
  cintura   numeric(5,1),
  quadril   numeric(5,1),
  energia   int check (energia between 1 and 5),
  notas     text,
  created_at timestamptz default now(),
  unique (user_id, data)
);

alter table public.progresso enable row level security;

create policy "Usuária gerencia seu próprio progresso"
  on public.progresso for all
  using (auth.uid() = user_id);


-- 3. TABELA DE TREINOS COMPLETADOS
create table if not exists public.treinos_completados (
  id           uuid default gen_random_uuid() primary key,
  user_id      uuid references auth.users on delete cascade not null,
  treino_id    text not null,
  fase         int not null,
  semana       int not null,
  completado_em timestamptz default now(),
  unique (user_id, treino_id)
);

alter table public.treinos_completados enable row level security;

create policy "Usuária gerencia seus treinos completados"
  on public.treinos_completados for all
  using (auth.uid() = user_id);


-- =============================================
-- COMO CRIAR USUÁRIAS APÓS O PAGAMENTO
-- =============================================
-- No painel do Supabase: Authentication > Users > Invite User
-- Coloque o e-mail da cliente — ela receberá um link para definir a senha
-- e acessar o app automaticamente.
--
-- Ou via API (Edge Function / webhook do Cakto futuramente):
--   supabase.auth.admin.inviteUserByEmail(email)
-- =============================================
