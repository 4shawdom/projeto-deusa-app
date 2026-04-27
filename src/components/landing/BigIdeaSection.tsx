import { motion } from "framer-motion";
import { Flame, Battery, CheckCircle } from "lucide-react";

const discoveries = [
  {
    icon: Flame,
    title: "Queima de gordura aumenta",
    desc: "Treinos curtos e metabólicos alinhados com a fisiologia feminina ativam a queima de gordura de forma muito mais eficiente.",
  },
  {
    icon: Battery,
    title: "Energia melhora",
    desc: "Quando você para de treinar contra o próprio corpo, a energia volta — e você se sente disposta de manhã à noite.",
  },
  {
    icon: CheckCircle,
    title: "Consistência fica fácil",
    desc: "Sessões de 12 minutos são fáceis de manter. Quando o método respeita sua rotina, a consistência acontece naturalmente.",
  },
];

export function BigIdeaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4">
            A descoberta
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Quando os treinos se alinham com{" "}
            <span className="gradient-text italic font-normal">a fisiologia feminina,</span>{" "}
            tudo muda.
          </h2>
          <p className="text-muted-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed font-body">
            A ativação metabólica feminina é uma abordagem que respeita como o corpo da mulher
            funciona — e os resultados chegam em semanas, não anos.
          </p>
        </motion.div>

        {/* Visual equation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20 text-center"
        >
          {["Treinos Curtos", "Metabolismo Feminino", "Hábitos Diários"].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="px-6 py-4 rounded-[1.5rem] bg-white border border-primary/10 font-bold text-sm sm:text-base whitespace-nowrap shadow-sm">
                {item}
              </div>
              {i < 2 && <span className="text-primary font-bold text-2xl">+</span>}
            </div>
          ))}
          <span className="text-primary font-bold text-3xl">=</span>
          <div className="px-8 py-4 rounded-[1.5rem] gradient-bg font-bold text-sm sm:text-base text-white shadow-[0_10px_30px_hsl(20,80%,60%,0.3)]">
            Transformação em 45 dias
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8">
          {discoveries.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-[2.5rem] p-8 text-center border border-primary/5 group shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-[1.5rem] gradient-bg flex items-center justify-center mx-auto mb-6 shadow-[0_8px_20px_hsl(20,80%,60%,0.2)] group-hover:shadow-[0_12px_32px_hsl(20,80%,60%,0.4)] transition-all">
                <d.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold mb-4 tracking-tight text-primary leading-tight">{d.title}</h3>
              <p className="text-base text-muted-foreground/90 leading-relaxed font-body">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
