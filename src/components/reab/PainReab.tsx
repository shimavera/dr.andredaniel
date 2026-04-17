"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { pushWorkingLead } from "@/lib/gtm";

const pains = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#173B5E]/40">
        <circle cx="20" cy="16" r="9" />
        <path d="M14 26c0 0 1.5 8 6 8s6-8 6-8" />
        <path d="M16 13c1-1.5 2.5-2 4-2" />
        <path d="M15 19c1 1.5 2.8 2 5 1.5" />
      </svg>
    ),
    title: "Você esconde o sorriso há anos",
    desc: "Dentes comprometidos mudam a forma como você aparece — nas fotos, nas reuniões, nos momentos que deveriam ser lembrados. E você aprendeu a sorrir de boca fechada.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#173B5E]/40">
        <rect x="6" y="10" width="28" height="22" rx="3" />
        <path d="M8 28 Q14 18 20 22 Q26 26 32 16" />
        <path d="M14 32v3M26 32v3" />
      </svg>
    ),
    title: "Sua prótese removível te incomoda todo dia",
    desc: "Ela se solta, limita o que você come, te envergonha em situações sociais. Você vive com medo de que alguém perceba. Existe uma alternativa fixa e definitiva.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 text-[#173B5E]/40">
        <circle cx="20" cy="20" r="13" />
        <path d="M20 12v9l5 3" />
        <path d="M13 8l-3-3M27 8l3-3" strokeWidth={1.2} />
      </svg>
    ),
    title: "Você acha que já é tarde demais",
    desc: "Não é. Mesmo com muito tempo de perda óssea, o planejamento moderno — com tomografia e enxertos quando necessário — permite reabilitar praticamente qualquer caso.",
  },
];

export default function PainReab() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#F8F7F4] py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            SE VOCÊ CHEGOU ATÉ AQUI
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#173B5E] leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Você já conviveu com isso
            <br />tempo demais.
          </h2>
          <p className="text-[#5A6A7E] text-lg max-w-2xl mx-auto">
            Perder dentes vai além da estética. É função, autoestima — e um problema
            que se agrava a cada ano sem solução.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-5">{p.icon}</div>
              <h3
                className="text-xl font-bold text-[#173B5E] mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {p.title}
              </h3>
              <p className="text-[#5A6A7E] text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block bg-[#173B5E] text-white rounded-2xl px-10 py-8 mb-8">
            <p className="text-lg font-semibold">
              Existe uma solução definitiva.
            </p>
            <p
              className="text-[#C49A15] text-2xl font-bold italic mt-1 mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Reabilitação Oral Completa com implantes fixos.
            </p>
            <a
              href="https://wa.me/5521985154051?text=Ol%C3%A1%2C+quero+saber+se+sou+candidato+a+Reabilita%C3%A7%C3%A3o+Oral+Completa."
              target="_blank"
              rel="noopener noreferrer"
              onClick={pushWorkingLead}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105 text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero saber se sou candidato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
