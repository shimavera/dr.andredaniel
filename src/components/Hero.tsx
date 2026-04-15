"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/5521985154051?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Andr%C3%A9+Daniel.";

const stats = [
  { value: "+13 anos", label: "de experiência clínica" },
  { value: "5 estrelas", label: "no Google — 30+ avaliações" },
  { value: "Membro ITI", label: "certificado internacional" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#173B5E] overflow-hidden flex flex-col justify-center pt-24 pb-12">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C49A15 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 40%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Micro-label */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C49A15]" />
              <span className="text-white/80 text-xs font-medium tracking-widest uppercase">
                Implantes Dentários · Barra da Tijuca
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-3"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              O dente que
              <br />
              você perdeu
              <br />
              pode voltar.
            </h1>
            <p
              className="font-display text-2xl lg:text-3xl text-[#C49A15] italic mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Com planejamento cirúrgico feito antes da primeira incisão.
            </p>

            {/* Sub */}
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              <strong className="text-white font-semibold">Membro do ITI</strong> — International Team for Implantology,
              presente em 60 países. Cirurgia guiada por tomografia, escaneamento
              intraoral e planejamento 3D. Particular. Barra da Tijuca, RJ.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold px-7 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-900/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar no WhatsApp
              </a>
              <a
                href="#processo"
                className="flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-medium px-7 py-4 rounded-full transition-all"
              >
                Entender como funciona
                <span className="text-lg">↓</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.value}>
                  <div
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-white/50 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Doctor photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[420px] h-[520px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/dr-andre.jpg"
                alt="Dr. André Daniel — Implantodontista na Barra da Tijuca, RJ"
                fill
                className="object-cover object-center"
                priority
                sizes="420px"
              />
              {/* Gold accent bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C49A15] to-transparent" />
              {/* Subtle overlay at bottom for legibility */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0F2840]/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60 L0 30 Q720 0 1440 30 L1440 60 Z" fill="#F8F7F4" />
        </svg>
      </div>
    </section>
  );
}
