import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Mail, Music2 } from "lucide-react";
import { SlideIn } from "@/components/animations/SlideIn";
import { Reveal } from "@/components/animations/Reveal";


export default function LandingPROPRO() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:py-28 text-center">
        {/* Fondo suave */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent dark:from-indigo-400/10" />
        </div>
        <Reveal>
        <span className="inline-block rounded-full border px-3 py-1 text-xs text-muted-foreground mb-6">
          Propósito Profesional
        </span>
        </Reveal>

        <Reveal delay={0.05}>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          PRO&PRO{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            tu app de exploración vocacional.
          </span>
        </h2>
        </Reveal>

          <Reveal delay={0.1}>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-8">
          UNLP
        </p>
          </Reveal>

          <Reveal delay={0.15}>
        <Button
          size="lg"
         className="rounded-2xl gap-2"
         onClick={() => window.open("https://explorador-vocacional.vercel.app/", "_blank")}>
         ¡Comenzar aventura! <ArrowRight className="w-4 h-4" />
        </Button>
          </Reveal>
        </section>

      {/* HOW IT WORKS — estilo Pitch con videos */}
<section className="px-6 py-24 md:py-32 bg-background">
  <div className="max-w-5xl mx-auto">
    <Reveal>
    <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">
      ¿Cómo funciona PRO&PRO?
    </h2>
    </Reveal>

    <div className="space-y-24">
      {/* PASO 1 — video izquierda */}
      <SlideIn from="left">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Video */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-black aspect-video">
              <video
                src="/videos/registro.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Video tutorial de registro en PRO&PRO"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Texto */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              1. Registrate e iniciá tu aventura
            </h3>
            <p className="text-muted-foreground">
              Creá tu cuenta y comenzá el recorrido diseñado para guiarte paso a paso.
            </p>
          </div>
        </div>
      </SlideIn>

      {/* PASO 2 — video derecha */}
      <SlideIn from="right">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto (a la izquierda en desktop) */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-3">
              2. Descubrí tus posibilidades
            </h3>
            <p className="text-muted-foreground">
              Explorá tus intereses con actividades creadas para ayudarte a entender tu perfil.
            </p>
          </div>
          {/* Video (a la derecha en desktop) */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-black aspect-video">
              <video
                src="/videos/comenzar.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Video tutorial para comenzar en PRO&PRO"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </SlideIn>

      {/* PASO 3 — video izquierda */}
      <SlideIn from="left">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Video */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-black aspect-video">
              <video
                src="/videos/tutorial.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Video tutorial interactivo de PRO&PRO"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Texto */}
          <div>
            <h3 className="text-2xl font-bold mb-3">
              3. Intentá el tutorial
            </h3>
            <p className="text-muted-foreground">
              Practicá con un tutorial interactivo para entender cada dinámica antes de comenzar.
            </p>
          </div>
        </div>
      </SlideIn>

      {/* PASO 4 — video derecha */}
      <SlideIn from="right">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Texto (izquierda en desktop) */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-3">
              4. Consultá el glosario
            </h3>
            <p className="text-muted-foreground">
              Accedé a definiciones claras para comprender conceptos clave durante tu proceso.
            </p>
          </div>
          {/* Video (derecha en desktop) */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-black aspect-video">
              <video
                src="/videos/glosario.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Video del glosario de PRO&PRO"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </SlideIn>
    </div>

    {/* CTA final de sección */}
    <Reveal delay={0.1}>
    <div className="text-center mt-24">
      <Button
        size="lg"
        className="rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => window.open("https://explorador-vocacional.vercel.app/", "_self")}
      >
        Comenzar ahora
      </Button>
    </div>
    </Reveal>
  </div>
</section>


      {/* CONTACTO */}
      <section id="contact" className="px-6 py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6">
            ¿Charlamos sobre tu proyecto?
          </h3>
          <p className="text-muted-foreground">Pronto agregamos el formulario.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-muted bg-background py-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:justify-between justify-center gap-4 px-6 text-sm text-muted-foreground">
          {/* Marca */}
          <div className="font-display font-semibold text-foreground">
            PRO&PRO © {new Date().getFullYear()}
          </div>

          {/* Redes */}
          <div className="flex items-center gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/pro.pro.videojuego/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden md:inline">Instagram</span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@pro.pro.videojuego"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
            >
              <Music2 className="w-5 h-5" />
              <span className="hidden md:inline">TikTok</span>
            </a>

            {/* Mail */}
            <a
              href="mailto:pro.pro.unlp@gmail.com"
              className="flex items-center gap-2 hover:text-indigo-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden md:inline">pro.pro.unlp@gmail.com</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
