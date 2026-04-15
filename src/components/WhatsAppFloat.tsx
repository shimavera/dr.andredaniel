"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/5521985154051?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Andr%C3%A9+Daniel.";

export default function WhatsAppFloat() {
  const [showBalloon, setShowBalloon] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShowBalloon(true);
        setShake(true);
        setTimeout(() => setShake(false), 800);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Balloon */}
      {showBalloon && !dismissed && (
        <div className="relative bg-white rounded-2xl shadow-2xl px-4 pt-3 pb-4 max-w-[210px] animate-[fadeSlideIn_0.35s_cubic-bezier(0.34,1.56,0.64,1)]">
          {/* Close */}
          <button
            onClick={() => { setDismissed(true); setShowBalloon(false); }}
            className="absolute -top-2 -right-2 w-5 h-5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-400 text-xs flex items-center justify-center transition-colors"
            aria-label="Fechar"
          >
            ×
          </button>
          {/* Doctor photo + name row */}
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-[#C49A15]/40">
              <Image
                src="/dr-andre.jpg"
                alt="Dr. André Daniel"
                width={40}
                height={40}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div>
              <p className="text-[#173B5E] text-xs font-bold leading-tight">Dr. André Daniel</p>
              <p className="text-[#25D366] text-[10px] font-medium">● Online agora</p>
            </div>
          </div>
          <p className="text-[#173B5E] text-sm font-bold leading-snug">
            Agende sua avaliação
          </p>
          <p className="text-gray-500 text-xs mt-1 leading-snug">
            Tire suas dúvidas antes de decidir. Sem compromisso.
          </p>
          {/* Triangle pointing RIGHT toward WhatsApp button */}
          <div className="absolute bottom-5 -right-[10px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-white" />
        </div>
      )}

      {/* WhatsApp button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setShowBalloon(false)}
        className={`w-14 h-14 bg-[#25D366] hover:bg-[#1DA851] rounded-full flex items-center justify-center shadow-xl shadow-green-900/40 hover:scale-110 transition-all shrink-0 ${
          shake ? "animate-[wiggle_0.6s_ease-in-out]" : ""
        }`}
        aria-label="Falar no WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
