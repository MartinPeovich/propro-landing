import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Instagram,
  Mail,
  Music2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { SlideIn } from "@/components/animations/SlideIn";
import { Reveal } from "@/components/animations/Reveal";
import registroVideo from "@/assets/videos/registro.mp4";
import comenzarVideo from "@/assets/videos/comenzar.mp4";
import glosarioVideo from "@/assets/videos/glosario.mp4";
import tutorialVideo from "@/assets/videos/tutorial.mp4";
import mapaBg from "@/assets/mapa.png";




// imágenes de merchandising
import merch1 from "@/assets/tienda/tienda-1.png";
import merch2 from "@/assets/tienda/tienda-2.png";
import merch3 from "@/assets/tienda/tienda-3.png";
import merch4 from "@/assets/tienda/tienda-4.png";
import merch5 from "@/assets/tienda/tienda-5.png";


export default function LandingPROPRO() {
  const merchSlides = [
    {
      title: "Tote bag PRO&PRO",
      tag: "Nuevo",
      description:
        "Tote PRO&PRO para llevar todos tus productor pro&pro.",
      image: merch1,
    },
    {
      title: "Agenda PRO&PRO",
      tag: "Edición limitada",
      description:
        "Tu agenda PRO&PRO para llevar tus ideas siempre contigo.",
      image: merch2,
    },
    {
      title: "Poster J. V. Gonzalez",
      tag: "Para instituciones",
      description:
        "Inspirate con el poster de Joaquín V. González",
      image: merch3,
    },
    {
  title: "Remera PRO&PRO",
  tag: "Nuevo",
  description: "Remera canchera de PRO&PRO",
  image: merch5, 
},
{
  title: "Botella PRO&PRO",
  tag: "Nuevo",
  description: "Es importante mantenerse hidratado.",
  image: merch4, 
},

  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const touchStartX = useRef(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % merchSlides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? merchSlides.length - 1 : prev - 1,
    );

  // autoplay cada 8s (pausa si el modal está abierto)
  useEffect(() => {
    if (isModalOpen) return;

    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % merchSlides.length);
    }, 8000);

    return () => clearInterval(id);
  }, [isModalOpen, merchSlides.length]);

  return (
    <main className="flex flex-col">
      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden px-6 py-24 md:py-28 text-center"
      >
        {/* Fondo con mapa + blur + overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center blur-[2px] opacity-60"
            style={{ backgroundImage: `url(${mapaBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90" />
        </div>

        {/* Contenido del hero por encima del fondo */}
        <div className="relative z-10">
          <Reveal>
            <span className="inline-block rounded-full border px-3 py-1 text-xs text-muted-foreground mb-6">
              Propósito Profesional
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              {"Tú guía"}
              <span className="text-indigo-600 dark:text-indigo-400">
                {" "}
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
        </div>
      </section>

      <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-20">
  <div className="max-w-4xl mx-auto text-center space-y-4">
    <Reveal delay={0.05}>
      <h2 className="text-2xl md:text-3xl font-display font-bold">
        ¿Para quién pensamos PRO&PRO?
      </h2>
    </Reveal>
    <Reveal delay={0.1}>
      <div className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
        <p>🧑‍🎓 Estudiantes que todavía no tienen claro qué estudiar.</p>
        <p>🎮 Espacios de orientación que buscan propuestas interactivas.</p>
        <p>🏫 Escuelas, facultades y equipos que trabajan proyectos de vida.</p>
      </div>
    </Reveal>
  </div>
</section>


      {/* HOW IT WORKS — estilo Pitch con videos */}
      <section
        id="how-it-works"
        className="px-6 py-24 md:py-32 bg-background"
      >
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
                    "_blank",
                  )
                }
              >
                Comenzar ahora
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

            {/* TIENDA — carrusel de merch (simple, sin fade) */}
      <section
        id="tienda"
        className="px-6 py-24 md:py-32 bg-background border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          <Reveal>
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Tienda PRO&PRO
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Merchandising para acompañar la experiencia PRO&PRO en eventos,
                escuelas y espacios de orientación.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="relative select-none">
              {/* Card / contenedor táctil */}
              <div
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20 p-6 flex flex-col items-center gap-4"
                onTouchStart={(e) =>
                  (touchStartX.current = e.touches[0].clientX)
                }
                onTouchEnd={(e) => {
                  const end = e.changedTouches[0].clientX;
                  if (touchStartX.current - end > 50) nextSlide();
                  if (end - touchStartX.current > 50) prevSlide();
                }}
              >
                {/* Imagen (sin fade ni absolute) */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-2xl overflow-hidden bg-black/40"
                >
                  <img
                    key={currentSlide}
                    src={merchSlides[currentSlide].image}
                    alt={merchSlides[currentSlide].title}
                    className="max-h-[320px] md:max-h-[360px] w-auto object-contain rounded-2xl cursor-zoom-in"
                  />
                </button>

                {/* Título debajo */}
                <p className="mt-2 text-center text-lg font-semibold">
                  {merchSlides[currentSlide].title}
                </p>
              </div>

              {/* Indicadores */}
              <div className="mt-6 flex justify-center gap-2">
                {merchSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-5 bg-indigo-400"
                        : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              {/* Flechas */}
              <div className="absolute -bottom-12 right-0 flex gap-3">
                <button
                  onClick={prevSlide}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* MODAL DE IMAGEN AMPLIADA (con título + descripción) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="max-w-3xl w-full bg-background rounded-3xl overflow-hidden shadow-xl border border-white/10">
            {/* Imagen grande */}
            <div className="relative bg-black">
              <img
                src={merchSlides[currentSlide].image}
                alt={merchSlides[currentSlide].title}
                className="w-full h-auto object-contain max-h-[70vh]"
              />
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black/90"
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Texto debajo de la imagen */}
            <div className="p-6 space-y-2">
              <h3 className="text-lg md:text-xl font-semibold">
                {merchSlides[currentSlide].title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {merchSlides[currentSlide].description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER / CONTACTO */}
      <footer
        id="contact"
        className="border-t border-muted bg-background py-10 text-center"
      >
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
