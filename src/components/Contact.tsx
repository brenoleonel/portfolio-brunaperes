'use client'


import Section from './Section'
import { useState } from 'react'


export default function Contact() {
const [status, setStatus] = useState<'idle' | 'ok' | 'err'>('idle')


function onSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault()
// Integração posterior: enviar para API/Nest/Email service
setStatus('ok')
}


return (
<Section id="contact" title="Contato">
<form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 max-w-2xl">
<input required name="nome" placeholder="Nome" className="border rounded-lg px-3 py-2" />
<input required type="email" name="email" placeholder="E-mail" className="border rounded-lg px-3 py-2" />
<input name="assunto" placeholder="Assunto" className="md:col-span-2 border rounded-lg px-3 py-2" />
<textarea required name="mensagem" placeholder="Mensagem" className="md:col-span-2 border rounded-lg px-3 py-2 h-32" />
<div className="md:col-span-2 flex items-center gap-3">
<button className="px-4 py-2 rounded-lg bg-foreground text-white">Enviar</button>
{status === 'ok' && <p className="text-green-600 text-sm">Mensagem enviada! (simulada)</p>}
</div>
</form>
</Section>
)
}