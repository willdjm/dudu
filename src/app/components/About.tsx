import { Valores } from "./Valores";

export function About() {

return (

<section className="bg-green-50">
<div id="sobre" className="max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:pt-20 lg:px-8">

    <div className="mt-16 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="max-w-full mx-auto rounded-lg overflow-hidden flex flex-wrap justify-start">
                <div className="grid items-center justify-center px-6 py-4 text-emerald-500 gap-10">
<h2 className="text-5xl">
Sobre nós...
</h2>
<p className="text-xl text-justify">
Somos uma empresa especializada em conserto de geladeira, máquina de lavar, secadora, freezer, lava e seca. Aqui você contará com a melhor equipe de técnicos, altamente qualificados na área, que fornecerão soluções rápidas e adequadas para qualquer problema.

Prezamos por um serviço de qualidade e com o preço justo, buscando sempre proporcionar uma experiência única através dos nossos serviços, entregando a satisfação como resultado.

Sabemos da importância que esses equipamentos têm em sua vida, por isso estamos sempre dispostos a atendê-los e a resolver seu problema da forma mais rápida possível. Solicite o seu orçamento e surpreenda-se com o nosso trabalho.
</p>
                </div>

            </div>
            <div className="flex items-center justify-center rounded-lg overflow-hidden">
<picture>
    <img src="./tec.png" alt="" />
</picture>
            </div>
        </div>
    </div>
</div>
<Valores/>
</section>

)
}