'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from '@/components/Header';
// import Hero from '@/components/Hero';            // <- aqui
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HeroShowcase from '@/components/HeroShowcase';

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <main>
      <Header />
      <HeroShowcase
        images={[
          "/images/25.jpg",
          "/images/06.jpg",
          "/images/04.jpg",
        ]}
        motto="Transformamos espaços, conectamos emoções"
        autoPlay={true}
        intervalMs={6000}
      />                        {/* <- usa o Hero novo */}
      <About />
      <Gallery />
      <Contact />
      <WhatsAppFloat phone="5535991877780" message="Olá, Bruna! Vim pelo portfólio." />
    </main>
  );
}