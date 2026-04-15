"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/5521985154051?text=Ol%C3%A1%2C+vi+os+casos+no+site+e+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o.";

const casos = [
  {
    src: "/casos/implante-paciente-edentulo-reabilitacao-total-antes-depois-rio-de-janeiro.webp",
    alt: "Reabilitação total em paciente edêntula — antes e depois com implantes dentários — Dr. André Daniel, Barra da Tijuca RJ",
  },
  {
    src: "/casos/implante-dentario-reabilitacao-oral-masculino-antes-depois-barra-da-tijuca-rj.webp",
    alt: "Reabilitação oral masculina com implantes dentários — antes e depois — Dr. André Daniel, Barra da Tijuca RJ",
  },
  {
    src: "/casos/reabilitacao-oral-completa-protese-fixa-sorriso-antes-depois-barra-da-tijuca-rj.webp",
    alt: "Reabilitação oral completa com prótese fixa — antes e depois — Dr. André Daniel, Barra da Tijuca RJ",
  },
  {
    src: "/casos/implante-unitario-dente-frontal-central-antes-depois-coroa-zirconia-barra-da-tijuca.webp",
    alt: "Implante unitário em dente frontal com coroa de zircônia — antes e depois — Dr. André Daniel, Barra da Tijuca RJ",
  },
  {
    src: "/casos/implante-parcial-arcada-superior-coroa-ceramica-antes-depois-barra-da-tijuca.webp",
    alt: "Implante parcial em arcada superior com coroa cerâmica — antes e depois — Dr. André Daniel, Barra da Tijuca RJ",
  },
  {
    src: "/casos/implante-multiplo-arcada-superior-protese-fixa-ceramica-antes-depois-dr-andre-daniel-rj.webp",
    alt: "Múltiplos implantes na arcada superior com prótese fixa em cerâmica — antes e depois — Dr. André Daniel, Barra da Tijuca RJ",
  },
  {
    src: "/casos/implante-reabilitacao-total-abutments-protese-fixa-antes-depois-dr-andre-daniel-barra-da-tijuca.webp",
    alt: "Reabilitação total com abutments e prótese fixa — Dr. André Daniel, Barra da Tijuca RJ",
  },
  {
    src: "/casos/implante-arcada-superior-visao-oclusal-osseointegrado-coroa-antes-depois-barra-da-tijuca.webp",
    alt: "Implantes osseointegrados em arcada superior visão oclusal — Dr. André Daniel, Barra da Tijuca RJ",
  },
];

const AUTOPLAY_MS = 2000;
const SWIPE_THRESHOLD = 40;

function useCardWidth() {
  const [w, setW] = useState(300);
  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      if (vw < 640) setW(220);
      else if (vw < 1024) setW(260);
      else setW(320);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return w;
}

export default function CasosClinicos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const cardWidth = useCardWidth();
  const n = casos.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % n), [n]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + n) % n), [n]);

  useEffect(() => {
    if (paused || !inView) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, inView, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      delta > 0 ? prev() : next();
    }
    touchStartX.current = null;
    setTimeout(() => setPaused(false), 2000);
  };

  // Relative position (-n/2 .. n/2-1) for each card
  const getRel = (i: number) => {
    const half = Math.floor(n / 2);
    return ((i - current + half + n) % n) - half;
  };

  return (
    <section id="casos" className="bg-[#F8F7F4] py-20 md:py-24 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            CASOS REAIS
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#173B5E] leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Resultados de pacientes
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            do Dr. André Daniel.
          </h2>
          <p className="text-[#5A6A7E] text-base md:text-lg max-w-2xl mx-auto">
            Cada caso é único — e cada resultado é planejado antes de executar.
          </p>
        </motion.div>
      </div>

      {/* Coverflow carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="relative mx-auto"
          style={{ height: `${cardWidth * 1.33 + 40}px` }}
        >
          {casos.map((caso, i) => {
            const rel = getRel(i);
            const abs = Math.abs(rel);
            // Hide cards too far
            if (abs > 2) {
              return null;
            }
            const isCenter = rel === 0;
            const scale = isCenter ? 1 : abs === 1 ? 0.82 : 0.66;
            const opacity = isCenter ? 1 : abs === 1 ? 0.85 : 0.4;
            const xOffset = rel * cardWidth * 0.72;
            const zIndex = 10 - abs;

            return (
              <motion.button
                key={caso.src}
                onClick={() => setCurrent(i)}
                aria-label={`Ver caso ${i + 1}`}
                className="absolute top-0 left-1/2 cursor-pointer focus:outline-none"
                style={{
                  width: `${cardWidth}px`,
                  height: `${cardWidth * 1.33}px`,
                  zIndex,
                }}
                animate={{
                  x: `calc(-50% + ${xOffset}px)`,
                  scale,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 30,
                }}
              >
                <div
                  className={`relative w-full h-full rounded-2xl overflow-hidden bg-[#0F2840] transition-shadow ${
                    isCenter ? "shadow-2xl" : "shadow-lg"
                  }`}
                >
                  <Image
                    src={caso.src}
                    alt={caso.alt}
                    fill
                    className="object-cover"
                    sizes={`${cardWidth}px`}
                    priority={i <= 1}
                  />
                  {!isCenter && (
                    <div className="absolute inset-0 bg-[#F8F7F4]/30" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {casos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ir para caso ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-8 bg-[#173B5E]"
                  : "w-2 bg-[#173B5E]/25 hover:bg-[#173B5E]/50"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Disclaimer + CTA */}
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[#5A6A7E]/70 text-xs max-w-xl mx-auto mb-6 italic">
            Imagens divulgadas com autorização dos pacientes. Resultados podem variar conforme o caso clínico.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold px-7 md:px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-900/20 text-sm md:text-base"
          >
            Quero um resultado como esses →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
