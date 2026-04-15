"use client";

export default function TopBar() {
  return (
    <div className="bg-[#0F2840] text-white text-[10px] md:text-xs py-2 px-3 md:px-4 text-center tracking-wide whitespace-nowrap overflow-hidden">
      <span className="opacity-80">⚕️</span>{" "}
      <span className="font-medium">Atendimento particular</span>
      <span className="mx-2 md:mx-3 opacity-40">·</span>
      <span className="opacity-70">Barra da Tijuca, RJ</span>
    </div>
  );
}
