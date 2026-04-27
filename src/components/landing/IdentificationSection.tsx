import { motion } from "framer-motion";
import { XCircle } from "lucide-react";
import heroWoman from "@/assets/hero-woman.jpg";

const frustrations = [
  "Tenta dieta após dieta — e nada funciona de verdade",
  "Malha todos os dias, mas o corpo quase não muda",
  "Sente que o metabolismo é lento e trava qualquer resultado",
  "Fica sem motivação porque nada parece funcionar para você",
  "Tem dificuldade em perder a gordura da barriga",
  "Tentou voltar ao corpo pós-gravidez e se sentiu perdida",
];

export function IdentificationSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4">
            Você se reconhece aqui?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            Se você já sentiu isso,{" "}
            <span className="gradient-text italic font-normal">você não está sozinha.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pain points list */}
          <div className="grid gap-4">
            {frustrations.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-4 bg-white/50 backdrop-blur-sm rounded-[1.5rem] px-6 py-5 border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <XCircle className="w-5 h-5 text-primary/80 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg text-foreground/90 font-medium tracking-tight leading-snug">{item}</span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4"
            >
              <div className="px-8 py-6 rounded-[2rem] border border-primary/20 bg-primary/5 shadow-inner">
                <p className="font-display text-xl sm:text-2xl font-bold leading-relaxed text-center">
                  Talvez o problema{" "}
                  <span className="gradient-text italic font-normal">nunca tenha sido</span>{" "}
                  o seu esforço.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Frustrated woman visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-[3rem] overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[600px] order-first lg:order-last shadow-2xl border-8 border-white"
          >
            <img
              src="/landing/problem.png"
              alt="Visual de desafio"
              className="w-full h-full object-cover"
            />
            {/* Cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Floating frustration keywords */}
            <div className="absolute top-8 inset-x-8 flex flex-wrap gap-3">
              {["sem resultado", "cansada", "frustrada", "metabolismo lento"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15 }}
                  className="text-xs uppercase tracking-widest font-bold text-white bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Bottom caption */}
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-display text-xl sm:text-2xl font-bold mb-2">
                "Eu faço tudo certo..."
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                E mesmo assim o corpo não responde. Isso não é falta de esforço.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
