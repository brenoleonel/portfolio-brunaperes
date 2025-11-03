'use client'


import Link from 'next/link'
import { motion } from 'framer-motion'


export default function Header() {
return (
<motion.header
initial={{ y: -24, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 border-b border-black/5"
>
<div className="container flex items-center justify-between py-3">
<Link href="/" className="font-semibold tracking-tight">Bruna Peres — Arquiteta</Link>
<nav className="flex gap-6 text-sm">
<a href="#about" className="hover:opacity-70">Sobre</a>
<a href="#gallery" className="hover:opacity-70">Galeria</a>
<a href="#contact" className="hover:opacity-70">Contato</a>
</nav>
</div>
</motion.header>
)
}