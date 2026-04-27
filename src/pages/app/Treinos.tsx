import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Target, ChevronRight, Dumbbell } from 'lucide-react'
import { treinos, fases } from '@/data/treinos'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { cn } from '@/lib/utils'

export default function Treinos() {
  const { user, profile } = useAuth()
  const [faseAtiva, setFaseAtiva] = useState<1 | 2 | 3>((profile?.fase_atual as 1 | 2 | 3) ?? 1)
  const [completados, setCompletados] = useState<string[]>([])

  useEffect(() => {
    if (!user) return
    supabase
      .from('treinos_completados')
      .select('treino_id')
      .eq('user_id', user.id)
      .then(({ data }) => setCompletados((data ?? []).map(d => d.treino_id)))
  }, [user])

  const treinosDaFase = treinos.filter(t => t.fase === faseAtiva)
  const faseInfo = fases.find(f => f.numero === faseAtiva)!

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8 max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl lg:text-3xl font-display font-bold text-white">
          Meus <span className="gradient-text">Treinos</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-1">12 minutos por dia que mudam tudo.</p>
      </motion.div>

      {/* Abas de fases */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="flex gap-2 overflow-x-auto pb-1"
      >
        {fases.map(fase => (
          <button
            key={fase.numero}
            onClick={() => setFaseAtiva(fase.numero as 1 | 2 | 3)}
            className={cn(
              'flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all',
              faseAtiva === fase.numero
                ? 'gradient-bg text-white glow-effect'
                : 'bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10 border border-white/10'
            )}
          >
            Fase {fase.numero}
            <span className="hidden sm:inline ml-1 opacity-70">— {fase.nome}</span>
          </button>
        ))}
      </motion.div>

      {/* Info da fase */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className={`glass-card rounded-xl p-5 border border-white/10 bg-gradient-to-r ${faseInfo.cor} bg-opacity-10`}
      >
        <p className="text-white font-semibold">{faseInfo.nome}</p>
        <p className="text-white/70 text-sm mt-1">{faseInfo.descricao}</p>
        <div className="flex items-center gap-4 mt-3">
          <span className="text-xs text-white/60 flex items-center gap-1">
            <Clock className="w-3 h-3" /> Semanas {faseInfo.semanas}
          </span>
          <span className="text-xs text-white/60 flex items-center gap-1">
            <Dumbbell className="w-3 h-3" /> {treinosDaFase.length} treinos
          </span>
          <span className="text-xs text-white/60 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> {completados.filter(id => treinosDaFase.some(t => t.id === id)).length} concluídos
          </span>
        </div>
      </motion.div>

      {/* Lista de treinos */}
      <div className="space-y-3">
        {treinosDaFase.map((treino, i) => {
          const feito = completados.includes(treino.id)
          return (
            <motion.div
              key={treino.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link
                to={`/app/treinos/${treino.id}`}
                className={cn(
                  'block glass-card rounded-xl border transition-all group',
                  feito
                    ? 'border-green-500/30 hover:border-green-500/50'
                    : 'border-white/10 hover:border-pink-500/40'
                )}
              >
                <div className="p-4 flex items-center gap-4">
                  {/* Ícone */}
                  <div className={cn(
                    'w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0',
                    feito ? 'bg-green-500/20' : 'bg-gradient-to-br from-pink-500/20 to-purple-500/20'
                  )}>
                    {feito
                      ? <CheckCircle2 className="w-5 h-5 text-green-400" />
                      : <Dumbbell className="w-5 h-5 text-pink-400" />
                    }
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={cn('font-semibold text-sm truncate', feito ? 'text-white/60' : 'text-white')}>
                        {treino.nome}
                      </p>
                      {feito && (
                        <span className="text-xs text-green-400 flex-shrink-0">Concluído ✓</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {treino.duracao}
                      </span>
                      <span className="text-white/20">•</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Target className="w-3 h-3" /> {treino.foco}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-pink-400 transition-colors flex-shrink-0" />
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
