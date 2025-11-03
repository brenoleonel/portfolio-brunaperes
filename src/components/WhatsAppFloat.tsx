'use client'


import { useMemo } from 'react'


export default function WhatsAppFloat({ phone, message }: { phone: string; message?: string }) {
const href = useMemo(() => {
try {
const url = new URL(`https://wa.me/${phone}`)
if (message) url.searchParams.set('text', message)
return url.toString()
} catch {
return `https://wa.me/${phone}`
}
}, [phone, message])


return (
<a
href={href}
target="_blank"
rel="noopener noreferrer"
className="fixed z-50 bottom-5 right-5 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 shadow-lg hover:scale-105 transition"
aria-label="Abrir WhatsApp"
>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
<path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.46 0 .12 5.34.12 11.94c0 2.1.54 4.14 1.56 5.94L0 24l6.24-1.62c1.74.96 3.72 1.46 5.82 1.46h.06c6.6 0 11.94-5.34 11.94-11.94 0-3.18-1.26-6.18-3.54-8.46ZM12.12 22.08h-.06c-1.8 0-3.54-.48-5.1-1.38l-.36-.18-3.72.96.96-3.6-.24-.36a10.3 10.3 0 0 1-1.62-5.58C2.04 6.48 6.66 1.86 12.12 1.86c2.82 0 5.46 1.1 7.44 3.06 1.98 1.98 3.06 4.62 3.06 7.44 0 5.52-4.56 9.72-10.5 9.72Zm5.76-7.5c-.3-.18-1.74-.9-2.01-.96-.3-.12-.54-.18-.78.18-.24.36-.9.96-1.11 1.2-.24.24-.42.27-.78.09-.3-.18-1.26-.45-2.4-1.47-.9-.78-1.5-1.74-1.68-2.04-.18-.3 0-.48.12-.66.12-.12.3-.3.42-.48.12-.18.18-.3.27-.48.09-.18.03-.36-.03-.54-.06-.18-.78-1.86-1.08-2.55-.27-.66-.54-.57-.78-.57h-.66c-.24 0-.54.09-.84.39-.3.3-1.08 1.05-1.08 2.55s1.11 2.97 1.26 3.18c.18.24 2.16 3.3 5.25 4.62.72.3 1.29.48 1.74.63.72.24 1.38.21 1.89.12.57-.09 1.74-.72 1.98-1.41.24-.69.24-1.29.18-1.41-.06-.12-.24-.18-.54-.36Z"/>
</svg>
</a>
)
}