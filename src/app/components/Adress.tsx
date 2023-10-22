import { FaWhatsapp, FaRegClock } from "react-icons/fa";
import { BsGeoAltFill } from "react-icons/bs";

export function Endereço() {

return (

<section className="bg-green-50">
<div id="contato" className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-20 lg:px-8">
    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-emerald-500">Solicite um orçamento</h2>
    </div>
    <div className="mt-10 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="max-w-full mx-auto rounded-lg overflow-hidden flex flex-wrap justify-start">
                <div className="flex items-center justify-center border-b border-gray-200 px-2 py-4">
                    <div
                        className="flex items-center justify-center h-16 w-16 rounded-lg bg-emerald-300 text-center text-xs font-medium text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <FaWhatsapp size={30} />
                    </div>
                    <div className="md:px-6 md:py-4 px-4 grid flex-1">
                        <h3 className="text-lg font-medium text-gray-900">Contato</h3>
                        <p className="mt-1 text-gray-600 hidden md:flex">(11) 91234-5678 / (11) 91234-5678</p>
                        <p className="text-gray-600 flex md:hidden">(11) 91234-5678 <br /> (11) 91234-5678</p>
                    </div>
                </div>
                <div className="flex items-center justify-center border-b border-gray-200 px-2 py-4">
                    <div
                        className="middle flex items-center justify-center none relative h-16 w-16 rounded-lg bg-emerald-300 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <FaRegClock size={30} />
                    </div>
                    <div className="md:px-6 md:py-4 px-4 grid flex-1">
                        <h3 className="text-lg font-medium text-gray-900">Horário de Atendimento</h3>
                        <p className="text-gray-600 flex md:hidden">Segunda à Sábado <br /> 08h às 18h</p>
                        <p className="mt-1 text-gray-600 hidden md:flex">Segunda à Sábado | 08h às 18h</p>
                    </div>
                </div>
                <div className="flex items-center justify-center border-b border-gray-200 px-2 py-4">
                    <div
                        className="middle flex items-center justify-center none relative h-16 w-16 rounded-lg bg-emerald-300 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <BsGeoAltFill size={30} />
                    </div>
                    <div className="md:px-6 md:py-4 px-4 grid flex-1">
                        <h3 className="text-lg font-medium text-gray-900">Endereço:</h3>
                        <p className="mt-1 text-gray-600">QNM 03 Conjunto E Lote 47 Loja 06 - Ceilândia Sul</p>
                    </div>
                </div>
            </div>
            <div className="rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.6587425754733!2d-48.10833002403246!3d-15.82193812363555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bcd70114d0b87%3A0x7896aa8849ff273!2zRHVkdSBSZWZyaWdlcmHDp8Ojbw!5e0!3m2!1spt-BR!2sbr!4v1697668494222!5m2!1spt-BR!2sbr"
                    width="100%" height="480" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</div>

</section>

)
}