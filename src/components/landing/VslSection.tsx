import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Treinos inteligentes para o metabolismo feminino",
  "Nutrição anti-inchaço",
  "Rotinas de ativação corporal",
];

export function VslSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Por que a maioria das mulheres{" "}
            <span className="gradient-text">nunca consegue</span> o corpo que deseja
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden mb-10 glass-card"
        >
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster=""
          >
            <source src="/videos/vsl.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-muted-foreground mb-6 text-center">
            A maioria dos planos fitness falha porque trata corpos femininos como masculinos.
            O Projeto Deusa usa um sistema simples criado especificamente para o metabolismo e hormônios femininos.
          </p>
          <p className="text-muted-foreground mb-6 text-center">
            Dentro do app, você segue uma estrutura diária passo a passo que combina:
          </p>
          <div className="flex flex-col gap-3">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-muted/30"
              >
                <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
                <span className="font-medium">{p}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-6 text-lg font-semibold gradient-text">
            Isso cria uma transformação rápida e visível.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
