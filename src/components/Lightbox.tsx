'use client'


import { useEffect } from 'react'


export default function Lightbox({ src, title, onClose }: { src: string; title?: string; onClose: () => void }) {
useEffect(() => {
function onEsc(e: KeyboardEvent) { if (e.key === 'Escape') onClose() }
window.addEventListener('keydown', onEsc)
return () => window.removeEventListener('keydown', onEsc)
}, [onClose])


return (
<div className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
<figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
<img src={src} alt={title ?? 'Imagem'} className="w-full h-auto rounded-xl" />
{title && <figcaption className="text-white/80 text-sm mt-3">{title}</figcaption>}
</figure>
</div>
)
}