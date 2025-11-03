"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // npm i lucide-react

type Props = {
  images: string[];
  motto?: string;
  autoPlay?: boolean;
  intervalMs?: number;
  fadeMs?: number;
};

export default function HeroShowcase({
  images,
  motto = "Transformamos espaços, conectamos emoções",
  autoPlay = true,
  intervalMs = 6000,
  fadeMs = 700,
}: Props) {
  const safeImages = useMemo(
    () => (images?.length ? images : ["/images/wa0016.jpg"]),
    [images]
  );

  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!autoPlay || safeImages.length <= 1) return;
    const t = setInterval(() => go((idx + 1) % safeImages.length), intervalMs);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, intervalMs, idx, safeImages.length]);

  function go(nextIndex: number) {
    setPrevIdx(idx);
    setFadeOut(true);
    setIdx(nextIndex);
    setTimeout(() => setFadeOut(false), 20);
    setTimeout(() => setPrevIdx(null), fadeMs + 40);
  }

  const prev = () => go((idx - 1 + safeImages.length) % safeImages.length);
  const next = () => go((idx + 1) % safeImages.length);

  return (
    <section
      aria-label="hero-showcase"
      className="relative mt-10 md:mt-14 mb-16 md:mb-24" // empurra o conteúdo abaixo (Sobre mim)
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="group relative rounded-3xl overflow-hidden border border-black/10 bg-white">
          <div className="relative h-[clamp(640px,85vh,980px)]"> {/* hero maior */}
            {/* camada de baixo: anterior */}
            {prevIdx !== null && (
              <Image
                src={safeImages[prevIdx]}
                alt=""
                fill
                priority
                className="object-cover object-center"
                sizes="100vw"
              />
            )}

            {/* camada de cima: atual com fade */}
            <Image
              key={safeImages[idx]}
              src={safeImages[idx]}
              alt="Projeto destaque"
              fill
              priority
              className="object-cover object-center transition-opacity"
              style={{ opacity: fadeOut ? 0 : 1, transitionDuration: `${fadeMs}ms` }}
              sizes="100vw"
            />

            {/* linhas 2x2 (dividem em 4 quadrantes) */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 bg-white/70" />
              <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-white/70" />
            </div>

            {/* overlay APENAS no quadrante 1/4 (top-left) */}
            <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-black/50 backdrop-blur-[2px]">
              <div className="h-full w-full flex items-start justify-start p-6 sm:p-8 md:p-10">
                <h1 className="max-w-[36ch] font-serif text-white text-4xl md:text-6xl leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
                  {motto}
                </h1>
              </div>
            </div>

            {/* setas suaves laterais (aparecem no hover) */}
            {safeImages.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                             rounded-full bg-white/70 hover:bg-white text-zinc-800 shadow-md p-2 backdrop-blur-sm"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={26} strokeWidth={1.6} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                             rounded-full bg-white/70 hover:bg-white text-zinc-800 shadow-md p-2 backdrop-blur-sm"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={26} strokeWidth={1.6} />
                </button>
              </>
            )}

            {/* dots */}
            {safeImages.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {safeImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`h-2.5 w-2.5 rounded-full ring-1 ring-white/50 transition-all ${
                      i === idx ? "bg-white scale-110" : "bg-white/40"
                    }`}
                    aria-label={`Ir para imagem ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
