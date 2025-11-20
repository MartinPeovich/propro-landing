import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Mail, Music2 } from "lucide-react";
import { SlideIn } from "@/components/animations/SlideIn";
import { Reveal } from "@/components/animations/Reveal";
import { BackgroundImage } from "@/components/ui/BackgroundImage";
import registroVideo from "@/assets/videos/registro.mp4";
import comenzarVideo from "@/assets/videos/comenzar.mp4";
import glosarioVideo from "@/assets/videos/glosario.mp4";
import tutorialVideo from "@/assets/videos/tutorial.mp4";

// Constants for better maintainability
const BACKGROUND_CONFIG = {
  MAPA_IMAGE: '/mapa.png', // Fixed extension
  LOADING_STRATEGY: 'eager' as const, // Preload for hero section
  BLUR_INTENSITY: 'blur-sm',
  OVERLAY_GRADIENT: 'from-black/40 via-black/20 to-black/60'
};

export default function LandingPROPRO() {
  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 md:py-28 text-center">
        {/* Enhanced background with error handling and performance optimization */}
        <BackgroundImage
          src={BACKGROUND_CONFIG.MAPA_IMAGE}
          alt="Background map showing educational paths"
          blur={true}
          loadingStrategy={BACKGROUND_CONFIG.LOADING_STRATEGY}
          overlayClassName="-z-10 pointer-events-none"
        />


        <Reveal>
          <span className="inline-block rounded-full border px-3 py-1 text-xs text-muted-foreground mb-6">
            Propósito Profesional
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            {"Tú guía"}
            <span className="text-indigo-600 dark:text-indigo-400">
               de exploración vocacional
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
            onClick={() =>
              window.open(
                "https://explorador-vocacional.vercel.app/",
                "_blank",
              )
            }
          >
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
                <div className="order-1">
                  <div className="relative w-full max-w-md md:max-w-full mx-auto overflow-hidden rounded-3xl bg-black aspect-video">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={registroVideo} type="video/mp4" />
                      Tu navegador no soporta video HTML5.
                    </video>
                  </div>
                </div>

                {/* Texto */}
                <div className="order-2 space-y-3">
                  <h3 className="text-2xl font-bold mb-1">
                    1. Registrate e iniciá tu aventura
                  </h3>
                  <p className="text-muted-foreground">
                    Creá tu cuenta y comenzá el recorrido diseñado para
                    guiarte paso a paso en tu exploración vocacional.
                  </p>
                </div>
              </div>
            </SlideIn>

            {/* PASO 2 — video derecha */}
            <SlideIn from="right">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Texto */}
                <div className="order-2 md:order-1 space-y-3">
                  <h3 className="text-2xl font-bold mb-1">
                    2. Descubrí tus posibilidades
                  </h3>
                  <p className="text-muted-foreground">
                    Explorá tus intereses con actividades y desafíos creados
                    para ayudarte a entender tu perfil y tus gustos.
                  </p>
                </div>

                {/* Video */}
                <div className="order-1 md:order-2">
                  <div className="relative w-full max-w-md md:max-w-full mx-auto overflow-hidden rounded-3xl bg-black aspect-video">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={comenzarVideo} type="video/mp4" />
                      Tu navegador no soporta video HTML5.
                    </video>
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* PASO 3 — video izquierda */}
            <SlideIn from="left">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Video */}
                <div className="order-1">
                  <div className="relative w-full max-w-md md:max-w-full mx-auto overflow-hidden rounded-3xl bg-black aspect-video">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={tutorialVideo} type="video/mp4" />
                      Tu navegador no soporta video HTML5.
                    </video>
                  </div>
                </div>

                {/* Texto */}
                <div className="order-2 space-y-3">
                  <h3 className="text-2xl font-bold mb-1">
                    3. Explorá el tutorial interactivo
                  </h3>
                  <p className="text-muted-foreground">
                    Recorré cada sección de la app con un tutorial guiado que
                    te muestra cómo avanzar, jugar y registrar tus
                    descubrimientos.
                  </p>
                </div>
              </div>
            </SlideIn>

            {/* PASO 4 — video derecha */}
            <SlideIn from="right">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Texto */}
                <div className="order-2 md:order-1 space-y-3">
                  <h3 className="text-2xl font-bold mb-1">
                    4. Consultá el glosario cuando lo necesites
                  </h3>
                  <p className="text-muted-foreground">
                    Accedé a definiciones claras y ejemplos sobre conceptos
                    vocacionales para entender mejor cada decisión que vayas
                    tomando.
                  </p>
                </div>

                {/* Video */}
                <div className="order-1 md:order-2">
                  <div className="relative w-full max-w-md md:max-w-full mx-auto overflow-hidden rounded-3xl bg-black aspect-video">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={glosarioVideo} type="video/mp4" />
                      Tu navegador no soporta video HTML5.
                    </video>
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
                onClick={() =>
                  window.open(
                    "https://explorador-vocacional.vercel.app/",
                    "_self",
                  )
                }
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
          <p className="text-muted-foreground">
            Pronto agregamos el formulario.
          </p>
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
