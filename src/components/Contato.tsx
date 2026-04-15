"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WA_LINK =
  "https://wa.me/5521985154051?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Andr%C3%A9+Daniel.";

const ADDRESS_QUERY =
  "Alameda+Almirante+J%C3%BAlio+de+S%C3%A1+Bierrenbach+200+Barra+da+Tijuca+Rio+de+Janeiro+RJ";

const MAP_EMBED = `https://maps.google.com/maps?q=${ADDRESS_QUERY}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

export default function Contato() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="bg-[#F8F7F4] py-20 md:py-24 px-4 md:px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            VISITE O CONSULTÓRIO
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#173B5E] leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Entre em contato e agende
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            sua consulta com o Dr. André.
          </h2>
        </motion.div>

        {/* Grid: Map + Cards */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {/* Left — Map */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0] min-h-[360px] md:min-h-[480px]"
          >
            <iframe
              src={MAP_EMBED}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Consultório Dr. André Daniel — Barra da Tijuca"
              allowFullScreen
            />
          </motion.div>

          {/* Right — Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Endereço */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-7 hover:border-[#C49A15]/60 hover:shadow-md transition-all flex gap-5 items-start"
            >
              <div className="w-14 h-14 rounded-full bg-[#173B5E] flex items-center justify-center shrink-0 group-hover:bg-[#0F2840] transition-colors">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#5A6A7E] text-[11px] font-semibold tracking-[0.18em] uppercase mb-2">
                  Endereço
                </p>
                <p className="text-[#173B5E] font-bold text-base md:text-lg leading-snug">
                  Alameda Almirante Júlio de Sá Bierrenbach, 200
                </p>
                <p className="text-[#5A6A7E] text-sm mt-1 leading-snug">
                  Indic Tower — Torre A, Sala 320
                </p>
                <p className="text-[#5A6A7E] text-sm leading-snug">
                  Barra da Tijuca — Rio de Janeiro/RJ, 22775-057
                </p>
                <p className="text-[#5A6A7E]/80 text-xs mt-3 font-medium">
                  Segunda a Sexta, das 9h às 18h
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-7 hover:border-[#25D366]/60 hover:shadow-md transition-all flex gap-5 items-start"
            >
              <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#1DA851] transition-colors">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#5A6A7E] text-[11px] font-semibold tracking-[0.18em] uppercase mb-2">
                  WhatsApp
                </p>
                <p className="text-[#173B5E] font-black text-xl md:text-2xl leading-none tabular-nums tracking-tight">
                  (21) 98515-4051
                </p>
                <p className="text-[#5A6A7E] text-sm mt-2 font-medium">
                  Atendimento direto com a secretária
                </p>
              </div>
            </a>

            {/* CTA button */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 bg-[#173B5E] hover:bg-[#0F2840] text-white font-semibold rounded-2xl px-6 py-5 flex items-center justify-center gap-3 transition-all hover:scale-[1.01] shadow-lg shadow-[#173B5E]/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar pelo WhatsApp
            </a>

            <div className="flex items-center gap-2 text-[#5A6A7E]/70 text-xs px-1">
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Canal exclusivo para pacientes e agendamentos.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
