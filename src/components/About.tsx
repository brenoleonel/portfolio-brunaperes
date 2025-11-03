import Section from './Section'


export default function About() {
return (
<Section id="about" title="Sobre mim">
<div className="grid md:grid-cols-3 gap-8">
<div className="md:col-span-2 space-y-4 leading-relaxed text-black/80">
<p>Cresci cercada por cheiros de madeira, ferramentas espalhadas e o som do lápis riscando papel.
Filha de marceneiro, aprendi desde cedo que toda criação começa com um esboço... e um sonho.
Com o tempo, descobri na arquitetura o mesmo encantamento que via nas mãos do meu pai: o poder de transformar ideias em algo real.
Comecei desenvolvendo imagens em 3D para outros profissionais, e foi ali que entendi o que realmente me move: criar.
Hoje, cada projeto é mais do que técnica. É uma história contada em formas, cores e espaços.</p>
</div>
<ul className="text-sm bg-black/5 rounded-xl p-4 space-y-2">
<li><strong>Local:</strong> Minas Gerais, Brasil</li>
<li><strong>Atuação:</strong> Projeto arquitetônico, interiores, consultorias</li>
<li><strong>Contato:</strong> brunaperesssp@hotmail.com </li>
</ul>
</div>
</Section>
)
}