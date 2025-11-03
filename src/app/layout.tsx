import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
title: 'Bruna Peres — Arquiteta',
description: 'Portfólio de arquitetura e interiores por Bruna Peres.',
openGraph: {
title: 'Bruna Peres — Arquiteta',
description: 'Arquitetura, interiores e visualização 3D.',
type: 'website',
},
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="pt-BR">
<body className={inter.className}>{children}
  <Footer />
</body>
</html>
)
}