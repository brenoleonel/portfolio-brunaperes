import { ReactNode } from 'react'


export default function Section({ id, title, children }: { id: string; title?: string; children: ReactNode }) {
return (
<section id={id} className="py-20 md:py-28">
<div className="container">
{title && <h2 className="text-2xl md:text-3xl font-semibold mb-8">{title}</h2>}
{children}
</div>
</section>
)
}