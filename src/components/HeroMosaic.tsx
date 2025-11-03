"use client";
import { useMemo } from "react";

// ─────────────────────────────
// Configuração
// ─────────────────────────────
export default function HeroMosaic({
  imageSrc = "/images/08.jpg",
  seed = 1,
  motto = "Transformamos espaços, conectamos emoções",
}: {
  imageSrc?: string;
  seed?: number;
  motto?: string;
}) {
  // Gera 4 formas “pseudo-aleatórias” a partir do seed
  const shapes = useMemo(() => buildShapes(seed), [seed]);

  return (
    <section
      aria-label="hero-mosaic"
      className="relative border-t border-black/10"
    >
      <div className="grid grid-cols-4 grid-rows-2 md:min-h-[80vh]">
        {/* Linha 1: Formas */}
        {shapes.map((s, i) => (
          <div
            key={`shape-${i}`}
            className="relative aspect-[3/2] border-r border-b border-black/10 bg-[#111] overflow-hidden"
          >
            <Shape variant={s.variant} className="absolute inset-0" />
          </div>
        ))}

        {/* Linha 2: Imagem dividida em quadrantes */}
        {[0, 1, 2, 3].map((q) => (
          <Quad key={`q-${q}`} src={imageSrc} quadrant={q as 0 | 1 | 2 | 3} />
        ))}
      </div>

      {/* Frase/motto sobreposta */}
      <div className="pointer-events-none absolute left-0 right-0 md:left-[min(4vw,40px)] top-1/2 -translate-y-1/2 z-10">
        <div className="grid grid-cols-4 gap-0">
          <div className="col-span-2 p-4 md:p-10 bg-black/50 text-white backdrop-blur-sm">
            <h1 className="text-3xl md:text-6xl leading-tight font-serif">
              {motto}
            </h1>
          </div>
        </div>
      </div>

      {/* CTA canto inferior direito */}
      <div className="absolute bottom-4 right-4 z-10">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/80 px-5 py-3 text-sm backdrop-blur hover:bg-white"
        >
          AGENDAR CONSULTA
          <span aria-hidden>➔</span>
        </a>
      </div>
    </section>
  );
}

// ─────────────────────────────
// Funções auxiliares
// ─────────────────────────────
type Variant = "arch" | "half-left" | "half-right" | "circle";

function buildShapes(seed = 1): { variant: Variant }[] {
  const all: Variant[] = ["arch", "half-left", "half-right", "circle"];
  const out: Variant[] = [];
  let x = Math.abs(seed) || 1;
  for (let i = 0; i < 4; i++) {
    x = (x * 9301 + 49297) % 233280; // pseudo random LCG
    const idx = Math.floor((x / 233280) * all.length);
    out.push(all[idx]);
  }
  return out.map((v) => ({ variant: v }));
}

function Shape({
  variant,
  className,
}: {
  variant: Variant;
  className?: string;
}) {
  switch (variant) {
    case "arch":
      return (
        <svg
          className={className}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="100" height="100" fill="#0F0F11" />
          <path
            d="M0,100 L0,45 A50,50 0 0,1 100,45 L100,100 Z"
            fill="#1A1A1E"
          />
        </svg>
      );
    case "half-left":
      return (
        <svg
          className={className}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="100" height="100" fill="#0F0F11" />
          <path
            d="M50,0 A50,50 0 0,0 50,100 L0,100 L0,0 Z"
            fill="#1A1A1E"
          />
        </svg>
      );
    case "half-right":
      return (
        <svg
          className={className}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="100" height="100" fill="#0F0F11" />
          <path
            d="M50,0 A50,50 0 0,1 50,100 L100,100 L100,0 Z"
            fill="#1A1A1E"
          />
        </svg>
      );
    case "circle":
    default:
      return (
        <svg
          className={className}
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="100" height="100" fill="#0F0F11" />
          <circle cx="75" cy="50" r="45" fill="#1A1A1E" />
        </svg>
      );
  }
}

function Quad({
  src,
  quadrant,
}: {
  src: string;
  quadrant: 0 | 1 | 2 | 3;
}) {
  const pos = ["left top", "right top", "left bottom", "right bottom"][quadrant];

  return (
    <div
      className="relative border-r border-black/10"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "200% 200%",
        backgroundPosition: pos,
        aspectRatio: "3/2",
      }}
    />
  );
}
