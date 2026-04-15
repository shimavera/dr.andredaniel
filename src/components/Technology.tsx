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

        {/* Tech grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techs.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 * i }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-[#C49A15]/30 transition-all group"
            >
              <div className="text-[#C49A15] mb-5 group-hover:text-white transition-colors">
                {t.icon}
              </div>
              <h3
                className="font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {t.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Clinic photo strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-12 grid grid-cols-2 gap-4"
        >
          <div className="relative h-48 rounded-2xl overflow-hidden">
            <Image
              src="/clinica-sala.jpg"
              alt="Sala de tratamento — Dr. André Daniel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#173B5E]/30" />
            <span className="absolute bottom-3 left-4 text-white/80 text-xs font-medium tracking-wide">Sala de tratamento</span>
          </div>
          <div className="relative h-48 rounded-2xl overflow-hidden">
            <Image
              src="/clinica-recepcao.jpg"
              alt="Recepção — Dr. André Daniel"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[#173B5E]/30" />
            <span className="absolute bottom-3 left-4 text-white/80 text-xs font-medium tracking-wide">Recepção</span>
          </div>
        </motion.div>

        {/* Manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 border-t border-white/10 pt-12 text-center"
        >
          <blockquote
            className="text-2xl lg:text-3xl italic text-white/80 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            "Unindo ciência, tecnologia e cuidado humano — para resultados que
            você pode ver antes de sentir."
          </blockquote>
          <p className="text-[#C49A15] text-sm font-medium mt-4">— Dr. André Daniel</p>
        </motion.div>
      </div>
    </section>
  );
}
