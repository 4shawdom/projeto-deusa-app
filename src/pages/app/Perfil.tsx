import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Save, LogOut, Flame, Scale, Ruler, Lock, Eye, EyeOff } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { useNavigate } from 'react-router-dom'

export default function Perfil() {
  const { user, profile, signOut, refreshProfile } = useAuth()
  const navigate = useNavigate()

  const [nome, setNome] = useState(profile?.nome ?? '')
  const [pesoInicial, setPesoInicial] = useState(profile?.peso_inicial?.toString() ?? '')
  const [altura, setAltura] = useState(profile?.altura?.toString() ?? '')
  const [salvando, setSalvando] = useState(false)
  const [salvo, setSalvo] = useState(false)

  const [novaSenha, setNovaSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [salvandoSenha, setSalvandoSenha] = useState(false)
  const [erroSenha, setErroSenha] = useState<string | null>(null)
  const [senhaAlterada, setSenhaAlterada] = useState(false)

  async function trocarSenha(e: React.FormEvent) {
    e.preventDefault()
    setErroSenha(null)
    if (novaSenha.length < 6) return setErroSenha('A senha deve ter pelo menos 6 caracteres.')
    if (novaSenha !== confirmarSenha) return setErroSenha('As senhas não coincidem.')
    setSalvandoSenha(true)
    const { error } = await supabase.auth.updateUser({ password: novaSenha })
    setSalvandoSenha(false)
    if (error) return setErroSenha('Erro ao alterar senha. Tente novamente.')
    setSenhaAlterada(true)
    setNovaSenha('')
    setConfirmarSenha('')
    setTimeout(() => setSenhaAlterada(false), 4000)
  }

  async function salvarPerfil(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return
    setSalvando(true)

    await supabase.from('profiles').upsert({
      id: user.id,
      nome: nome || null,
      peso_inicial: pesoInicial ? parseFloat(pesoInicial) : null,
      altura: altura ? parseFloat(altura) : null,
    })

    await refreshProfile()
    setSalvando(false)
    setSalvo(true)
    setTimeout(() => setSalvo(false), 3000)
  }

  async function handleSignOut() {
    await signOut()
    navigate('/login')
  }

  const iniciais = (profile?.nome ?? user?.email ?? '?')
    .split(' ').slice(0, 2).map(p => p[0]).join('').toUpperCase()

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8 max-w-2xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl lg:text-3xl font-display font-bold text-white">
          Meu <span className="gradient-text">Perfil</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Gerencie suas informações e preferências.</p>
      </motion.div>

      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="flex items-center gap-4"
      >
        <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center glow-effect">
          <span className="text-2xl font-bold text-white font-display">{iniciais}</span>
        </div>
        <div>
          <p className="text-white font-semibold">{profile?.nome ?? 'Deusa'}</p>
          <p className="text-muted-foreground text-sm">{user?.email}</p>
          <div className="flex items-center gap-1.5 mt-1">
            <Flame className="w-3 h-3 text-pink-400" />
            <span className="text-xs text-pink-400">Fase {profile?.fase_atual ?? 1} — Semana {profile?.semana_atual ?? 1}</span>
          </div>
        </div>
      </motion.div>

      {/* Formulário */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="glass-card rounded-xl border border-white/10 p-5"
      >
        <h2 className="text-white font-semibold text-sm mb-4">Suas informações</h2>
        <form onSubmit={salvarPerfil} className="space-y-4">
          {/* Nome */}
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1.5">
              <User className="w-3 h-3" /> Nome completo
            </label>
            <input
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              placeholder="Seu nome"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-all text-sm"
            />
          </div>

          {/* E-mail (readonly) */}
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3 h-3" /> E-mail
            </label>
            <input
              type="email"
              value={user?.email ?? ''}
              disabled
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white/50 text-sm cursor-not-allowed"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Peso inicial */}
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1.5">
                <Scale className="w-3 h-3" /> Peso inicial (kg)
              </label>
              <input
                type="number"
                step="0.1"
                value={pesoInicial}
                onChange={e => setPesoInicial(e.target.value)}
                placeholder="70.0"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-all text-sm"
              />
            </div>

            {/* Altura */}
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1.5">
                <Ruler className="w-3 h-3" /> Altura (cm)
              </label>
              <input
                type="number"
                value={altura}
                onChange={e => setAltura(e.target.value)}
                placeholder="165"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-all text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={salvando}
            className="w-full gradient-bg text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all glow-effect disabled:opacity-50"
          >
            {salvando ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : salvo ? '✓ Salvo!' : (
              <>
                <Save className="w-4 h-4" />
                Salvar alterações
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Trocar senha */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="glass-card rounded-xl border border-white/10 p-5"
      >
        <h2 className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
          <Lock className="w-4 h-4 text-pink-400" />
          Trocar senha
        </h2>
        <p className="text-muted-foreground text-xs mb-4">Recomendamos trocar a senha genérica pelo acesso.</p>
        <form onSubmit={trocarSenha} className="space-y-3">
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Nova senha</label>
            <div className="relative">
              <input
                type={mostrarSenha ? 'text' : 'password'}
                value={novaSenha}
                onChange={e => setNovaSenha(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-11 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-all text-sm"
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
              >
                {mostrarSenha ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Confirmar nova senha</label>
            <input
              type={mostrarSenha ? 'text' : 'password'}
              value={confirmarSenha}
              onChange={e => setConfirmarSenha(e.target.value)}
              placeholder="Repita a nova senha"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-all text-sm"
            />
          </div>

          {erroSenha && (
            <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5">
              {erroSenha}
            </p>
          )}

          <button
            type="submit"
            disabled={salvandoSenha}
            className="w-full bg-white/5 border border-white/10 hover:border-pink-500/40 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            {salvandoSenha ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : senhaAlterada ? (
              '✓ Senha alterada com sucesso!'
            ) : (
              <>
                <Lock className="w-4 h-4 text-pink-400" />
                Alterar senha
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Sair */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
      >
        <button
          onClick={handleSignOut}
          className="w-full bg-red-500/10 border border-red-500/20 text-red-400 font-semibold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-red-500/20 transition-all"
        >
          <LogOut className="w-4 h-4" />
          Sair da conta
        </button>
      </motion.div>
    </div>
  )
}
