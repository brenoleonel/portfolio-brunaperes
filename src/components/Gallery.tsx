'use client'


import { useState } from 'react'
import Section from './Section'
import { galleryImages } from '@/lib/images'
import Lightbox from './Lightbox'
import { motion } from 'framer-motion'


export default function Gallery() {
const [active, setActive] = useState<number | null>(null)


return (
<Section id="gallery" title="Galeria">
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
{galleryImages.map((img, i) => (
<motion.button
key={i}
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
onClick={() => setActive(i)}
className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/5"
aria-label={`Abrir imagem ${img.title ?? i + 1}`}
>
<img src={img.src} alt={img.title ?? `Imagem ${i + 1}`} className="w-full h-full object-cover" />
</motion.button>
))}
</div>


{active !== null && (
<Lightbox src={galleryImages[active].src} title={galleryImages[active].title} onClose={() => setActive(null)} />)
}
</Section>
)
}