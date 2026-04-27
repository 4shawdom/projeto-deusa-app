import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const PAYMENT_LINK = "https://pay.cakto.com.br/nftmszh_823144";

const phases = [
  {
    weeks: "Semana 1–2",
    label: "Ativação",
    color: "from-pink-500/20 to-purple-600/10",
    borderColor: "border-pink-500/30",
    dotColor: "bg-pink-500",
    items: [
      "Seu metabolismo começa a despertar",
      "O corpo deixa de acumular gordura como padrão",
      "Primeiros sinais de mais energia no dia a dia",
    ],
  },
  {
    weeks: "Semana 3–4",
    label: "Queima de Gordura",
    color: "from-purple-500/20 to-fuchsia-600/10",
    borderColor: "border-purple-500/30",
    dotColor: "bg-purple-500",
    items: [
      "Gordura abdominal começa a ceder",
      "Roupas começam a ficar mais largas",
      "Energia e disposição em alta",
    ],
  },
  {
    weeks: "Semana 5–6",
    label: "Transformação Visível",
    color: "from-fuchsia-500/20 to-rose-500/10",
    borderColor: "border-fuchsia-500/30",
    dotColor: "bg-fuchsia-500",
    items: [
      "Mudança visível no espelho e nas fotos",
      "Confiança voltando com força",
      "Corpo, energia e autoestima transformados",
    ],
  },
];

export function TransformationTimelineSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-4">
            A jornada de 45 dias
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
            O que acontece no seu corpo{" "}
            <span className="gradient-text italic font-normal">semana a semana</span>
          </h2>
          <p className="text-muted-foreground/80 max-w-xl mx-auto text-lg font-body">
            Cada fase foi desenhada para construir sobre a anterior.
            A transformação é progressiva — e cumulativa.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-20">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}
              >
                {/* Content card */}
                <div className="w-full md:w-5/12">
                  <div className={`bg-white rounded-[2.5rem] p-8 border border-primary/10 shadow-sm hover:shadow-xl transition-all duration-500`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_hsl(20,80%,60%,0.5)]`} />
                      <span className="text-xs font-bold uppercase tracking-widest text-primary/60">
                        {phase.weeks}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-primary mb-6 tracking-tight leading-tight">
                      {phase.label}
                    </h3>
                    <ul className="space-y-4">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-base text-foreground/80 font-body">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center dot on desktop */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-8 h-8 rounded-full bg-primary border-4 border-white shadow-lg z-10 flex items-center justify-center`} >
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                </div>

                {/* Phase number */}
                <div className="w-full md:w-5/12 flex justify-center md:justify-start">
                  <div className="text-center md:text-left">
                    <span className="font-display text-8xl sm:text-9xl font-bold opacity-10 text-primary select-none pointer-events-none">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="max-w-3xl mx-auto p-10 rounded-[3rem] border border-primary/10 bg-primary/5 mb-12">
            <p className="font-display text-2xl sm:text-3xl font-bold mb-8 leading-tight tracking-tight">
              Em 45 dias, você pode ser{" "}
              <span className="gradient-text italic font-normal">completamente diferente.</span>
            </p>
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 gradient-bg text-white font-bold px-10 py-5 rounded-full shadow-[0_15px_30px_hsl(20,80%,60%,0.3)] hover:shadow-[0_20px_45px_hsl(20,80%,60%,0.5)] hover:scale-105 transition-all duration-300 text-lg sm:text-xl"
            >
              Quero começar minha jornada
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
