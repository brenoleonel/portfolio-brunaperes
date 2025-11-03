"use client";

export default function Hero() {
  return (
    <section aria-label="hero" className="relative">
      {/* container com largura controlada pra não “esticar” demais */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* card grande com imagem de fundo */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* imagem como background, cobrindo sem distorcer */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url(/images/wa0016.jpg)" }}
          />
          {/* véu para contraste do texto */}
          <div className="absolute inset-0 bg-black/35" />

          {/* altura responsiva (não fica esticada) */}
          <div className="relative h-[clamp(380px,60vh,720px)]">
            <div className="h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-6xl leading-tight font-serif">
                  Transformamos espaços, conectamos emoções
                </h1>
                <p className="mt-4 text-white/85">
                  Projetos residenciais e comerciais com conforto, personalidade
                  e execução impecável.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/90 px-5 py-3 text-sm text-zinc-900 backdrop-blur hover:bg-white"
                >
                  AGENDAR CONSULTA <span aria-hidden>➔</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
