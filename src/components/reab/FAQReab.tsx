"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { pushWorkingLead } from "@/lib/gtm";

const WA_LINK =
  "https://wa.me/5521985154051?text=Ol%C3%A1%2C+tenho+uma+d%C3%BAvida+sobre+Reabilita%C3%A7%C3%A3o+Oral.";

const faqs = [
  {
    q: "Preciso perder todos os dentes para fazer reabilitação oral?",
    a: "Não. A reabilitação oral pode ser parcial ou total. Se você ainda tem dentes saudáveis, eles são preservados. O planejamento define exatamente o que precisa ser substituído — sem extrações desnecessárias.",
  },
  {
    q: "Qual a diferença entre All-on-4, All-on-6 e reabilitação parcial?",
    a: "O All-on-4 e All-on-6 reabilitam a arcada inteira com 4 ou 6 implantes estrategicamente posicionados — solução para quem perdeu todos ou quase todos os dentes. A reabilitação parcial usa implantes unitários para substituir dentes específicos. A tomografia define qual é o melhor caminho para o seu caso.",
  },
  {
    q: "Dói fazer reabilitação com implantes?",
    a: "O procedimento é feito sob anestesia local. A maioria dos pacientes relata desconforto controlável no pós-operatório — manejado com medicação. O processo é gradual e o Dr. André explica cada etapa antes de executar.",
  },
  {
    q: "Quanto tempo dura o tratamento completo?",
    a: "Depende do caso e do protocolo. Com carga imediata, você pode sair com provisório no mesmo dia. O tratamento completo — da cirurgia à prótese definitiva — leva em média de 4 a 8 meses, que é o tempo de osseointegração dos implantes.",
  },
  {
    q: "Posso comer normalmente depois da reabilitação?",
    a: "Sim, esse é exatamente o objetivo. A prótese fixa sobre implantes permite mastigar como dentes naturais — sem restrições alimentares e sem o desconforto de uma prótese removível.",
  },
  {
    q: "Tenho pouco osso. Ainda consigo fazer?",
    a: "Na maioria dos casos, sim. Enxertos ósseos podem recuperar o volume necessário. Além disso, técnicas como o All-on-4 foram desenvolvidas justamente para casos com osso reduzido, usando angulação estratégica para aproveitar o osso disponível.",
  },
  {
    q: "Quanto custa uma reabilitação oral completa?",
    a: "O valor depende da extensão do tratamento: número de implantes, necessidade de enxerto e tipo de prótese escolhida. Agende uma avaliação para receber um orçamento personalizado e transparente — sem surpresas.",
  },
  {
    q: "O resultado fica natural?",
    a: "Sim. A prótese é planejada digitalmente com as proporções e cor adequadas ao seu rosto. Pacientes frequentemente relatam que amigos e familiares não percebem que são implantes.",
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

export default function FAQReab() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#C49A15] mb-4">
            FAQ · REABILITAÇÃO ORAL
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#173B5E] leading-tight"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Perguntas frequentes
            <br />sobre reabilitação oral.
          </h2>
        </motion.div>

        {inView && (
          <div className="bg-[#F8F7F4] rounded-2xl p-6 md:p-8">
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} i={i} />
            ))}
          </div>
        )}

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
            onClick={pushWorkingLead}
            className="inline-flex items-center gap-2.5 bg-[#173B5E] hover:bg-[#0F2840] text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
          >
            Tirar minha dúvida no WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
