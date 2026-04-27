import { motion } from "framer-motion";
import { Timer, BarChart3, Leaf, Baby, Star, Users } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Treinos metabólicos de 12 minutos",
    desc: "Sessões curtas e poderosas que ativam o metabolismo feminino e queimam gordura — sem academia, sem equipamentos.",
  },
  {
    icon: BarChart3,
    title: "Sistema de progresso diário",
    desc: "Acompanhe cada passo da sua transformação com checklists visuais que tornam a consistência uma consequência natural.",
  },
  {
    icon: Leaf,
    title: "Nutrição focada no metabolismo",
    desc: "Orientações anti-inflamatórias e anti-inchaço adaptadas para o metabolismo e hormônios femininos.",
  },
  {
    icon: Baby,
    title: "Rotinas especiais",
    desc: "Protocolos dedicados para gordura abdominal e recuperação pós-parto com progressão segura e eficaz.",
  },
  {
    icon: Star,
    title: "Sistema de motivação guiada",
    desc: "Desafios, marcos de progresso e microrecompensas que mantêm você motivada do dia 1 ao dia 45.",
  },
  {
    icon: Users,
    title: "Comunidade de transformação",
    desc: "Grupo exclusivo de mulheres em jornada — suporte, inspiração e resultados reais compartilhados todo dia.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4">
            O que está incluso
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Tudo que você precisa,{" "}
            <span className="gradient-text italic font-normal">em um só lugar</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-xl mx-auto font-body text-lg">
            Cada recurso foi desenhado para respeitar a fisiologia feminina
            e tornar a transformação real, rápida e sustentável.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-[2.5rem] p-8 group border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-[0_8px_16px_hsl(20,80%,60%,0.2)] group-hover:shadow-[0_12px_28px_hsl(20,80%,60%,0.35)] transition-all">
                <f.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 tracking-tight leading-tight text-foreground/90">{f.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
