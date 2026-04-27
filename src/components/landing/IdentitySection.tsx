import { motion } from "framer-motion";

export function IdentitySection() {
  const lines = [
    "Existem dois tipos de mulheres.",
    "As que ficam prometendo que vão começar na segunda...",
    "E as que tomam o controle do corpo, da confiança e da vida.",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="container mx-auto px-4 relative z-10 max-w-3xl text-center">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            className={`text-xl sm:text-2xl leading-relaxed mb-6 ${i === 2 ? "font-semibold text-foreground" : "text-muted-foreground"}`}
          >
            {line}
          </motion.p>
        ))}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-display font-bold gradient-text mt-8"
        >
          Essas mulheres fazem parte do Projeto Deusa.
        </motion.p>
      </div>
    </section>
  );
}
