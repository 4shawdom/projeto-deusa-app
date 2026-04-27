import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, Zap, Star } from "lucide-react";

const PAYMENT_LINK = "https://pay.cakto.com.br/nftmszh_823144";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 right-0 h-[70%]" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column - Text Content */}
        <div className="text-left flex flex-col items-start max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 backdrop-blur-md"
          >
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-bold tracking-wide uppercase">
              Transformação em 45 dias · Em casa · Sem academia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-6 tracking-tight"
          >
            A verdade desconfortável: você{" "}
            <span className="gradient-text italic font-normal">treina muito</span>{" "}
            e ainda não consegue emagrecer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg sm:text-xl text-muted-foreground/80 mb-10 leading-relaxed font-body"
          >
            Não é falta de disciplina. A maioria dos treinos ignora completamente
            como o metabolismo feminino realmente funciona. O <strong className="text-primary font-bold">Projeto Deusa</strong> foi feito para ativar o seu metabolismo em apenas 12 minutos por dia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 gradient-bg text-white font-bold text-base sm:text-lg px-8 py-5 rounded-full shadow-[0_10px_30px_hsl(20,80%,60%,0.3)] hover:shadow-[0_15px_40px_hsl(20,80%,60%,0.45)] hover:scale-105 transition-all duration-300"
            >
              Descobrir a transformação de 45 dias
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {[
              { icon: Star, text: "4.9/5 avaliação" },
              { icon: ShieldCheck, text: "Garantia de 7 dias" },
              { icon: Zap, text: "Acesso imediato" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/30 border border-primary/10 text-xs text-foreground/70 font-semibold backdrop-blur-sm"
              >
                <Icon className="w-3.5 h-3.5 text-primary" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mt-12 lg:mt-0 lg:ml-auto w-full max-w-md mx-auto lg:max-w-lg"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-[80px] -z-10" />
          <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="/landing/hero.png" 
              alt="Projeto Deusa Visual" 
              className="w-full h-auto drop-shadow-2xl md:hover:scale-110 transition-transform duration-1000 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
