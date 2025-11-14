import React from "react";
import { Moon, Sun } from "lucide-react";

function setTheme(dark: boolean) {
  const root = document.documentElement;
  if (dark) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

export default function ThemeToggle() {
  const [dark, setDark] = React.useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    // preferencia del sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  React.useEffect(() => { setTheme(dark); }, [dark]);

  return (
    <button
      onClick={() => setDark((v) => !v)}
      className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm hover:bg-accent/20"
      title="Cambiar tema"
    >
      {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      {dark ? "Claro" : "Oscuro"}
    </button>
  );
}
