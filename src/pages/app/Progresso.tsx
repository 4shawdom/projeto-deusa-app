import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, Plus, Scale, Ruler, Zap, Save } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useAuth } from '@/contexts/AuthContext'
import { supabase, RegistroProgresso } from '@/lib/supabase'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const niveisEnergia = [
  { valor: 1, label: 'Exausta' },
  { valor: 2, label: 'Cansada' },
  { valor: 3, label: 'Normal' },
  { valor: 4, label: 'Bem' },
  { valor: 5, label: 'Ótima!' },
]

export default function Progresso() {
  const { user } = useAuth()
  const [registros, setRegistros] = useState<RegistroProgresso[]>([])
  const [form, setForm] = useState({ peso: '', cintura: '', quadril: '', energia: 3, notas: '' })
  const [salvando, setSalvando] = useState(false)
  const [salvo, setSalvo] = useState(false)

  useEffect(() => {
    if (!user) return
    supabase
      .from('progresso')
      .select('*')
      .eq('user_id', user.id)
      .order('data', { ascending: true })
      .then(({ data }) => setRegistros(data ?? []))
  }, [user])

  async function salvarRegistro(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return
    setSalvando(true)

    const { data } = await supabase
      .from('progresso')
      .upsert({
        user_id: user.id,
        data: new Date().toISOString().split('T')[0],
        peso: form.peso ? parseFloat(form.peso) : null,
        cintura: form.cintura ? parseFloat(form.cintura) : null,
        quadril: form.quadril ? parseFloat(form.quadril) : null,
        energia: form.energia,
        notas: form.notas || null,
      }, { onConflict: 'user_id,data' })
      .select()
      .single()

    if (data) {
      setRegistros(prev => {
        const idx = prev.findIndex(r => r.data === data.data)
        if (idx >= 0) { const next = [...prev]; next[idx] = data; return next }
        return [...prev, data].sort((a, b) => a.data.localeCompare(b.data))
      })
    }

    setSalvando(false)
    setSalvo(true)
    setTimeout(() => setSalvo(false), 3000)
    setForm(f => ({ ...f, peso: '', cintura: '', quadril: '', notas: '' }))
  }

  const dadosPeso = registros
    .filter(r => r.peso !== null)
    .map(r => ({ data: format(parseISO(r.data), 'dd/MM', { locale: ptBR }), peso: r.peso }))

  const pesoInicial = dadosPeso[0]?.peso ?? 0
  const pesoAtual = dadosPeso[dadosPeso.length - 1]?.peso ?? 0
  const perdidoKg = pesoInicial && pesoAtual ? (pesoInicial - pesoAtual).toFixed(1) : '—'

  return (
    <div className="p-4 lg:p-8 pb-24 lg:pb-8 max-w-4xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl lg:text-3xl font-display font-bold text-white">
          Meu <span className="gradient-text">Progresso</span>
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Registre e acompanhe sua transformação.</p>
      </motion.div>

      {/* Stats rápidos */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-3"
      >
        {[
          { label: 'Registros', value: registros.length, icon: Scale, cor: 'from-pink-500 to-rose-600' },
          { label: 'Peso atual', value: pesoAtual ? `${pesoAtual}kg` : '—', icon: TrendingDown, cor: 'from-purple-500 to-pink-500' },
          { label: 'Perdidos', value: perdidoKg !== '—' ? `−${perdidoKg}kg` : '—', icon: Zap, cor: 'from-fuchsia-500 to-purple-600' },
        ].map((s, i) => (
          <div key={i} className="glass-card rounded-xl p-4 border border-white/10">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.cor} flex items-center justify-center mb-2`}>
              <s.icon className="w-4 h-4 text-white" />
            </div>
            <p className="text-lg font-bold text-white">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Gráfico de peso */}
      {dadosPeso.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="glass-card rounded-xl border border-white/10 p-5"
        >
          <h2 className="text-white font-semibold text-sm mb-4">Evolução do peso</h2>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={dadosPeso}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="data" tick={{ fill: '#888', fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#888', fontSize: 11 }} axisLine={false} tickLine={false} domain={['dataMin - 2', 'dataMax + 2']} />
              <Tooltip
                contentStyle={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12 }}
                labelStyle={{ color: '#fff', fontSize: 12 }}
                itemStyle={{ color: '#f472b6', fontSize: 12 }}
                formatter={(v: number) => [`${v}kg`, 'Peso']}
              />
              <Line type="monotone" dataKey="peso" stroke="#ec4899" strokeWidth={2.5} dot={{ fill: '#ec4899', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      )}

      {/* Formulário de registro */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="glass-card rounded-xl border border-white/10 p-5"
      >
        <h2 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
          <Plus className="w-4 h-4 text-pink-400" />
          Registrar de hoje
        </h2>
        <form onSubmit={salvarRegistro} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {[
              { field: 'peso', label: 'Peso (kg)', placeholder: '65.0', icon: Scale },
              { field: 'cintura', label: 'Cintura (cm)', placeholder: '72', icon: Ruler },
              { field: 'quadril', label: 'Quadril (cm)', placeholder: '95', icon: Ruler },
            ].map(({ field, label, placeholder, icon: Icon }) => (
              <div key={field} className={field === 'peso' ? 'col-span-2 sm:col-span-1' : ''}>
                <label className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1.5">
                  <Icon className="w-3 h-3" /> {label}
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={form[field as keyof typeof form] as string}
                  onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                  placeholder={placeholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-all text-sm"
                />
              </div>
            ))}

            {/* Energia */}
            <div className="col-span-2">
              <label className="text-xs text-muted-foreground mb-2 flex items-center gap-1.5">
                <Zap className="w-3 h-3" /> Nível de energia hoje
              </label>
              <div className="flex gap-2">
                {niveisEnergia.map(({ valor, label }) => (
                  <button
                    type="button"
                    key={valor}
                    onClick={() => setForm(f => ({ ...f, energia: valor }))}
                    className={`flex-1 py-2 rounded-xl text-xs font-medium transition-all ${
                      form.energia === valor
                        ? 'gradient-bg text-white'
                        : 'bg-white/5 text-muted-foreground hover:text-white border border-white/10'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Notas */}
            <div className="col-span-2">
              <label className="text-xs text-muted-foreground mb-1.5 block">Como você se sentiu? (opcional)</label>
              <textarea
                value={form.notas}
                onChange={e => setForm(f => ({ ...f, notas: e.target.value }))}
                placeholder="Ex: Me senti mais disposta hoje, o treino foi mais fácil..."
                rows={2}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-3 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-all text-sm resize-none"
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
            ) : salvo ? (
              '✓ Salvo com sucesso!'
            ) : (
              <>
                <Save className="w-4 h-4" />
                Salvar registro
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Histórico */}
      {registros.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        >
          <h2 className="text-white font-semibold text-sm mb-3">Histórico</h2>
          <div className="space-y-2">
            {[...registros].reverse().slice(0, 10).map(r => (
              <div key={r.id} className="glass-card rounded-xl border border-white/10 p-4 flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">
                    {format(parseISO(r.data), "dd 'de' MMMM", { locale: ptBR })}
                  </p>
                  {r.notas && <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{r.notas}</p>}
                </div>
                <div className="flex items-center gap-4 text-right">
                  {r.peso && <div><p className="text-white text-sm font-bold">{r.peso}kg</p><p className="text-xs text-muted-foreground">peso</p></div>}
                  {r.cintura && <div className="hidden sm:block"><p className="text-white text-sm font-bold">{r.cintura}cm</p><p className="text-xs text-muted-foreground">cintura</p></div>}
                  <div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i < (r.energia ?? 0) ? 'bg-pink-400' : 'bg-white/10'}`} />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">energia</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
