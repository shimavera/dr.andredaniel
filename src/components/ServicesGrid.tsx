"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M24 8c-4.5 0-9 3.5-9 9 0 3.5 1.5 6.5 3 8.5L20 40h8l2-14.5c1.5-2 3-5 3-8.5 0-5.5-4.5-9-9-9z" />
        <path d="M20 40c0 3.3 1.8 5.5 4 5.5s4-2.2 4-5.5" />
        <line x1="21" y1="22" x2="27" y2="22" />
      </svg>
    ),
    title: "Implantes Dentários",
    desc: "Substituição definitiva de dentes perdidos com cirurgia guiada e carga imediata. Função e estética iguais ao dente natural.",
    highlight: true,
    href: "/implantes",
    cta: "Ver LP de Implantes →",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M8 36 Q16 22 24 28 Q32 34 40 20" />
        <path d="M10 38 Q24 44 38 38" />
        <path d="M12 16h5M20 12h8M31 16h5" />
        <rect x="8" y="10" width="32" height="8" rx="3" />
      </svg>
    ),
    title: "Reabilitação Oral Completa",
    desc: "Para quem perdeu múltiplos dentes: planejamento digital completo, próteses fixas e reabilitação total da mordida.",
    highlight: false,
    href: "#contato",
    cta: "Agendar consulta →",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M14 30 Q24 18 34 30" />
        <path d="M18 26c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M12 36 Q24 44 36 36" />
        <circle cx="24" cy="26" r="3" />
      </svg>
    ),
    title: "Restaurações Estéticas",
    desc: "Facetas e lentes de contato dental com design digital — você aprova o resultado antes de qualquer preparo.",
    highlight: false,
    href: "#contato",
    cta: "Agendar consulta →",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect x="6" y="8" width="36" height="26" rx="4" />
        <path d="M16 34v6M32 34v6M10 40h28" />
        <path d="M13 20l5 5 7-9 5 6 5-5" strokeWidth={1.8} />
      </svg>
    ),
    title: "Odontologia Digital",
    desc: "Escaneamento intraoral, planejamento 3D e impressão 3D para diagnósticos e tratamentos com máxima precisão.",
    highlight: false,
    href: "#contato",
    cta: "Agendar consulta →",
  },
];

export default function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="especialidades" className="bg-[#F8F7F4] py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            ESPECIALIDADES
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#173B5E] leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              O que tratamos.
            </h2>
            <p className="text-[#5A6A7E] max-w-xs leading-relaxed text-sm">
              Diagnóstico por imagem, escaneamento intraoral e planejamento digital antes de qualquer procedimento.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`group relative rounded-2xl p-8 border transition-all ${
                s.highlight
                  ? "bg-[#173B5E] border-[#173B5E] hover:border-[#C49A15]/40"
                  : "bg-white border-[#E2E8F0] hover:border-[#173B5E]/20 hover:shadow-lg"
              }`}
            >
              {s.highlight && (
                <span className="absolute top-4 right-4 bg-[#C49A15] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Especialidade Principal
                </span>
              )}

              <div className={`mb-5 ${s.highlight ? "text-[#C49A15]" : "text-[#173B5E]/50"}`}>
                {s.icon}
              </div>

              <h3
                className={`text-xl font-bold mb-3 ${s.highlight ? "text-white" : "text-[#173B5E]"}`}
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {s.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${s.highlight ? "text-white/65" : "text-[#5A6A7E]"}`}>
                {s.desc}
              </p>

              {s.href.startsWith("/") ? (
                <Link
                  href={s.href}
                  className={`font-semibold text-sm flex items-center gap-1.5 transition-colors ${
                    s.highlight
                      ? "text-[#C49A15] hover:text-white"
                      : "text-[#173B5E] hover:text-[#C49A15]"
                  }`}
                >
                  {s.cta}
                </Link>
              ) : (
                <a
                  href={s.href}
                  className={`font-semibold text-sm flex items-center gap-1.5 transition-colors ${
                    s.highlight
                      ? "text-[#C49A15] hover:text-white"
                      : "text-[#173B5E] hover:text-[#C49A15]"
                  }`}
                >
                  {s.cta}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
