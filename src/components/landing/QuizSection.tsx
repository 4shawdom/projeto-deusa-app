import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Loader2 } from "lucide-react";

const PAYMENT_LINK = "https://pay.cakto.com.br/nftmszh_823144";

const questions = [
  {
    question: "Qual é a sua faixa etária?",
    options: ["18 a 24 anos", "25 a 32 anos", "33 a 40 anos", "41 a 45+ anos"],
  },
  {
    question: "Qual é o seu principal objetivo?",
    options: [
      "Perder gordura e definir o corpo",
      "Recuperar o corpo após a gravidez",
      "Ter mais energia e disposição",
      "Recuperar a confiança e autoestima",
    ],
  },
  {
    question: "Por que você tem dificuldade em emagrecer?",
    options: [
      "Metabolismo parece muito lento",
      "Hormônios desregulados",
      "Falta de tempo para treinar",
      "Já tentei muitas dietas e nada funciona",
    ],
  },
  {
    question: "Como está sua energia no dia a dia?",
    options: [
      "Cansada a maior parte do tempo",
      "Energia muito variável, altos e baixos",
      "Razoável, mas poderia ser melhor",
      "Extremamente esgotada",
    ],
  },
];

type Stage = "quiz" | "analyzing" | "result";

export function QuizSection() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [stage, setStage] = useState<Stage>("quiz");

  useEffect(() => {
    if (stage === "analyzing") {
      const timer = setTimeout(() => setStage("result"), 2800);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleAnswer = (answer: string) => {
    const next = [...answers, answer];
    setAnswers(next);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setStage("analyzing");
    }
  };

  const progress = stage !== "quiz"
    ? 100
    : (current / questions.length) * 100;

  return (
    <section id="quiz" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />

      <div className="relative z-10 max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            Personalização
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
            Descubra seu{" "}
            <span className="gradient-text italic">perfil metabólico</span>
          </h2>
          <p className="text-muted-foreground">
            Responda 4 perguntas rápidas para identificar por que o seu corpo não responde aos métodos tradicionais.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>
              {stage === "quiz"
                ? `Pergunta ${current + 1} de ${questions.length}`
                : stage === "analyzing"
                ? "Analisando..."
                : "Análise concluída!"}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full gradient-bg rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 sm:p-8 min-h-[360px] flex items-center justify-center border border-border/50">
          <AnimatePresence mode="wait">
            {stage === "quiz" && (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-7 text-center">
                  {questions[current].question}
                </h3>
                <div className="grid gap-3">
                  {questions[current].options.map((opt) => (
                    <motion.button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full text-left px-5 py-4 rounded-xl border border-border bg-muted/20 hover:border-primary hover:bg-primary/10 transition-all text-sm sm:text-base font-medium"
                    >
                      {opt}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {stage === "analyzing" && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="text-center w-full py-6"
              >
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(330,80%,60%,0.4)]">
                  <Loader2 className="w-8 h-8 text-white animate-spin" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  Analisando seu perfil metabólico...
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                  Estamos identificando por que o seu corpo pode não estar respondendo
                  aos métodos tradicionais de emagrecimento.
                </p>
                <div className="flex justify-center gap-1.5 mt-6">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-primary"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {stage === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center w-full"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/8 mb-5 text-xs font-semibold text-primary">
                  Análise concluída
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">
                  Seu metabolismo pode não estar respondendo aos métodos tradicionais.
                </h3>
                <p className="text-muted-foreground mb-8 max-w-sm mx-auto text-sm leading-relaxed">
                  Com base no seu perfil, seu corpo precisa de uma abordagem metabólica feminina —
                  não de mais força de vontade. Criamos um plano específico para você.
                </p>
                <a
                  href={PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 gradient-bg text-white font-bold px-8 py-4 rounded-2xl shadow-[0_0_40px_hsl(330,80%,60%,0.35)] hover:shadow-[0_0_60px_hsl(330,80%,60%,0.5)] hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5" />
                  Ver meu plano de transformação
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
