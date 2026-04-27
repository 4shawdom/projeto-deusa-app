import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Dumbbell, TrendingUp, Target, ChevronRight, Zap, Star } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { treinos } from '@/data/treinos'

const frases = [
  'Cada treino é um passo mais perto da sua melhor versão.',
  'Você não precisa ser perfeita. Só precisa aparecer.',
  'Seu corpo é capaz de muito mais do que sua mente imagina.',
  'A consistência supera a intensidade. Apareça todos os dias.',
  'A transformação começa de dentro. Continue.',
]

export default function Dashboard() {
  const { user, profile } = useAuth()
  const [treinosFeitos, setTreinosFeitos] = useState(0)
  const [ultimoRegistro, setUltimoRegistro] = useState<number | null>(null)
  const frase = frases[new Date().getDay() % frases.length]

  const faseAtual = profile?.fase_atual ?? 1
  const treinosDaFase = treinos.filter(t => t.fase === faseAtual)
  const proximoTreino = treinosDaFase[treinosFeitos % treinosDaFase.length]

  const firstName = profile?.nome?.split(' ')[0] ?? user?.email?.split('@')[0] ?? 'Deusa'

  useEffect(() => {
    if (!user) return
    supabase
      .from('treinos_completados')
      .select('id', { count: 'exact' })
      .eq('user_id', user.id)
      .then(({ count }) => setTreinosFeitos(count ?? 0))

    supabase
      .from('progresso')
      .select('peso')
      .eq('user_id', user.id)
      .order('data', { ascending: false })
      .limit(1)
      .single()
      .then(({ data }) => setUltimoRegistro(data?.peso ?? null))
  }, [user])

  const progresso = Math.min(Math.round((treinosFeitos / 15) * 100), 100)

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8 max-w-4xl mx-auto space-y-6">
      {/* Saudação */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <h1 className="text-2xl lg:text-3xl font-display font-bold text-foreground">
          Olá, <span className="gradient-text">{firstName}</span>! ✨
        </h1>
        <p className="text-muted-foreground text-sm mt-1">{frase}</p>
      </motion.div>

      {/* Cards de stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-3"
      >
        {[
          { label: 'Treinos feitos', value: treinosFeitos, icon: Dumbbell, cor: 'from-pink-500 to-rose-600' },
          { label: 'Fase atual', value: `Fase ${faseAtual}`, icon: Target, cor: 'from-purple-500 to-pink-500' },
          { label: 'Progresso', value: `${progresso}%`, icon: TrendingUp, cor: 'from-fuchsia-500 to-purple-600' },
          { label: 'Peso atual', value: ultimoRegistro ? `${ultimoRegistro}kg` : '—', icon: Star, cor: 'from-rose-500 to-fuchsia-500' },
        ].map((stat, i) => (
          <div key={i} className="glass-card rounded-xl p-4 border border-white/10">
            <div className={`w-8 h-8 rounded-lg gradient-bg flex items-center justify-center mb-3`}>
              <stat.icon className="w-4 h-4 text-white" />
            </div>
            <p className="text-xl font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Progresso geral */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
        className="glass-card rounded-xl p-5 border border-white/10"
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-foreground font-semibold text-sm">Progresso dos 45 dias</p>
          <span className="text-xs text-primary font-medium">{progresso}% concluído</span>
        </div>
        <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progresso}%` }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="h-full gradient-bg rounded-full"
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-muted-foreground">Início</span>
          <span className="text-xs text-muted-foreground">45 dias</span>
        </div>
      </motion.div>

      {/* Próximo treino */}
      {proximoTreino && (
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-foreground font-semibold text-sm mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            Treino de hoje
          </p>
          <Link
            to={`/app/treinos/${proximoTreino.id}`}
            className="block glass-card rounded-xl border border-white/10 hover:border-pink-500/40 transition-all group overflow-hidden"
          >
            <div className="p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center glow-effect flex-shrink-0">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-foreground font-semibold">{proximoTreino.nome}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">{proximoTreino.duracao}</span>
                    <span className="text-foreground/20">•</span>
                    <span className="text-xs text-muted-foreground">{proximoTreino.foco}</span>
                    <span className="text-foreground/20">•</span>
                    <span className="text-xs text-primary">Fase {proximoTreino.fase}</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </div>
            <div className="px-5 pb-4">
              <p className="text-xs text-muted-foreground">{proximoTreino.descricao}</p>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Ações rápidas */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}
        className="grid grid-cols-2 gap-3"
      >
        <Link
          to="/app/progresso"
          className="glass-card rounded-xl p-4 border border-white/10 hover:border-purple-500/40 transition-all flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <p className="text-white text-sm font-medium">Registrar</p>
            <p className="text-xs text-muted-foreground">progresso</p>
          </div>
        </Link>
        <Link
          to="/app/treinos"
          className="glass-card rounded-xl p-4 border border-white/10 hover:border-pink-500/40 transition-all flex items-center gap-3"
        >
          <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
            <Dumbbell className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-foreground text-sm font-medium">Ver todos</p>
            <p className="text-xs text-muted-foreground">os treinos</p>
          </div>
        </Link>
      </motion.div>
    </div>
  )
}
