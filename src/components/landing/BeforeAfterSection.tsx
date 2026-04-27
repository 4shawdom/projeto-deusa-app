import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroWoman from "@/assets/hero-woman.jpg";
import mockup from "/mockup.png";

const PAYMENT_LINK = "https://pay.cakto.com.br/nftmszh_823144";

const beforeTags = ["exausta", "frustrada", "sem resultado", "metabolismo lento", "sem motivação"];
const afterTags  = ["−12kg", "energia de volta", "confiança", "feliz", "transformada"];

export function BeforeAfterSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4">
            Antes × Depois
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Qual dessas mulheres{" "}
            <span className="gradient-text italic font-normal">é você hoje?</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-md mx-auto text-lg font-body">
            A única diferença entre elas não é esforço, não é genética.{" "}
            <span className="text-foreground font-bold">É o método.</span>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* ── ANTES ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white group"
          >
            {/* Photo — muted, darker tones */}
            <img
              src="/landing/problem.png"
              alt="Mulher antes da transformação"
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.6] group-hover:scale-105 transition-transform duration-1000"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase">
              Antes
            </div>

            {/* Tags */}
            <div className="absolute top-16 inset-x-6 flex flex-wrap gap-2">
              {beforeTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-xs uppercase tracking-wider font-bold text-white/70 bg-black/20 border border-white/10 px-3 py-1 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Bottom copy */}
            <div className="absolute bottom-0 inset-x-0 p-8">
              <p className="text-white font-display text-xl sm:text-2xl font-bold leading-tight mb-2">
                "Faço tudo certo e não emagreço."
              </p>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                Treino, dieta, esforço — e o corpo não responde. A culpa nunca foi sua.
              </p>
            </div>
          </motion.div>

          {/* ── DEPOIS ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl shadow-primary/20 border-4 border-white group"
          >
            {/* Photo — warm, vibrant */}
            <img
              src="/landing/transformation.png"
              alt="Mulher após a transformação"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />

            {/* Warm terracotta cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,hsl(20,80%,60%,0.15)_0%,transparent_60%)] pointer-events-none" />

            {/* Badge */}
            <div className="absolute top-6 left-6 flex items-center gap-2 gradient-bg text-white text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase shadow-lg">
              Depois · 45 dias
            </div>

            {/* Tags */}
            <div className="absolute top-16 inset-x-6 flex flex-wrap gap-2">
              {afterTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55 + i * 0.1 }}
                  className="text-xs uppercase tracking-wider font-bold text-white bg-primary/40 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md shadow-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Bottom copy */}
            <div className="absolute bottom-0 inset-x-0 p-8">
              <p className="text-white font-display text-xl sm:text-2xl font-bold leading-tight mb-2">
                "Finalmente entendi o meu corpo."
              </p>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                Em 45 dias, resultado real — sem academia, sem dieta extrema.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 gradient-bg text-white font-bold px-10 py-5 rounded-full shadow-[0_15px_30px_hsl(20,80%,60%,0.3)] hover:shadow-[0_20px_45px_hsl(20,80%,60%,0.5)] hover:scale-105 transition-all duration-300 text-lg sm:text-xl"
          >
            Quero ser o depois
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
