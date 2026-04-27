import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PAYMENT_LINK = "https://pay.cakto.com.br/nftmszh_823144";

const visions = [
  { emoji: "👗", text: "Suas roupas voltando a servir — e você escolhendo o que vestir com confiança" },
  { emoji: "⚡", text: "Se sentindo mais leve, com energia de manhã ao acordar" },
  { emoji: "🪞", text: "Se olhando no espelho e reconhecendo o corpo que você sempre quis ter" },
  { emoji: "💪", text: "Confiança voltando — no seu corpo, na sua força, na sua feminilidade" },
];

export function FutureVisionSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4">
            Sua transformação
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Imagine você{" "}
            <span className="gradient-text italic font-normal">45 dias</span>{" "}
            a partir de hoje...
          </h2>
          <p className="text-muted-foreground/80 text-lg max-w-xl mx-auto font-body">
            Não é fantasia. É o que acontece quando você para de lutar contra o próprio corpo
            e começa a usar o método certo para a sua fisiologia.
          </p>
        </motion.div>

        <div className="grid gap-6 mb-16 text-left">
          {visions.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-center gap-6 bg-white rounded-[2rem] px-8 py-5 border border-primary/5 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <span className="text-3xl flex-shrink-0">{v.emoji}</span>
              <p className="text-base sm:text-lg text-foreground/80 font-medium tracking-tight font-body">{v.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <p className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight leading-tight">
            Essa mulher já existe dentro de você.
            <span className="gradient-text italic font-normal"> Ela só precisa do método certo.</span>
          </p>
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 gradient-bg text-white font-bold px-10 py-5 rounded-full shadow-[0_15px_30px_hsl(20,80%,60%,0.3)] hover:shadow-[0_20px_45px_hsl(20,80%,60%,0.5)] hover:scale-105 transition-all duration-300 text-lg sm:text-xl"
          >
            Quero começar agora
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
