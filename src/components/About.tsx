"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const credentials = [
  { label: "UFRJ", sub: "Graduação" },
  { label: "UVA", sub: "Especialista Implantes" },
  { label: "Membro ITI", sub: "60+ países" },
  { label: "Professor", sub: "Sobreimplantes" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [years, setYears] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setYears(current);
      if (current >= 13) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section id="sobre" className="bg-white pt-14 pb-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/5] relative">
              <Image
                src="/dr-andre-consulta.jpg"
                alt="Dr. André Daniel em consulta com paciente — Implantes Dentários Barra da Tijuca"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Stat card */}
            <div className="absolute -bottom-6 -right-6 bg-[#173B5E] text-white rounded-2xl px-7 py-5 shadow-xl border border-white/10">
              <div className="flex items-baseline gap-1">
                <span className="text-6xl font-black text-[#C49A15] leading-none tabular-nums tracking-tight">
                  {years}
                </span>
                <span className="text-3xl font-bold text-[#C49A15] leading-none">+</span>
              </div>
              <p className="text-white/70 text-[11px] mt-2 tracking-[0.18em] uppercase font-medium">
                Anos de experiência
              </p>
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
              QUEM É O DR. ANDRÉ DANIEL
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#173B5E] leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Mais de 13 anos transformando sorrisos no Rio de Janeiro
            </h2>
            <p className="text-[#5A6A7E] leading-relaxed mb-4">
              O Dr. André Daniel é graduado pela{" "}
              <strong className="text-[#173B5E]">Universidade Federal do Rio de Janeiro (UFRJ)</strong>{" "}
              e especialista em Implantes Dentários pela Universidade Veiga de
              Almeida (UVA).
            </p>
            <p className="text-[#5A6A7E] leading-relaxed mb-4">
              É membro do{" "}
              <strong className="text-[#173B5E]">
                ITI — International Team for Implantology
              </strong>
              , a maior organização científica mundial em implantodontia,
              presente em mais de 60 países. Professor do curso Sobreimplantes,
              ele explica cada etapa antes de executar — você entende o que
              está sendo feito, no seu ritmo, antes que aconteça.
            </p>
            <p className="text-[#5A6A7E] leading-relaxed mb-8">
              O resultado? Pacientes que ficam{" "}
              <strong className="text-[#173B5E]">13+ anos</strong> sob seus
              cuidados — e indicam para toda a família.
            </p>

            {/* Credential badges */}
            <div className="grid grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 bg-[#F8F7F4] rounded-xl px-4 py-3 border border-[#E2E8F0]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#C49A15] shrink-0" />
                  <div>
                    <p className="font-bold text-[#173B5E] text-sm">{c.label}</p>
                    <p className="text-[#5A6A7E] text-xs">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
