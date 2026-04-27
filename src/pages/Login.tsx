import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'

const REDIRECT_URL = 'https://projeto-deusa-app.vercel.app/criar-senha'

export default function Login() {
  const { signIn, user } = useAuth()
  const navigate = useNavigate()

  const [aba, setAba] = useState<'login' | 'ativar'>('login')

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const [emailAtivar, setEmailAtivar] = useState('')
  const [loadingAtivar, setLoadingAtivar] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [erroAtivar, setErroAtivar] = useState<string | null>(null)

  useEffect(() => {
    if (user) navigate('/app/dashboard', { replace: true })
  }, [user, navigate])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro(null)
    setLoading(true)
    const { error } = await signIn(email, senha)
    if (error) {
      setErro('E-mail ou senha incorretos. Verifique seus dados.')
      setLoading(false)
    } else {
      navigate('/app/dashboard', { replace: true })
    }
  }

  async function handleAtivar(e: React.FormEvent) {
    e.preventDefault()
    setErroAtivar(null)
    setLoadingAtivar(true)
    const { error } = await supabase.auth.resetPasswordForEmail(emailAtivar, {
      redirectTo: REDIRECT_URL,
    })
    setLoadingAtivar(false)
    if (error) setErroAtivar('Ocorreu um erro. Tente novamente.')
    else setEnviado(true)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl" style={{ background: 'hsl(345 38% 58% / 0.08)' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl" style={{ background: 'hsl(22 55% 55% / 0.08)' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4 glow-effect">
              <Flame className="w-7 h-7 text-white" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Projeto <span className="gradient-text">Deusa</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-1">Acesse sua área exclusiva</p>
          </div>

          {/* Abas */}
          <div className="flex rounded-xl bg-muted p-1 mb-6">
            <button
              onClick={() => setAba('login')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${aba === 'login' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'}`}
            >
              Já tenho conta
            </button>
            <button
              onClick={() => setAba('ativar')}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${aba === 'ativar' ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'}`}
            >
              Primeiro acesso
            </button>
          </div>

          <AnimatePresence mode="wait">
            {aba === 'login' ? (
              <motion.form
                key="login"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      required
                      className="w-full bg-muted border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80">Senha</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type={mostrarSenha ? 'text' : 'password'}
                      value={senha}
                      onChange={e => setSenha(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full bg-muted border border-border rounded-xl py-3 pl-10 pr-11 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all text-sm"
                    />
                    <button type="button" onClick={() => setMostrarSenha(!mostrarSenha)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                      {mostrarSenha ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {erro && (
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3 text-destructive text-sm">
                    {erro}
                  </motion.div>
                )}

                <button type="submit" disabled={loading} className="w-full gradient-bg text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 glow-effect">
                  {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : (<>Entrar na minha área <ArrowRight className="w-4 h-4" /></>)}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Esqueceu a senha?{' '}
                  <button type="button" onClick={() => setAba('ativar')} className="text-primary hover:opacity-80 transition-colors">
                    Clique aqui
                  </button>
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="ativar"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                {enviado ? (
                  <div className="text-center py-4">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <p className="font-semibold text-foreground mb-1">Email enviado!</p>
                    <p className="text-sm text-muted-foreground">Verifique sua caixa de entrada e clique no link para criar sua senha.</p>
                  </div>
                ) : (
                  <form onSubmit={handleAtivar} className="space-y-5">
                    <p className="text-sm text-muted-foreground">
                      Digite o email usado na compra para receber o link de criação de senha.
                    </p>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">E-mail da compra</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="email"
                          value={emailAtivar}
                          onChange={e => setEmailAtivar(e.target.value)}
                          placeholder="seu@email.com"
                          required
                          className="w-full bg-muted border border-border rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all text-sm"
                        />
                      </div>
                    </div>

                    {erroAtivar && (
                      <p className="text-destructive text-sm">{erroAtivar}</p>
                    )}

                    <button type="submit" disabled={loadingAtivar} className="w-full gradient-bg text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50">
                      {loadingAtivar ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : (<>Enviar link de acesso <ArrowRight className="w-4 h-4" /></>)}
                    </button>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Problemas?{' '}
            <a href="mailto:suporte@projetodeusa.com" className="text-primary hover:opacity-80 transition-colors">
              Fale com o suporte
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
