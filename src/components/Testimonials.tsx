"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Marinei de Souza Oliveira Rocha",
    meta: "4 avaliações · 11 fotos",
    text: "Já faço tratamento com Dr. André Daniel M. Neto, a mais de 13 anos. Fiz implantes com Dr. André quando ele estudava na faculdade Veiga de Almeida, sempre muito atencioso e cuidadoso com os pacientes, faz um trabalho sério e de qualidade, sempre visando o bem estar do paciente. Recomendo com toda certeza.",
  },
  {
    name: "Valeria Ferreira",
    meta: "5 avaliações",
    text: "A clínica tem um ambiente acolhedor e moderno, muito confortável. A equipe é super atenciosa e sempre disposta a ajudar. O Dr. Daniel é um profissional incrível, muito competente e cuidadoso, explica tudo de forma clara e paciente. Me senti muito confortável durante o meu procedimento.",
  },
  {
    name: "Mônica Monteiro",
    meta: "Local Guide · 49 avaliações",
    text: "Dr. André é um profissional atencioso, faz tudo com muita calma e atenção, explica cada detalhe do tratamento. Usa técnicas modernas e materiais de qualidade. Altamente capacitado! Super indico.",
  },
  {
    name: "Patrícia Movilla",
    meta: "11 avaliações",
    text: "Se vc está em busca de um profissional competente, atencioso e que tem um preço justo, esse é o lugar certo. O Dr. André é o verdadeiro \"mago do dente\"!",
  },
  {
    name: "Andreia Lira",
    meta: "6 avaliações · 15 fotos",
    text: "Dr André acolheu minha mãe de 80 anos com muito carinho e competência. Fez extrações, implante e prótese inferior. Ótimo trabalho!",
  },
  {
    name: "Leonardo Campos",
    meta: "5 avaliações",
    text: "Dr. André e equipe são profissionais de primeira, são totalmente cuidadosos e atenciosos desde a marcação da consulta até o pós atendimento.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#FBBC04] fill-[#FBBC04]" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" className="bg-[#F8F7F4] py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Google badge */}
          <div className="inline-flex items-center gap-2.5 bg-white border border-[#E2E8F0] rounded-full px-5 py-2.5 shadow-sm mb-6">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[#FBBC04] fill-[#FBBC04]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-semibold text-[#173B5E]">Avaliado no Google</span>
          </div>

          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            HISTÓRIAS REAIS
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#173B5E] leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            O que dizem os pacientes
            <br />do Dr. André Daniel
          </h2>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <Stars />
              <p className="text-[#5A6A7E] text-sm leading-relaxed mt-4 flex-1">
                "{r.text}"
              </p>
              <div className="mt-5 pt-4 border-t border-[#F0EDE6]">
                <p className="font-semibold text-[#173B5E] text-sm">{r.name}</p>
                <p className="text-[#5A6A7E] text-xs mt-0.5">{r.meta}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
