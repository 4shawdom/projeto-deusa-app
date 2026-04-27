import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PAYMENT_LINK = "https://pay.cakto.com.br/nftmszh_823144";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/40 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-display font-bold gradient-text tracking-wide">
          Projeto Deusa
        </span>

        <a
          href={PAYMENT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="gradient-bg text-white font-semibold px-5 py-2.5 rounded-full shadow-md hover:opacity-90 hover:scale-105 transition-all duration-200 text-sm"
        >
          <span className="hidden sm:inline">Começar minha transformação</span>
          <span className="sm:hidden">Começar</span>
        </a>
      </div>
    </motion.header>
  );
}
