"use client";

import { Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800 py-10 mt-20">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center">
        {/* Nome e direitos */}
        <p className="text-sm tracking-wide text-zinc-500">
          © {new Date().getFullYear()} <span className="text-white font-medium">Bruna Peres</span> — Todos os direitos reservados.
        </p>

        {/* Ícones sociais */}
        <div className="flex items-center gap-6">
          <Link
            href="https://www.instagram.com/abruna_arquiteta?igsh=amdpdmZ0ZG0zeTg1"
            target="_blank"
            className="transition-all hover:scale-110 text-zinc-400 hover:text-pink-500"
            aria-label="Instagram"
          >
            <Instagram size={22} strokeWidth={1.4} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/bruna-peres-0bb0b4339/"
            target="_blank"
            className="transition-all hover:scale-110 text-zinc-400 hover:text-sky-500"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} strokeWidth={1.4} />
          </Link>

          <Link
            href="mailto:brunaperesssp@hotmail.com"
            className="transition-all hover:scale-110 text-zinc-400 hover:text-emerald-500"
            aria-label="E-mail"
          >
            <Mail size={22} strokeWidth={1.4} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
