"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const videos = [
  {
    src: "/videos/metodologia-cirurgia-guiada-planejamento-3d-dr-andre-daniel.mp4",
    poster: "/videos/metodologia-cirurgia-guiada-planejamento-3d-dr-andre-daniel-poster.webp",
    titulo: "A metodologia completa",
    desc: "Dr. André explica o planejamento digital 3D — como cada etapa é simulada no computador antes de chegar na boca do paciente.",
  },
  {
    src: "/videos/cirurgia-guiada-implante-dr-andre-daniel.mp4",
    poster: "/videos/cirurgia-guiada-implante-dr-andre-daniel-poster.webp",
    titulo: "Como funciona a cirurgia guiada",
    desc: "Visão detalhada do procedimento com guia cirúrgico impresso em 3D — precisão milimétrica e mínima invasão.",
  },
];

const SWIPE_THRESHOLD = 40;

export default function CirurgiaGuiadaVideo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const n = videos.length;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % n);
  }, [n]);
  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + n) % n);
  }, [n]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      delta > 0 ? prev() : next();
    }
    touchStartX.current = null;
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.96 }),
  };

  const v = videos[current];

  return (
    <section id="cirurgia-guiada" className="bg-[#0F2840] py-20 md:py-24 px-4 md:px-6 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #C49A15 0%, transparent 40%), radial-gradient(circle at 80% 70%, #ffffff 0%, transparent 40%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            METODOLOGIA · CIRURGIA GUIADA
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Você entende tudo
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            <span className="text-[#C49A15] italic">antes da primeira incisão.</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            O Dr. André explica, em poucos minutos, como funciona o planejamento digital 3D
            e a cirurgia guiada — a metodologia que traz <strong className="text-white font-semibold">precisão
            milimétrica, menos invasão e previsibilidade total</strong> ao tratamento.
          </p>
        </motion.div>

        {/* Videos carousel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-xl mx-auto"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative aspect-square">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">
                  <video
                    key={v.src}
                    className="w-full h-full object-cover"
                    src={v.src}
                    poster={v.poster}
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <track kind="captions" />
                    Seu navegador não suporta vídeo HTML5.
                  </video>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Video caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${current}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-5 md:mt-6 px-1 text-center"
            >
              <h3
                className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {v.titulo}
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mx-auto">
                {v.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Arrows (desktop) */}
          <button
            onClick={prev}
            aria-label="Vídeo anterior"
            className="hidden md:flex absolute top-[calc(50%-60px)] -left-14 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white hover:text-[#173B5E] transition-all hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Próximo vídeo"
            className="hidden md:flex absolute top-[calc(50%-60px)] -right-14 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 items-center justify-center text-white hover:bg-white hover:text-[#173B5E] transition-all hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                aria-label={`Ir para vídeo ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-[#C49A15]" : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            { title: "Precisão milimétrica", desc: "Guia cirúrgico personalizado com impressão 3D" },
            { title: "Menos invasão", desc: "Procedimento mais rápido e recuperação mais confortável" },
            { title: "Previsibilidade total", desc: "Você vê o resultado antes de qualquer cirurgia" },
          ].map((t) => (
            <div
              key={t.title}
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#C49A15]/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#C49A15]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p
                  className="text-white font-bold text-sm md:text-base leading-tight"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {t.title}
                </p>
                <p className="text-white/55 text-xs md:text-sm mt-1 leading-snug">{t.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
