"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const videos = [
  {
    src: "/videos/metodologia-cirurgia-guiada-planejamento-3d-dr-andre-daniel.mp4",
    poster: "/videos/metodologia-cirurgia-guiada-planejamento-3d-dr-andre-daniel-poster.webp",
    titulo: "A metodologia completa",
    desc: "Dr. André explica o planejamento digital 3D — como cada etapa é simulada no computador antes de chegar na boca do paciente.",
  },
  {
    src: "/videos/cirurgia-guiada-implante-dr-andre-daniel.mp4",
    poster: "/videos/cirurgia-guiada-implante-dr-andre-daniel-poster.webp",
    titulo: "Como funciona a cirurgia guiada",
    desc: "Visão detalhada do procedimento com guia cirúrgico impresso em 3D — precisão milimétrica e mínima invasão.",
  },
];

export default function CirurgiaGuiadaVideo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cirurgia-guiada" className="bg-[#0F2840] py-20 md:py-24 px-4 md:px-6 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, #C49A15 0%, transparent 40%), radial-gradient(circle at 80% 70%, #ffffff 0%, transparent 40%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            METODOLOGIA · CIRURGIA GUIADA
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Você entende tudo
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            <span className="text-[#C49A15] italic">antes da primeira incisão.</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            O Dr. André explica, em poucos minutos, como funciona o planejamento digital 3D
            e a cirurgia guiada — a metodologia que traz <strong className="text-white font-semibold">precisão
            milimétrica, menos invasão e previsibilidade total</strong> ao tratamento.
          </p>
        </motion.div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {videos.map((v, i) => (
            <motion.div
              key={v.src}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10 aspect-square">
                <video
                  className="w-full h-full object-cover"
                  src={v.src}
                  poster={v.poster}
                  controls
                  preload="metadata"
                  playsInline
                >
                  <track kind="captions" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>
              <div className="mt-5 px-1">
                <h3
                  className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {v.titulo}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            { title: "Precisão milimétrica", desc: "Guia cirúrgico personalizado com impressão 3D" },
            { title: "Menos invasão", desc: "Procedimento mais rápido e recuperação mais confortável" },
            { title: "Previsibilidade total", desc: "Você vê o resultado antes de qualquer cirurgia" },
          ].map((t) => (
            <div
              key={t.title}
              className="bg-white/5 border border-white/10 rounded-2xl px-5 py-5 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#C49A15]/20 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#C49A15]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p
                  className="text-white font-bold text-sm md:text-base leading-tight"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {t.title}
                </p>
                <p className="text-white/55 text-xs md:text-sm mt-1 leading-snug">{t.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
