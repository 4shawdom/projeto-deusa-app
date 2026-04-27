import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const PAYMENT_LINK = "https://pay.cakto.com.br/nftmszh_823144";

const includes = [
  "Treinos metabólicos curtos (12 a 20 min por dia)",
  "Rotinas guiadas passo a passo em casa",
  "Checklists de hábitos femininos diários",
  "Princípios de nutrição feminina anti-inchaço",
  "Sessões rápidas que cabem em qualquer rotina",
];

export function ProductIntroSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4">
              Conheça o app
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6 tracking-tight">
              Conheça o{" "}
              <span className="gradient-text italic font-normal">Projeto Deusa</span>
            </h2>
            <p className="text-muted-foreground/80 text-lg leading-relaxed mb-8 font-body">
              Um app criado especificamente para a transformação feminina em 45 dias —
              em casa, sem academia, sem dietas extremas.
              Não são apenas treinos: é um método completo que respeita o seu corpo.
            </p>

            <div className="space-y-4 mb-10">
              {includes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-base sm:text-lg font-medium tracking-tight text-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>

            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 gradient-bg text-white font-bold px-8 py-4 rounded-full shadow-[0_10px_30px_hsl(20,80%,60%,0.3)] hover:shadow-[0_15px_40px_hsl(20,80%,60%,0.45)] hover:scale-105 transition-all duration-300"
            >
              Conhecer o Projeto Deusa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right - product card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-[60px] opacity-30 -z-10" />
              <div className="relative bg-white rounded-[3rem] p-10 border border-primary/10 text-center shadow-2xl">
                <div className="w-20 h-20 rounded-[1.5rem] gradient-bg flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-primary mb-2 tracking-tight leading-tight">
                  Projeto Deusa
                </h3>
                <p className="text-sm text-primary font-bold tracking-widest uppercase mb-8 opacity-80">
                  Transformação em 45 dias
                </p>
                <div className="space-y-4 text-left mb-8">
                  {["Treinos de 12 min", "Em casa, sem equipamentos", "Hábitos diários guiados", "Nutrição feminina", "Comunidade exclusiva"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-base">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80 font-medium tracking-tight">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-primary/5">
                  <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest">Acesso vitalício · Garantia 7 dias</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
