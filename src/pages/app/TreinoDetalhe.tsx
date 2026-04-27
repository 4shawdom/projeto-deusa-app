import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Target, CheckCircle2, Play, Flame } from 'lucide-react'
import { treinos } from '@/data/treinos'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'

export default function TreinoDetalhe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const treino = treinos.find(t => t.id === id)
  const [concluido, setConcluido] = useState(false)
  const [salvando, setSalvando] = useState(false)

  if (!treino) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Treino não encontrado.</p>
      </div>
    )
  }

  async function marcarConcluido() {
    if (!user || concluido) return
    setSalvando(true)
    await supabase.from('treinos_completados').upsert({
      user_id: user.id,
      treino_id: treino!.id,
      fase: treino!.fase,
      semana: treino!.semana,
    }, { onConflict: 'user_id,treino_id' })
    setConcluido(true)
    setSalvando(false)
  }

  const niveisLabel: Record<string, string> = {
    'Iniciante': 'bg-green-500/20 text-green-400',
    'Intermediário': 'bg-yellow-500/20 text-yellow-400',
    'Avançado': 'bg-red-500/20 text-red-400',
  }

  return (
    <div className="p-4 lg:p-8 pb-28 lg:pb-8 max-w-2xl mx-auto space-y-6">
      {/* Voltar */}
      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar aos treinos
      </motion.button>

      {/* Header do treino */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="glass-card rounded-2xl border border-white/10 overflow-hidden"
      >
        <div className="gradient-bg p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xs text-white/70">Fase {treino.fase} — Semana {treino.semana}</span>
              <h1 className="text-xl font-display font-bold text-white">{treino.nome}</h1>
            </div>
          </div>
          <p className="text-white/80 text-sm">{treino.descricao}</p>
        </div>

        <div className="p-5 flex items-center gap-4 border-t border-white/10">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-pink-400" />
            <span>{treino.duracao}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Target className="w-4 h-4 text-purple-400" />
            <span>{treino.foco}</span>
          </div>
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${niveisLabel[treino.nivel] ?? 'bg-white/10 text-white'}`}>
            {treino.nivel}
          </span>
        </div>
      </motion.div>

      {/* Exercícios */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      >
        <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
          <Play className="w-4 h-4 text-pink-400" />
          Sequência de exercícios
        </h2>
        <div className="space-y-2">
          {treino.exercicios.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="glass-card rounded-xl border border-white/10 p-4 flex items-center gap-4"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-pink-300">{i + 1}</span>
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{ex.nome}</p>
                {ex.descricao && <p className="text-xs text-muted-foreground mt-0.5">{ex.descricao}</p>}
              </div>
              <div className="text-right flex-shrink-0">
                {ex.duracao && <p className="text-xs text-pink-400 font-medium">{ex.duracao}</p>}
                {ex.series && ex.repeticoes && (
                  <p className="text-xs text-purple-400 font-medium">{ex.series} × {ex.repeticoes}</p>
                )}
                {!ex.duracao && ex.repeticoes && !ex.series && (
                  <p className="text-xs text-purple-400 font-medium">{ex.repeticoes}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Botão concluir */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        className="sticky bottom-20 lg:static"
      >
        <button
          onClick={marcarConcluido}
          disabled={concluido || salvando}
          className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all text-white ${
            concluido
              ? 'bg-green-500/20 border border-green-500/30 text-green-400 cursor-default'
              : 'gradient-bg glow-effect hover:opacity-90 active:scale-[0.98]'
          }`}
        >
          {salvando ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : concluido ? (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Treino concluído! Mandou bem!
            </>
          ) : (
            <>
              <CheckCircle2 className="w-5 h-5" />
              Marcar como concluído
            </>
          )}
        </button>
      </motion.div>
    </div>
  )
}
