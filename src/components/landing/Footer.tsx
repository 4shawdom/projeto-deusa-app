import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-primary/5 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <span className="font-display text-2xl font-bold text-primary block mb-6 tracking-tight">
          Projeto Deusa
        </span>

        <div className="flex items-center justify-center gap-6 mb-8">
          <a
            href="#"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary/30 transition-all hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <p className="text-base text-muted-foreground/80 font-medium mb-2 tracking-tight">
          A jornada para a sua melhor versão começa aqui.
        </p>
        <p className="text-xs text-muted-foreground/40 font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Projeto Deusa • Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
