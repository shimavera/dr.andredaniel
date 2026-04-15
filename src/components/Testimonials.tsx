"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";

const reviews = [
  {
    name: "Marinei de Souza Oliveira Rocha",
    meta: "4 avaliações · 11 fotos",
    text: "Já faço tratamento com Dr. André Daniel M. Neto, a mais de 13 anos. Fiz implantes com Dr. André quando ele estudava na faculdade Veiga de Almeida, sempre muito atencioso e cuidadoso com os pacientes, faz um trabalho sério e de qualidade, sempre visando o bem estar do paciente. Recomendo com toda certeza.",
  },
  {
    name: "Valeria Ferreira",
    meta: "5 avaliações",
    text: "A clínica tem um ambiente acolhedor e moderno, muito confortável. A equipe é super atenciosa e sempre disposta a ajudar. O Dr. Daniel é um profissional incrível, muito competente e cuidadoso, explica tudo de forma clara e paciente. Me senti muito confortável durante o meu procedimento.",
  },
  {
    name: "Mônica Monteiro",
    meta: "Local Guide · 49 avaliações",
    text: "Dr. André é um profissional atencioso, faz tudo com muita calma e atenção, explica cada detalhe do tratamento. Usa técnicas modernas e materiais de qualidade. Altamente capacitado! Super indico.",
  },
  {
    name: "Patrícia Movilla",
    meta: "11 avaliações",
    text: "Se vc está em busca de um profissional competente, atencioso e que tem um preço justo, esse é o lugar certo. O Dr. André é o verdadeiro \"mago do dente\"!",
  },
  {
    name: "Andreia Lira",
    meta: "6 avaliações · 15 fotos",
    text: "Dr André acolheu minha mãe de 80 anos com muito carinho e competência. Fez extrações, implante e prótese inferior. Ótimo trabalho!",
  },
  {
    name: "Leonardo Campos",
    meta: "5 avaliações",
    text: "Dr. André e equipe são profissionais de primeira, são totalmente cuidadosos e atenciosos desde a marcação da consulta até o pós atendimento.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FBBC04] fill-[#FBBC04]" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 40;

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const n = reviews.length;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % n);
  }, [n]);
  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + n) % n);
  }, [n]);

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

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  const r = reviews[current];

  return (
    <section id="depoimentos" className="bg-[#F8F7F4] py-20 md:py-24 px-4 md:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Google badge */}
          <div className="inline-flex items-center gap-2.5 bg-white border border-[#E2E8F0] rounded-full px-5 py-2.5 shadow-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[#FBBC04] fill-[#FBBC04]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-semibold text-[#173B5E]">Avaliado no Google</span>
          </div>

          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            HISTÓRIAS REAIS
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#173B5E] leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            O que dizem os pacientes
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            do Dr. André Daniel
          </h2>
        </motion.div>

        {/* Reviews carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-2xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative min-h-[320px] md:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-[#E2E8F0] shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Stars />
                  <span className="text-xs text-[#5A6A7E]/70 font-medium">Google</span>
                </div>
                <svg
                  className="w-8 h-8 text-[#C49A15]/30 mb-2"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.333 8C6.389 8 4 10.389 4 13.333v2.667c0 2.944 2.389 5.333 5.333 5.333H12v5.333H4V24h5.333c-2.944 0-5.333-2.389-5.333-5.333V16C4 13.056 6.389 10.667 9.333 10.667H12V8H9.333zM22.667 8c-2.944 0-5.333 2.389-5.333 5.333v2.667c0 2.944 2.389 5.333 5.333 5.333h2.667v5.333h-8V24h5.333c-2.944 0-5.333-2.389-5.333-5.333V16c0-2.944 2.389-5.333 5.333-5.333h2.667V8h-2.667z" />
                </svg>
                <p className="text-[#5A6A7E] text-sm md:text-base leading-relaxed italic">
                  {r.text}
                </p>
                <div className="mt-6 pt-5 border-t border-[#F0EDE6]">
                  <p className="font-bold text-[#173B5E] text-sm md:text-base">{r.name}</p>
                  <p className="text-[#5A6A7E]/80 text-xs mt-0.5">{r.meta}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrows (desktop) */}
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="hidden md:flex absolute top-1/2 -left-14 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md items-center justify-center text-[#173B5E] hover:bg-[#173B5E] hover:text-white transition-all hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="hidden md:flex absolute top-1/2 -right-14 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md items-center justify-center text-[#173B5E] hover:bg-[#173B5E] hover:text-white transition-all hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-[#173B5E]" : "w-2 bg-[#173B5E]/25 hover:bg-[#173B5E]/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
