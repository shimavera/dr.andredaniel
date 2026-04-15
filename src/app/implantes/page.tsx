import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Pain from "@/components/Pain";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import CirurgiaGuiadaVideo from "@/components/CirurgiaGuiadaVideo";
import CasosClinicos from "@/components/CasosClinicos";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLdDentist from "@/components/JsonLdDentist";
import JsonLdImplantes from "@/components/JsonLdImplantes";

export const metadata: Metadata = {
  title: "Implantes Dentários na Barra da Tijuca | Dr. André Daniel",
  description:
    "Implante dentário definitivo com cirurgia guiada e planejamento 3D. Membro do ITI. Barra da Tijuca, Rio de Janeiro — agende pelo WhatsApp.",
  keywords: [
    "implante dentário barra da tijuca",
    "implante dentário rio de janeiro",
    "cirurgia guiada implante",
    "carga imediata implante",
    "implante unitário rio de janeiro",
    "all on four barra da tijuca",
    "enxerto ósseo implante rj",
    "implantodontista barra da tijuca rj",
  ],
  alternates: {
    canonical: "https://www.doutorandredaniel.com/implantes",
  },
  openGraph: {
    title: "Implantes Dentários na Barra da Tijuca | Dr. André Daniel",
    description:
      "O dente que você perdeu pode voltar. Cirurgia guiada, planejamento 3D e carga imediata. Membro do ITI. Barra da Tijuca, RJ.",
    url: "https://www.doutorandredaniel.com/implantes",
    type: "website",
  },
};

export default function ImplantesPage() {
  return (
    <>
      <JsonLdDentist />
      <JsonLdImplantes />
      <TopBar />
      <main>
        <Hero />
        <Pain />
        <CirurgiaGuiadaVideo />
        <About />
        <HowItWorks />
        <CasosClinicos />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
