import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import HeroReab from "@/components/reab/HeroReab";
import PainReab from "@/components/reab/PainReab";
import CirurgiaGuiadaVideo from "@/components/CirurgiaGuiadaVideo";
import About from "@/components/About";
import HowItWorksReab from "@/components/reab/HowItWorksReab";
import CasosClinicos from "@/components/CasosClinicos";
import Testimonials from "@/components/Testimonials";
import FAQReab from "@/components/reab/FAQReab";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Reabilitação Oral Completa na Barra da Tijuca | Dr. André Daniel",
  description:
    "Reabilitação oral com implantes fixos. All-on-4, All-on-6 e reabilitação parcial. Planejamento 3D completo. Membro do ITI. Avaliação gratuita. Barra da Tijuca, Rio de Janeiro.",
  keywords: [
    "reabilitação oral completa barra da tijuca",
    "all on four rio de janeiro",
    "all on six barra da tijuca",
    "prótese fixa implante rio de janeiro",
    "reabilitação oral implantes rj",
    "dentista reabilitação oral barra da tijuca",
    "full arch restoration rio de janeiro",
    "implante full arch rj",
  ],
  alternates: {
    canonical: "https://www.doutorandredaniel.com/reabilitacao",
  },
  openGraph: {
    title: "Reabilitação Oral Completa | Dr. André Daniel — Barra da Tijuca",
    description:
      "Sua boca completa. Seu sorriso de volta. Planejamento digital, cirurgia guiada e prótese fixa. Membro do ITI. Barra da Tijuca, RJ.",
    url: "https://www.doutorandredaniel.com/reabilitacao",
    type: "website",
  },
};

export default function ReabilitacaoPage() {
  return (
    <>
      <TopBar />
      <LPNav />
      <main>
        <HeroReab />
        <PainReab />
        <About />
        <HowItWorksReab />
        <Technology />
        <Testimonials />
        <FAQReab />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
