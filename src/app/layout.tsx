import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://www.doutorandredaniel.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dr. André Daniel — Implantes Dentários e Reabilitação Oral | Barra da Tijuca, RJ",
    template: "%s | Dr. André Daniel",
  },
  description:
    "Especialista em implantes dentários e odontologia digital na Barra da Tijuca, Rio de Janeiro. Membro do ITI, graduado pela UFRJ. Planejamento 3D, cirurgia guiada e carga imediata. Agende sua consulta.",
  keywords: [
    "implantes dentários barra da tijuca",
    "implante dentário rio de janeiro",
    "implantodontista barra da tijuca",
    "odontologia digital rio de janeiro",
    "cirurgia guiada implante rj",
    "reabilitação oral rio de janeiro",
    "dr andré daniel",
    "carga imediata implante",
    "all on four rio de janeiro",
  ],
  authors: [{ name: "Dr. André Daniel" }],
  creator: "Dr. André Daniel",
  publisher: "Dr. André Daniel",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Dr. André Daniel — Implantes e Reabilitação Oral | Barra da Tijuca",
    description:
      "Membro do ITI. Especialista em implantes com planejamento 3D e cirurgia guiada. Barra da Tijuca, RJ.",
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Dr. André Daniel",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Dr. André Daniel — Implantes Dentários Barra da Tijuca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. André Daniel — Implantes Dentários | Barra da Tijuca, RJ",
    description: "Membro do ITI. Cirurgia guiada, planejamento 3D e carga imediata. Barra da Tijuca, RJ.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#173B5E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KT4KQRRZ');`}</Script>
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KT4KQRRZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
