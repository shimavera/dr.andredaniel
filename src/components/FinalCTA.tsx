"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WA_LINK =
  "https://wa.me/5521985154051?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Andr%C3%A9+Daniel.";

const badges = [
  {
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    text: "Você decide depois",
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Resposta rápida",
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    text: "Barra da Tijuca",
  },
  {
    icon: (
      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
      </svg>
    ),
    text: "Seg–Sex, 9h–18h",
  },
];

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#173B5E] py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Urgency bar */}
          <div className="inline-flex items-center gap-2.5 bg-[#C49A15]/15 border border-[#C49A15]/30 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C49A15] animate-pulse" />
            <span className="text-[#C49A15] text-sm font-semibold tracking-wide">
              Apenas 8 vagas de avaliação por semana
            </span>
          </div>

          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
            O PRÓXIMO PASSO É SEU
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Agende sua avaliação.
            <br />Você entende tudo antes de decidir.
          </h2>
          <p
            className="text-2xl text-[#C49A15] italic mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Nenhuma pressão. A decisão é sua.
          </p>
          <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Converse com o Dr. André. Ele explica se o implante é o caminho
            certo para o seu caso, mostra o planejamento 3D e apresenta o
            investimento — com todos os números na mesa, sem surpresa depois.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white font-bold text-lg px-10 py-5 rounded-full transition-all hover:scale-105 shadow-xl shadow-green-900/30 mb-10"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar no WhatsApp
          </a>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-2 bg-white/8 border border-white/10 rounded-full px-4 py-2 text-white/60"
              >
                {b.icon}
                <span className="text-white/70 text-sm font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
