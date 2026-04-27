import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PAYMENT_LINK = "https://pay.cakto.com.br/nftmszh_823144";

export function FinalCta() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            Em 45 dias seu corpo pode ser{" "}
            <span className="gradient-text italic font-normal">o mesmo...</span>
          </h2>
          <p className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-12 tracking-tight">
            ou{" "}
            <span className="gradient-text italic font-normal">completamente diferente.</span>
          </p>

          <motion.a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 gradient-bg text-white font-bold text-lg sm:text-2xl px-12 py-6 rounded-full shadow-[0_15px_40px_hsl(20,80%,60%,0.35)] hover:shadow-[0_20px_60px_hsl(20,80%,60%,0.55)] transition-all duration-300"
          >
            Começar agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
            <span>Acesso imediato</span>
            <span className="hidden sm:block">•</span>
            <span>Garantia de 7 dias</span>
            <span className="hidden sm:block">•</span>
            <span>Sem mensalidade</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
