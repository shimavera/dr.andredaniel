// Server Component — zero JS no bundle do cliente
const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://www.doutorandredaniel.com/#dentist",
  name: "Dr. André Daniel — Implantes e Odontologia Digital",
  description:
    "Especialista em implantes dentários com planejamento 3D e cirurgia guiada. Membro do ITI — International Team for Implantology. Atendimento exclusivo particular na Barra da Tijuca, Rio de Janeiro.",
  url: "https://www.doutorandredaniel.com",
  telephone: "+5521985154051",
  email: "contato@doutorandredaniel.com",
  image: "https://www.doutorandredaniel.com/logo.png",
  logo: "https://www.doutorandredaniel.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Alameda Almirante Júlio de Sá Bierrenbach, 200 — Indic Tower, Torre A, Sala 320",
    addressLocality: "Barra da Tijuca",
    addressRegion: "RJ",
    postalCode: "22775-057",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -22.9963,
    longitude: -43.3633,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "30",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Marinei de Souza Oliveira Rocha" },
      reviewBody:
        "Já faço tratamento com Dr. André Daniel M. Neto, a mais de 13 anos. Fiz implantes com Dr. André quando ele estudava na faculdade Veiga de Almeida, sempre muito atencioso e cuidadoso com os pacientes.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Mônica Monteiro" },
      reviewBody:
        "Dr. André é um profissional atencioso, faz tudo com muita calma e atenção, explica cada detalhe do tratamento. Usa técnicas modernas e materiais de qualidade. Altamente capacitado!",
    },
  ],
  medicalSpecialty: [
    "https://schema.org/Dentistry",
    "Implantodontia",
    "Reabilitação Oral",
    "Odontologia Digital",
  ],
  hasMap: "https://maps.google.com/?q=Almirante+Júlio+de+Sá+Bierrenbach,+200,+Barra+da+Tijuca,+Rio+de+Janeiro",
  priceRange: "$$",
  currenciesAccepted: "BRL",
  paymentAccepted: "Dinheiro, Cartão de Crédito, Cartão de Débito, PIX",
  areaServed: [
    { "@type": "City", name: "Barra da Tijuca" },
    { "@type": "City", name: "Rio de Janeiro" },
  ],
  sameAs: [
    "https://www.doutorandredaniel.com",
  ],
  employee: {
    "@type": "Physician",
    name: "Dr. André Daniel Madeira Neto",
    jobTitle: "Implantodontista",
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Universidade Federal do Rio de Janeiro (UFRJ)" },
      { "@type": "EducationalOrganization", name: "Universidade Veiga de Almeida (UVA)" },
    ],
    memberOf: {
      "@type": "Organization",
      name: "ITI — International Team for Implantology",
    },
  },
};

export default function JsonLdDentist() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
    />
  );
}
