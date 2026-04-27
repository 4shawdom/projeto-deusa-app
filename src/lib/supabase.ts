import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Profile = {
  id: string
  nome: string | null
  peso_inicial: number | null
  peso_atual: number | null
  altura: number | null
  fase_atual: number
  semana_atual: number
  created_at: string
}

export type RegistroProgresso = {
  id: string
  user_id: string
  data: string
  peso: number | null
  cintura: number | null
  quadril: number | null
  energia: number | null
  notas: string | null
  created_at: string
}

export type TreinoCompletado = {
  id: string
  user_id: string
  fase: number
  semana: number
  treino_id: string
  completado_em: string
}
