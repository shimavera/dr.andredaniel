"use client";

import Image from "next/image";
import { pushWorkingLead } from "@/lib/gtm";

const WA_LINK =
  "https://wa.me/5521985154051?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Andr%C3%A9+Daniel.";
const MAPS_LINK =
  "https://maps.google.com/?q=Almirante+Júlio+de+Sá+Bierrenbach,+200,+Barra+da+Tijuca,+Rio+de+Janeiro";

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#0F2840] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Dr. André Daniel"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p
                  className="font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Dr. André Daniel
                </p>
                <p className="text-white/50 text-xs">Implantes · Odontologia Digital</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Implantes, reabilitação e odontologia digital na Barra da Tijuca.
              Só atendimento particular.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
              Especialidades
            </p>
            <ul className="space-y-2.5">
              {[
                "Implantes Dentários",
                "Reabilitação Oral",
                "Restaurações Estéticas",
                "Odontologia Digital",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#implantes"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
              Contato
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={pushWorkingLead}
                className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group"
              >
                <svg
                  className="w-4 h-4 mt-0.5 text-[#25D366] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +55 21 98515-4051
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-white transition-colors"
              >
                <svg
                  className="w-4 h-4 mt-0.5 text-[#C49A15] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span>
                  Almirante Júlio de Sá Bierrenbach, 200
                  <br />
                  Indic Tower, Torre A, Sala 320
                  <br />
                  Barra da Tijuca — Rio de Janeiro, RJ
                </span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <svg
                  className="w-4 h-4 text-[#C49A15] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Segunda a Sexta, 9h às 18h
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Dr. André Daniel. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            CRO-RJ · Atendimento exclusivamente particular
          </p>
        </div>
      </div>
    </footer>
  );
}
