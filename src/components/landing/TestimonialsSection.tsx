import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    initials: "AC",
    name: "Ana Carolina",
    age: "31 anos",
    text: "Eu tentei tudo. Dieta, academia, personal. Nada funcionava. Com o Projeto Deusa entendi que meu metabolismo é diferente. Em 6 semanas perdi 12kg e me sinto uma pessoa nova.",
    result: "−12kg em 6 semanas",
    color: "from-pink-500 to-purple-600",
  },
  {
    initials: "JS",
    name: "Juliana Santos",
    age: "28 anos",
    text: "Depois da gravidez meu corpo parecia não me obedecer mais. O programa pós-parto do Projeto Deusa me devolveu minha confiança. Hoje me olho no espelho com orgulho.",
    result: "Recuperação pós-parto",
    color: "from-violet-500 to-pink-600",
  },
  {
    initials: "MC",
    name: "Mariana Costa",
    age: "37 anos",
    text: "Nunca imaginei conseguir resultados treinando só 25 minutos por dia. Os treinos metabólicos são incríveis. Em 5 semanas meu corpo mudou completamente.",
    result: "Transformação em 5 semanas",
    color: "from-fuchsia-500 to-rose-500",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4">
            Resultados reais
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight">
            Mulheres que{" "}
            <span className="gradient-text italic font-normal">já desbloquearam</span>{" "}
            a transformação
          </h2>
          <p className="text-muted-foreground/80 max-w-xl mx-auto font-body text-lg">
            Sem filtros, sem edição. Histórias reais de mulheres que decidiram parar
            de treinar errado e começaram a trabalhar com o próprio corpo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-[2.5rem] p-8 border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-6 flex-shrink-0" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8 flex-1 italic font-body">
                "{t.text}"
              </p>

              <div className="border-t border-primary/5 pt-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <span className="text-white text-sm font-bold uppercase">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold text-base text-foreground/90 tracking-tight">{t.name}</p>
                    <p className="text-sm text-muted-foreground font-medium">{t.age}</p>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                    {t.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
