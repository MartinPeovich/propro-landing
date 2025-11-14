import React from "react";
import { Moon, Sun } from "lucide-react";

/** Toggle de tema persistente (localStorage) */
function useTheme() {
  const [dark, setDark] = React.useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, setDark };
}

export default function Header() {
  const { dark, setDark } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* LOGO textual con contraste dinámico */}
        <a href="#" className="select-none">
          <h1 className="font-display text-2xl md:text-3xl font-extrabold">
            <span className="text-foreground">PRO</span>
            <span className="mx-1 text-primary dark:text-indigo-400">&</span>
            <span className="text-foreground">PRO</span>
          </h1>
        </a>

        {/* NAV */}
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#services" className="transition hover:text-primary">Servicios</a>
          <a href="#projects" className="transition hover:text-primary">Proyectos</a>
          <a href="#contact" className="transition hover:text-primary">Contacto</a>
        </nav>

        {/* Toggle tema */}
        <button
          onClick={() => setDark((v) => !v)}
          className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:bg-accent/20 transition"
          title={dark ? "Cambiar a claro" : "Cambiar a oscuro"}
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {dark ? "Claro" : "Oscuro"}
        </button>
      </div>
    </header>
  );
}
