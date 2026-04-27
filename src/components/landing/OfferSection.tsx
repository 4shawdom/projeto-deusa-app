import { motion } from "framer-motion";
import { Check, Shield, Infinity, Sparkles, ArrowRight, Zap } from "lucide-react";

const PAYMENT_LINK = "https://pay.cakto.com.br/nftmszh_823144";

const benefits = [
  "Acesso vitalício à biblioteca de treinos metabólicos",
  "Treinos de 12 minutos para fazer em casa",
  "Checklists de hábitos femininos diários",
  "Protocolos pós-parto e gordura abdominal",
  "Orientações de nutrição adaptada ao metabolismo",
  "Comunidade exclusiva Projeto Deusa",
  "Todas as atualizações futuras incluídas",
];

export function OfferSection() {
  return (
    <section id="offer" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4">
            Oferta de lançamento
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Comece sua{" "}
            <span className="gradient-text italic font-normal">transformação de 45 dias</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[3rem] overflow-hidden border border-primary/10 shadow-2xl"
        >
          {/* Price header */}
          <div className="gradient-bg px-8 pt-10 pb-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 animate-pulse backdrop-blur-sm border border-white/20 uppercase tracking-widest">
                <Zap className="w-4 h-4 fill-white" />
                Vagas limitadas
              </div>
              <div className="flex items-baseline justify-center gap-3 mb-2">
                <span className="text-white/40 line-through text-2xl font-bold">R$197</span>
                <div className="flex items-start">
                  <span className="text-white text-2xl font-bold mt-2">R$</span>
                  <span className="text-7xl sm:text-8xl font-bold text-white tracking-tighter">19</span>
                  <span className="text-3xl font-bold text-white mt-1">,90</span>
                </div>
              </div>
              <p className="text-white font-bold text-base tracking-wide mt-2 opacity-90 uppercase">
                Pague uma vez · Acesse para sempre
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="px-10 py-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6">
              O que está incluso
            </p>
            <div className="space-y-4 mb-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-base sm:text-lg font-medium text-foreground/80 tracking-tight">{b}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 gradient-bg text-white font-bold py-5 rounded-full text-lg sm:text-xl shadow-[0_15px_30px_hsl(20,80%,60%,0.3)] hover:shadow-[0_20px_45px_hsl(20,80%,60%,0.5)] transition-all"
            >
              <Sparkles className="w-6 h-6" />
              Começar transformação
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <Infinity className="w-4 h-4 text-primary" />
                <span>Acesso vitalício</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
