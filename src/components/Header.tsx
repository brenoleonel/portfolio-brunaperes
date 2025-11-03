'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, Mail } from 'lucide-react'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 border-b border-black/5"
    >
      <div className="container flex items-center justify-between py-3">
        {/* título/nome - volta ao topo ao clicar */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          Bruna Peres — Arquiteta
        </button>

        {/* navegação */}
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:opacity-70">
            Sobre
          </a>
          <a href="#gallery" className="hover:opacity-70">
            Galeria
          </a>

          {/* ícones sociais — aparecem lado a lado no desktop, reduzidos no mobile */}
          <div className="flex items-center gap-4 text-zinc-700">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="transition-opacity hover:opacity-70"
              aria-label="Instagram"
            >
              <Instagram size={18} className="md:size-[20px]" />
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              className="transition-opacity hover:opacity-70"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="md:size-[20px]" />
            </Link>
            <Link
              href="mailto:contato@brunaperes.arq"
              className="transition-opacity hover:opacity-70"
              aria-label="E-mail"
            >
              <Mail size={18} className="md:size-[20px]" />
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
