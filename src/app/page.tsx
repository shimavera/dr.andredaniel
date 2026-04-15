import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import InstitucionalHero from "@/components/InstitucionalHero";
import About from "@/components/About";
import ServicesGrid from "@/components/ServicesGrid";
import ImplantesDestaque from "@/components/ImplantesDestaque";
import CirurgiaGuiadaVideo from "@/components/CirurgiaGuiadaVideo";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLdDentist from "@/components/JsonLdDentist";

export const metadata: Metadata = {
  title: "Dr. André Daniel — Implantes Dentários e Odontologia Digital | Barra da Tijuca, RJ",
  description:
    "Implantes dentários, reabilitação oral e odontologia digital na Barra da Tijuca, Rio de Janeiro. Membro do ITI — 60 países. Atendimento particular exclusivo. Agende sua consulta.",
  alternates: {
    canonical: "https://www.doutorandredaniel.com",
  },
  openGraph: {
    title: "Dr. André Daniel — Odontologia de Excelência | Barra da Tijuca, RJ",
    description:
      "Membro do ITI. Especialista em implantes, reabilitação oral e odontologia digital. Barra da Tijuca, Rio de Janeiro.",
    url: "https://www.doutorandredaniel.com",
  },
};

export default function Home() {
  return (
    <>
      <JsonLdDentist />
      <TopBar />
      <Nav />
      <main>
        <InstitucionalHero />
        <About />
        <ServicesGrid />
        <ImplantesDestaque />
        <CirurgiaGuiadaVideo />
        <Technology />
        <Testimonials />
        <Contato />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  );
}
