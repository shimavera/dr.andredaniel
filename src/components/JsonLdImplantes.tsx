// Server Component — zero JS no bundle do cliente

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Dói fazer implante dentário?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O procedimento é realizado sob anestesia local. A maioria dos pacientes relata dor muito menor do que esperava — parecida com uma extração comum. O desconforto pós-operatório é controlado com medicação e costuma desaparecer em poucos dias.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva o tratamento de implante dentário?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende do caso. Com carga imediata, você pode sair com o dente provisório no mesmo dia da cirurgia. O implante se integra ao osso em 3 a 6 meses, quando colocamos a coroa definitiva. Cada caso é avaliado individualmente.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto custa um implante dentário?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O valor varia conforme o planejamento: quantidade de implantes, necessidade de enxerto ósseo e tipo de prótese. Oferecemos orçamento personalizado e totalmente transparente na primeira consulta — sem letras miúdas.",
      },
    },
    {
      "@type": "Question",
      name: "O implante dentário dura a vida toda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Com cuidados adequados — higiene diária e retornos periódicos — implantes bem executados têm vida útil indeterminada. Muitos pacientes do Dr. André usam os mesmos implantes há mais de uma década.",
      },
    },
    {
      "@type": "Question",
      name: "Tenho medo de dentista. Consigo fazer implante?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O Dr. André é reconhecido pela calma e didática no atendimento — explica cada etapa antes de executar, sem pressa. Vários pacientes relatam que se surpreenderam com o conforto do procedimento.",
      },
    },
    {
      "@type": "Question",
      name: "Posso fazer implante dentário se tenho pouco osso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Em muitos casos, sim. Enxertos ósseos permitem recuperar o volume necessário. A tomografia e o planejamento 3D definem a melhor solução para o seu caso antes de qualquer procedimento.",
      },
    },
    {
      "@type": "Question",
      name: "O que é carga imediata no implante dentário?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Na carga imediata, o dente provisório é instalado logo após a cirurgia — você não fica sem dente. Nem sempre é indicada; depende da qualidade óssea e do caso. O planejamento define se é possível e seguro para você.",
      },
    },
    {
      "@type": "Question",
      name: "Por que o atendimento não aceita convênio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O atendimento é exclusivamente particular. Isso garante materiais de primeira linha, tempo dedicado ao seu caso, tecnologia de última geração e um resultado sem as limitações impostas pelos convênios.",
      },
    },
  ],
};

const medicalProcedureSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  name: "Implante Dentário com Cirurgia Guiada",
  description:
    "Substituição definitiva de dentes perdidos através de implante de titânio com planejamento digital 3D e cirurgia guiada por guia individualizado. Carga imediata disponível para casos indicados.",
  procedureType: "https://schema.org/SurgicalProcedure",
  bodyLocation: "Cavidade oral",
  preparation:
    "Consulta de avaliação com tomografia computadorizada, escaneamento intraoral e planejamento 3D personalizado.",
  howPerformed:
    "Cirurgia minimamente invasiva com guia cirúrgica de precisão fabricada por impressão 3D. Anestesia local. Osseointegração em 3 a 6 meses.",
  followup: "Retornos programados para acompanhamento da osseointegração e instalação da coroa definitiva.",
  performer: {
    "@type": "Physician",
    name: "Dr. André Daniel Madeira Neto",
    jobTitle: "Implantodontista",
  },
};

export default function JsonLdImplantes() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
      />
    </>
  );
}
