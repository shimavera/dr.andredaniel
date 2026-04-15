"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const items = [
  "Cirurgia guiada por planejamento 3D",
  "Carga imediata — dente no mesmo dia (quando indicado)",
  "Membro ITI — padrão científico internacional",
  "Mais de 13 anos de experiência em implantodontia",
];

export default function ImplantesDestaque() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 13) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section className="bg-[#0F2840] py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
              ESPECIALIDADE PRINCIPAL
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Implantes dentários
              <br />
              <span className="text-[#C49A15] italic">com precisão cirúrgica.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              O Dr. André Daniel se dedica a implantodontia — não é um serviço
              à parte. Agenda, equipamentos e protocolos organizados em torno
              de um único objetivo: o implante feito com precisão.
            </p>
            <ul className="space-y-3 mb-10">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C49A15] mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/implantes"
              className="inline-flex items-center gap-2.5 bg-[#C49A15] hover:bg-[#a8820f] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              Ver LP de Implantes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Destaque anos */}
            <div className="col-span-2 bg-white/5 border border-white/10 rounded-2xl px-8 py-7 flex items-center gap-6">
              <p
                className="text-6xl font-bold text-[#C49A15] leading-none shrink-0"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {count}<span className="text-4xl">+</span>
              </p>
              <div>
                <p className="text-white font-semibold text-lg leading-tight">anos de experiência</p>
                <p className="text-white/45 text-sm mt-1">dedicados a implantodontia no Rio de Janeiro</p>
              </div>
            </div>

            {/* Credenciais */}
            {[
              { v: "ITI", l: "Membro certificado", sub: "60+ países" },
              { v: "UFRJ", l: "Graduação federal", sub: "Odontologia" },
              { v: "5★", l: "Google Reviews", sub: "30+ avaliações" },
              { v: "3D", l: "Planejamento digital", sub: "Cirurgia guiada" },
            ].map((m) => (
              <div
                key={m.v}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <p
                  className="text-2xl font-bold text-[#C49A15] mb-1"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {m.v}
                </p>
                <p className="text-white/80 text-sm font-medium leading-tight">{m.l}</p>
                <p className="text-white/35 text-xs mt-0.5">{m.sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
