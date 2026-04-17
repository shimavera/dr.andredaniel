"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { pushWorkingLead } from "@/lib/gtm";

const WA_LINK =
  "https://wa.me/5521985154051?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+para+Reabilita%C3%A7%C3%A3o+Oral+com+o+Dr.+Andr%C3%A9+Daniel.";

const steps = [
  {
    num: "01",
    title: "Diagnóstico da arcada completa",
    desc: "Tomografia de toda a boca + escaneamento intraoral. Mapeamos a quantidade de osso, a saúde dos dentes remanescentes e o que precisa ser feito antes dos implantes.",
  },
  {
    num: "02",
    title: "Planejamento da reabilitação",
    desc: "Definimos quantos implantes, qual tipo de prótese (All-on-4, All-on-6, reabilitação parcial) e como será o resultado. Você vê o sorriso final antes da primeira cirurgia.",
  },
  {
    num: "03",
    title: "Cirurgia com guia precisa",
    desc: "Implantes posicionados com guia cirúrgica fabricada por impressão 3D. Máxima precisão, mínima invasão. Em casos indicados, prótese provisória no mesmo dia.",
  },
  {
    num: "04",
    title: "Prótese definitiva e acompanhamento",
    desc: "Após a osseointegração, entregamos a prótese definitiva fixada. Acompanhamento programado para garantir a longevidade do resultado por décadas.",
  },
];

export default function HowItWorksReab() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processo" className="bg-[#173B5E] py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
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
            Da avaliação à boca completa —
            <br />
            etapa por etapa.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            4 fases. Processo transparente. Você entende tudo antes de decidir.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
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
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-[#C49A15]/30" />
              )}
            </motion.div>
          ))}
        </div>

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
            onClick={pushWorkingLead}
            className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
          >
            Começar pela avaliação →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
