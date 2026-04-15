"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WA_LINK =
  "https://wa.me/5521985154051?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Andr%C3%A9+Daniel.";

const steps = [
  {
    num: "01",
    title: "Consulta e Diagnóstico",
    desc: "Avaliação completa com exame de imagem (tomografia). Entendemos seu caso, seus objetivos e definimos o melhor caminho. Sem enrolação.",
  },
  {
    num: "02",
    title: "Planejamento Digital 3D",
    desc: "Escaneamento intraoral + planejamento 3D personalizado. Você visualiza o resultado antes de qualquer procedimento.",
  },
  {
    num: "03",
    title: "Cirurgia Guiada",
    desc: "Procedimento minimamente invasivo com guia cirúrgica de precisão. Máxima segurança, mínima invasão, recuperação mais rápida.",
  },
  {
    num: "04",
    title: "Acompanhamento e Resultado",
    desc: "Carga imediata quando indicada. Retornos programados e acompanhamento dedicado até o resultado final consolidado.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processo" className="bg-[#173B5E] py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            COMO FUNCIONA
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Do diagnóstico à entrega —
            <br />
            você acompanha cada etapa.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            4 etapas. Processo claro. Sem surpresas.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              {/* Number */}
              <p
                className="text-5xl font-bold text-[#C49A15]/30 mb-4 leading-none"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {s.num}
              </p>
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {s.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-[#C49A15]/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Começar pela consulta →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
