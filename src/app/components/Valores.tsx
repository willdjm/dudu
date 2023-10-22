import { PiChartLineUpBold } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";


export function Valores() {

return (
<section className="bg-green-50">
<div id="valores" className="max-w-7xl mx-auto px-4 lg:px-8 py-5 lg:py-20 grid md:grid-cols-4 md:gap-8 items-start justify-center ">
    <div className="flex flex-col items-center justify-center max-w-sm p-2 gap-2 text-emerald-500">
        <TbTargetArrow size={45} />
        <p className="text-2xl font-medium ">Missão</p>
        <p className="font-normal text-emerald-500 dark:text-gray-400 text-center">
            Manter a excelência no atendimento e execução dos serviços, levando satisfação aos nossos clientes e colaboradores.
        </p>
    </div>
    <div className="flex flex-col items-center justify-center max-w-sm p-2 gap-2 text-emerald-500">
        <PiChartLineUpBold size={45} />
        <p className="text-2xl font-medium ">Visão</p>
        <p className="font-normal text-emerald-500 dark:text-gray-400 text-center">
            Oferecer soluções inovadoras em serviços e produtos capazes de superar as expectativas dos nossos clientes.
        </p>
    </div>
    <div className="flex flex-col items-center justify-center max-w-sm p-2 gap-2 text-emerald-500">
        <IoDiamondOutline size={45} />
        <p className="text-2xl font-medium ">Valores</p>
        <p className="font-normal text-emerald-500 dark:text-gray-400 text-center">
            Atendimento personalizado, pautado na ética, profissionalismo e o melhor custo-benefício.
        </p>
    </div>
    <div className="flex flex-col items-center justify-center max-w-sm p-2 gap-2 text-emerald-500">
        <FaRegHandshake size={45} />
        <p className="text-2xl font-medium ">Compromisso</p>
        <p className="font-normal text-emerald-500 dark:text-gray-400 text-center">
            Manter sempre uma comunicação clara e objetiva com nossos clientes em todas as etapas dos serviços prestados.
        </p>
    </div>
</div>
</section>
)
}