import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingDown, Users, Star, Clock, Zap } from "lucide-react";

function AnimatedNumber({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      setValue(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{value.toLocaleString("pt-BR")}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Mulheres transformadas",
    color: "text-primary",
    glow: "shadow-md hover:shadow-lg",
  },
  {
    icon: TrendingDown,
    value: 12,
    prefix: "−",
    suffix: "kg",
    label: "Média de perda de peso",
    color: "text-primary",
    glow: "shadow-md hover:shadow-lg",
  },
  {
    icon: Star,
    value: 94,
    suffix: "%",
    label: "De aprovação",
    color: "text-primary",
    glow: "shadow-md hover:shadow-lg",
  },
  {
    icon: Clock,
    value: 12,
    suffix: " min",
    label: "Por treino",
    color: "text-primary",
    glow: "shadow-md hover:shadow-lg",
  },
  {
    icon: Zap,
    value: 45,
    suffix: " dias",
    label: "Para transformação",
    color: "text-primary",
    glow: "shadow-md hover:shadow-lg",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-bold">
            Resultados que falam por si
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`bg-white rounded-[2rem] p-6 text-center border border-primary/10 transition-all duration-300 ${s.glow}`}
            >
              <div className={`w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4`}>
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <p className={`font-display text-3xl sm:text-4xl font-bold ${s.color} mb-2 tracking-tight`}>
                <AnimatedNumber
                  target={s.value}
                  suffix={s.suffix}
                  prefix={s.prefix}
                />
              </p>
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-tight leading-snug">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
