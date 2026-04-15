"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const WA_LINK =
  "https://wa.me/5521985154051?text=Ol%C3%A1%2C+tenho+uma+d%C3%BAvida+sobre+implantes+dent%C3%A1rios.";

const faqs = [
  {
    q: "Dói fazer implante?",
    a: "O procedimento é realizado sob anestesia local. A maioria dos pacientes relata dor muito menor do que esperava — parecida com uma extração comum. O desconforto pós-operatório é controlado com medicação e costuma desaparecer em poucos dias.",
  },
  {
    q: "Quanto tempo leva o tratamento?",
    a: "Depende do caso. Com carga imediata, você pode sair com o dente provisório no mesmo dia da cirurgia. O implante se integra ao osso em 3 a 6 meses, quando colocamos a coroa definitiva. Cada caso é avaliado individualmente.",
  },
  {
    q: "Quanto custa um implante?",
    a: "O valor varia conforme o planejamento: quantidade de implantes, necessidade de enxerto ósseo e tipo de prótese. Agende uma consulta para receber um orçamento personalizado e totalmente transparente — sem letras miúdas.",
  },
  {
    q: "O implante dura a vida toda?",
    a: "Com cuidados adequados — higiene diária e retornos periódicos — implantes bem executados têm vida útil indeterminada. Muitos pacientes do Dr. André usam os mesmos implantes há mais de uma década.",
  },
  {
    q: "Tenho medo de dentista. Consigo fazer?",
    a: "Sim. O Dr. André é reconhecido exatamente pela calma e didática no atendimento — explica cada etapa antes de executar, sem pressa. Vários pacientes relatam que se surpreenderam com o conforto do procedimento.",
  },
  {
    q: "Não aceita convênio — por quê?",
    a: "O atendimento é particular. Isso garante materiais de primeira linha, tempo dedicado ao seu caso, tecnologia de última geração e um resultado sem as limitações impostas pelos convênios.",
  },
  {
    q: "Posso fazer implante se tenho pouco osso?",
    a: "Em muitos casos, sim. Enxertos ósseos permitem recuperar o volume necessário. A tomografia e o planejamento 3D definem a melhor solução para o seu caso antes de qualquer procedimento.",
  },
  {
    q: "O que é carga imediata?",
    a: "Na carga imediata, o dente provisório é instalado logo após a cirurgia — você não fica sem dente. Nem sempre é indicada; depende da qualidade óssea e do caso. O planejamento define se é possível e seguro para você.",
  },
];

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * i }}
      className="border-b border-[#E2E8F0] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          className="font-semibold text-[#173B5E] group-hover:text-[#C49A15] transition-colors"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          {q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border-2 border-[#173B5E]/20 flex items-center justify-center text-[#173B5E] transition-all ${open ? "rotate-45 bg-[#173B5E] border-[#173B5E] text-white" : ""}`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-[#5A6A7E] text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            FAQ · IMPLANTES DENTÁRIOS
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#173B5E] leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Perguntas frequentes
            <br />sobre implante dentário.
          </h2>
        </motion.div>

        {inView && (
          <div className="bg-[#F8F7F4] rounded-2xl p-6 md:p-8">
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} i={i} />
            ))}
          </div>
        )}

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-[#5A6A7E] mb-4">Ainda tem dúvida? Fale direto com o Dr. André.</p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#173B5E] hover:bg-[#0F2840] text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
          >
            Tirar minha dúvida no WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
