"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WA_LINK =
  "https://wa.me/5521985154051?text=Ol%C3%A1%2C+gostaria+de+saber+se+sou+candidato+a+implante+dent%C3%A1rio.";

const cases = [
  {
    num: "01",
    title: "Perdi um ou mais dentes",
    situation:
      "Fratura, extração ou ausência congênita — cada dente que falta gera sobrecarga nos vizinhos e reabsorção óssea progressiva. O implante substitui raiz e coroa: função e estética idênticas ao natural.",
    label: "Implante Unitário ou Múltiplos",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6c-4 0-8 3-8 8 0 3 1 5.5 2.5 7.5L20 36h8l1.5-14.5C31 19.5 32 17 32 14c0-5-4-8-8-8z" />
        <path d="M20 36c0 3.3 1.8 6 4 6s4-2.7 4-6" />
        <line x1="24" y1="14" x2="24" y2="6" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Perdi muitos dentes (ou todos)",
    situation:
      "Prótese móvel compromete mastigação, fala e confiança. Com implantes múltiplos ou protocolo All-on-4 / All-on-6, você recupera uma arcada fixa — come, fala e sorri como antes, sem desconforto.",
    label: "Reabilitação Total com Implantes",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 30 Q24 16 40 30" />
        <path d="M12 30c-1.5-3-1.5-7 0-9 2-2 4-2 5 0" />
        <path d="M21 28c-1-3-1-7 0-9 1.5-2 3.5-2 4 0" />
        <path d="M30 28c-1-3-1-7 0-9 1.5-2 3.5-2 4 0" />
        <path d="M36 30c1.5-3 1.5-7 0-9-2-2-4-2-5 0" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Tenho pouco osso disponível",
    situation:
      "A falta do dente causa reabsorção óssea com o tempo. Na maioria dos casos, enxertos ósseos e técnicas de regeneração devolvem o volume necessário. A tomografia e o planejamento 3D definem o protocolo exato para o seu caso.",
    label: "Enxerto + Implante Guiado",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="32" width="28" height="6" rx="2" />
        <rect x="14" y="24" width="20" height="8" rx="1.5" />
        <path d="M24 24v-8M20 20l4-4 4 4" />
        <circle cx="24" cy="13" r="3" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Tenho medo ou ansiedade",
    situation:
      "O Dr. André é reconhecido pela calma e didática — explica cada etapa antes de executar, no seu ritmo. O procedimento sob anestesia local é muito menos desconfortável do que a maioria dos pacientes imagina.",
    label: "Atendimento sem Pressa",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="22" r="12" />
        <path d="M20 22c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        <path d="M20 22v2a4 4 0 008 0v-2" />
        <path d="M24 10V7M34.5 13.5l2-2M38 22h3M34.5 30.5l2 2M24 34v3M13.5 30.5l-2 2M10 22H7M13.5 13.5l-2-2" strokeWidth={1.2} />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="implantes" className="bg-[#F8F7F4] py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            QUAL É O SEU CASO?
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#173B5E] leading-tight max-w-xl"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Existe uma solução
              <br />
              para cada situação.
            </h2>
            <p className="text-[#5A6A7E] max-w-sm leading-relaxed">
              Cada caso é único. O planejamento 3D define o protocolo correto
              antes de qualquer procedimento.
            </p>
          </div>
        </motion.div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative bg-white rounded-2xl p-8 border border-[#E2E8F0] hover:border-[#173B5E]/30 hover:shadow-lg transition-all overflow-hidden"
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-6 text-7xl font-bold text-[#173B5E]/5 select-none pointer-events-none"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {c.num}
              </span>

              {/* Icon */}
              <div className="text-[#C49A15] mb-5">{c.icon}</div>

              {/* Label pill */}
              <span className="inline-block bg-[#173B5E]/8 text-[#173B5E] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                {c.label}
              </span>

              <h3
                className="text-xl font-bold text-[#173B5E] mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {c.title}
              </h3>
              <p className="text-[#5A6A7E] text-sm leading-relaxed">
                {c.situation}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[#5A6A7E] mb-5">
            Não sabe qual é o seu caso? O Dr. André avalia e explica tudo na
            primeira consulta — sem compromisso.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#173B5E] hover:bg-[#0F2840] text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Quero saber se sou candidato →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
