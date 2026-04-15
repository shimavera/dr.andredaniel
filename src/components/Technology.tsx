"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const techs = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="4" y="8" width="24" height="18" rx="3" />
        <path d="M10 8V6a2 2 0 012-2h8a2 2 0 012 2v2" />
        <path d="M16 14a3 3 0 100 6 3 3 0 000-6z" />
        <path d="M16 14v-2M16 23v-3M22 17h2M8 17h2" strokeWidth={1.2} />
      </svg>
    ),
    title: "Escaneamento Intraoral",
    desc: "Moldagem digital precisa e confortável — sem aquela massinha desconfortável de antigamente.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="26" height="20" rx="3" />
        <path d="M3 22h26" />
        <path d="M12 27h8M16 22v5" />
        <path d="M9 13l4 4 3-5 4 6 3-3" strokeWidth={1.6} />
      </svg>
    ),
    title: "Planejamento 3D",
    desc: "Simulação completa do resultado antes de qualquer procedimento. Você sabe o que vai acontecer.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="16" cy="16" r="10" />
        <circle cx="16" cy="16" r="4" />
        <path d="M16 6V4M16 28v-2M6 16H4M28 16h-2" strokeWidth={1.2} />
        <path d="M9.2 9.2L7.8 7.8M24.8 24.8l-1.4-1.4M22.8 9.2l1.4-1.4M9.2 22.8l-1.4 1.4" strokeWidth={1.2} />
      </svg>
    ),
    title: "Cirurgia Guiada",
    desc: "Guia cirúrgica personalizada fabricada por impressão 3D. Precisão milimétrica, menos invasão.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M16 4l2.5 7.5H26l-6.5 4.7 2.5 7.5L16 19l-6 4.7 2.5-7.5L6 11.5h7.5z" />
        <path d="M16 22v6" />
        <path d="M12 28h8" />
      </svg>
    ),
    title: "Carga Imediata",
    desc: "Em casos indicados, implante + dente provisório no mesmo dia da cirurgia.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="4" y="4" width="24" height="24" rx="4" />
        <path d="M10 16h12M16 10v12" strokeWidth={1.8} />
        <circle cx="16" cy="16" r="5" />
      </svg>
    ),
    title: "Tomografia Digital",
    desc: "Diagnóstico completo da estrutura óssea antes de qualquer planejamento. Sem chutes.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="6" y="4" width="20" height="6" rx="2" />
        <rect x="6" y="13" width="20" height="6" rx="2" />
        <path d="M10 22v5M16 22v5M22 22v5" />
        <path d="M6 19h20" />
      </svg>
    ),
    title: "Impressão 3D",
    desc: "Guias cirúrgicas e provisórios fabricados no próprio consultório, com impressora 3D clínica de alta resolução.",
  },
];

export default function Technology() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tecnologia" className="bg-[#0F2840] py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            ODONTOLOGIA DIGITAL
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            A tecnologia elimina
            <br />o achismo do tratamento.
          </h2>
          <p className="text-white/60 text-lg">
            Planejamos antes de operar. Você visualiza o resultado antes de qualquer cirurgia.
          </p>
        </motion.div>

        {/* Tech grid — compact 2 cols */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:gap-5">
          {techs.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 hover:bg-white/8 hover:border-[#C49A15]/30 transition-all group"
            >
              <div className="text-[#C49A15] mb-3 md:mb-4 group-hover:text-white transition-colors [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7">
                {t.icon}
              </div>
              <h3
                className="font-bold text-white text-sm md:text-base mb-1.5 md:mb-2 leading-tight"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {t.title}
              </h3>
              <p className="text-white/55 text-xs md:text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Clinic photos — larger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
        >
          <div className="relative h-64 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/clinica-sala.jpg"
              alt="Sala de tratamento — Dr. André Daniel"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2840]/80 via-[#0F2840]/10 to-transparent" />
            <span className="absolute bottom-4 left-5 text-white text-sm md:text-base font-semibold tracking-wide drop-shadow-lg">
              Sala de tratamento
            </span>
          </div>
          <div className="relative h-64 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/clinica-recepcao.jpg"
              alt="Recepção — Dr. André Daniel"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2840]/80 via-[#0F2840]/10 to-transparent" />
            <span className="absolute bottom-4 left-5 text-white text-sm md:text-base font-semibold tracking-wide drop-shadow-lg">
              Recepção
            </span>
          </div>
        </motion.div>

        {/* Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <div className="relative max-w-3xl mx-auto">
            {/* Glow effect behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#C49A15]/20 via-[#C49A15]/10 to-[#C49A15]/20 rounded-3xl blur-xl" />
            {/* Quote card */}
            <div className="relative bg-gradient-to-br from-[#C49A15]/15 via-[#173B5E]/40 to-[#C49A15]/10 border border-[#C49A15]/30 rounded-3xl px-6 py-10 md:px-12 md:py-14 text-center backdrop-blur-sm">
              {/* Decorative quote mark */}
              <svg
                className="absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 md:w-14 md:h-14 text-[#C49A15]/30"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.333 8C6.389 8 4 10.389 4 13.333v2.667c0 2.944 2.389 5.333 5.333 5.333H12v5.333H4V24h5.333c-2.944 0-5.333-2.389-5.333-5.333V16C4 13.056 6.389 10.667 9.333 10.667H12V8H9.333zM22.667 8c-2.944 0-5.333 2.389-5.333 5.333v2.667c0 2.944 2.389 5.333 5.333 5.333h2.667v5.333h-8V24h5.333c-2.944 0-5.333-2.389-5.333-5.333V16c0-2.944 2.389-5.333 5.333-5.333h2.667V8h-2.667z" />
              </svg>
              <blockquote
                className="relative text-xl md:text-3xl italic text-white leading-snug font-medium"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                &ldquo;Unindo ciência, tecnologia e cuidado humano — para resultados que
                você pode <span className="text-[#C49A15]">ver antes de sentir</span>.&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="h-px w-8 bg-[#C49A15]/50" />
                <p className="text-[#C49A15] text-xs md:text-sm font-semibold tracking-widest uppercase">
                  Dr. André Daniel
                </p>
                <div className="h-px w-8 bg-[#C49A15]/50" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
