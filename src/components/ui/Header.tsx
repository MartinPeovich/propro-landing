import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Tema inicial (opcional: lee de localStorage o prefers-color-scheme)
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: "light" | "dark" = stored ?? (prefersDark ? "dark" : "light");

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next: "light" | "dark" = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <header
      className="
        sticky top-0 z-50
        bg-background/80 
        backdrop-blur-xl 
        border-b border-white/10
        shadow-lg shadow-black/20
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Marca / Inicio */}
        <a
          href="#top"
          className="font-display text-xl font-extrabold tracking-tight"
        >
          PRO<span className="text-indigo-500">&</span>PRO
        </a>

        {/* Links centro */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a
            href="#how-it-works"
            className="hover:text-indigo-400 transition-colors"
          >
            Cómo funciona
          </a>

          <a
            href="#tienda"
            className="hover:text-indigo-400 transition-colors"
          >
            Tienda
          </a>

          <a
            href="#proyectos"
            className="hover:text-indigo-400 transition-colors"
          >
            Proyectos
          </a>

          <a
            href="#contact"
            className="hover:text-indigo-400 transition-colors"
          >
            Contacto
          </a>
        </nav>

        {/* CTA + toggle tema */}
        <div className="flex items-center gap-4">
          <Button
            className="rounded-full"
            size="sm"
            onClick={() =>
              window.open(
                "https://explorador-vocacional.vercel.app/",
                "_blank",
              )
            }
          >
            Probar la app
          </Button>

          <button
            onClick={toggleTheme}
            className="
              flex items-center gap-2 px-3 py-1.5 rounded-full 
              border border-white/10 
              bg-white/5 
              backdrop-blur-md
              hover:bg-white/10 
              transition
              text-xs
            "
          >
            {theme === "light" ? (
              <>
                <Sun className="w-4 h-4" /> Claro
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" /> Oscuro
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
