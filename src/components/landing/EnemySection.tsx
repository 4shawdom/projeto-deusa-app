import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const problems = [
  {
    title: "Treinos extremos",
    desc: "Protocolos de alta carga pensados para o corpo masculino que elevam cortisol e bloqueiam a perda de gordura feminina.",
  },
  {
    title: "Dietas rígidas",
    desc: "Restrições calóricas severas que desequilibram hormônios, travam o metabolismo e fazem o efeito rebote.",
  },
  {
    title: "Hormônios ignorados",
    desc: "Nenhum programa leva em conta o ciclo menstrual, estrogênio e progesterona — os verdadeiros controladores do seu peso.",
  },
];

export function EnemySection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4">
            A raiz do problema
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6">
            A maioria dos programas fitness{" "}
            <span className="gradient-text italic font-normal">foi criada para homens.</span>
          </h2>
          <p className="text-muted-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Treinos extremos, dietas rígidas e hormônios completamente ignorados.
            Quando uma mulher segue esses métodos, ela treina contra o próprio corpo — e perde.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white rounded-[2rem] p-8 border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 tracking-tight">{p.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-body">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-[2rem] border border-primary/10 bg-primary/5">
            <p className="text-xl sm:text-2xl font-display font-bold text-foreground tracking-tight leading-snug">
              Resultado:{" "}
              <span className="gradient-text italic font-normal">
                mulheres se esforçam ao máximo, não veem resultado — e ainda se culpam por isso.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
