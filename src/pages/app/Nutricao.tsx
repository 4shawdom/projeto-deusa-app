import { useState } from 'react'
import { motion } from 'framer-motion'
import { Salad, Coffee, Sun, Moon, Apple, CheckCircle2 } from 'lucide-react'
import { nutriPlanos } from '@/data/treinos'
import { useAuth } from '@/contexts/AuthContext'
import { cn } from '@/lib/utils'

const refeicaoConfig = [
  { key: 'cafe', label: 'Café da Manhã', icon: Coffee, cor: 'from-amber-500 to-orange-600' },
  { key: 'almoco', label: 'Almoço', icon: Sun, cor: 'from-pink-500 to-rose-600' },
  { key: 'jantar', label: 'Jantar', icon: Moon, cor: 'from-purple-500 to-indigo-600' },
  { key: 'snacks', label: 'Lanches', icon: Apple, cor: 'from-fuchsia-500 to-pink-600' },
]

export default function Nutricao() {
  const { profile } = useAuth()
  const [faseAtiva, setFaseAtiva] = useState(profile?.fase_atual ?? 1)
  const plano = nutriPlanos.find(p => p.fase === faseAtiva) ?? nutriPlanos[0]

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8 max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl lg:text-3xl font-display font-bold text-white">
          Minha <span className="gradient-text">Nutrição</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Alimentação alinhada com cada fase da sua transformação.</p>
      </motion.div>

      {/* Seletor de fase */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="flex gap-2"
      >
        {[1, 2, 3].map(fase => (
          <button
            key={fase}
            onClick={() => setFaseAtiva(fase)}
            className={cn(
              'flex-1 py-2.5 rounded-xl text-sm font-medium transition-all',
              faseAtiva === fase
                ? 'gradient-bg text-white glow-effect'
                : 'bg-white/5 text-muted-foreground hover:text-white border border-white/10'
            )}
          >
            Fase {fase}
          </button>
        ))}
      </motion.div>

      {/* Nome do plano */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
        className="glass-card rounded-xl border border-white/10 p-5 flex items-center gap-4"
      >
        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center glow-effect">
          <Salad className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-white font-semibold">{plano.nome}</h2>
          <p className="text-muted-foreground text-sm mt-0.5">{plano.descricao}</p>
        </div>
      </motion.div>

      {/* Refeições */}
      <div className="space-y-4">
        {refeicaoConfig.map(({ key, label, icon: Icon, cor }, idx) => {
          const itens = plano[key as keyof typeof plano] as string[]
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.05 }}
              className="glass-card rounded-xl border border-white/10 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${cor} bg-opacity-10 px-5 py-3.5 flex items-center gap-3`}>
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cor} flex items-center justify-center`}>
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{label}</h3>
              </div>
              <div className="p-4 space-y-2">
                {itens.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white/80 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Dicas */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="glass-card rounded-xl border border-pink-500/20 bg-pink-500/5 p-5"
      >
        <h3 className="text-pink-400 font-semibold text-sm mb-3">💡 Dicas da fase {faseAtiva}</h3>
        <div className="space-y-2">
          {plano.dicas.map((dica, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-pink-400 text-sm flex-shrink-0">→</span>
              <p className="text-white/80 text-sm">{dica}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
