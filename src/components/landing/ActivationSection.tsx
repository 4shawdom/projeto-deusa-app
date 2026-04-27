import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";

const REDIRECT_URL = "https://projeto-deusa-9edt-git-main-4shawdoms-projects.vercel.app/criar-senha";

export function ActivationSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleActivate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: REDIRECT_URL,
    });

    setLoading(false);
    if (error) {
      setError("Ocorreu um erro. Tente novamente.");
    } else {
      setSent(true);
    }
  }

  return (
    <section id="ativar" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative z-10 max-w-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 border border-primary/20 shadow-[0_0_60px_hsl(330,80%,60%,0.1)]"
        >
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Já comprei
            </div>
            <h2 className="font-display text-2xl font-bold mb-2">
              Ativar minha{" "}
              <span className="gradient-text italic">conta</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Digite o email usado na compra para receber o link de acesso.
            </p>
          </div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4"
            >
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <p className="font-semibold text-white mb-1">Email enviado!</p>
              <p className="text-sm text-muted-foreground">
                Verifique sua caixa de entrada e clique no link para criar sua senha.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleActivate} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-pink-500/50 transition-all text-sm"
                />
              </div>

              {error && (
                <p className="text-red-400 text-xs text-center">{error}</p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full gradient-bg text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Ativar minha conta
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
