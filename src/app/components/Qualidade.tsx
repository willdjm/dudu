import { TbClockStar } from "react-icons/tb";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { LuShieldCheck, LuRefrigerator } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";



export function Qualidade() {

return (

<section className="md:bg-gradient-to-r bg-gradient-to-b from-emerald-400 from-10% via-green-300 via-30% to-emerald-500 to-90% ... shadow-2xl drop-shadow-md">
<div id="quality" className="max-w-7xl mx-auto pt-16  px-3 lg:pt-6 ">
<h2 className="text-2xl md:text-4xl text-center font-medium text-white lg:hidden mb-8">Nós podemos te ajudar!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-end lg:items-center">



        <div className="rounded-lg overflow-hidden">
        <picture>
        <img src="./24.png" alt="" className="md:w-full md:items-center md:justify-center md:flex hidden"/>
        <img src="./24m.png" alt="" className="w-full items-center justify-center flex md:hidden" />
    </picture>
 
            </div>
            


            <div className="max-w-full mx-auto rounded-lg overflow-hidden gap-8 md:gap-0 grid justify-start pb-8 px-5 ">
                
        <h2 className="lg:text-3xl lg:text-start lg:font-medium lg:text-white lg:flex hidden">Nós podemos te ajudar!</h2>

                <div className="flex md:items-center md:justify-center gap-1 md:px-6 md:py-4">
                    <div
                        className="middle flex items-center justify-center none relative h-20 w-20 rounded-full bg-emerald-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <SlBadge size={40} />
                    </div>
                    <div className="md:px-6 md:py-4 px-2 grid flex-1">
                        <h3 className="text-lg font-semibold text-white">Garantia</h3>
                        <p className="text-white">Garantia de até 1 ano em todos nossos serviços</p>
                    </div>
                </div>

                <div className="flex md:items-center md:justify-center gap-1 md:px-6 md:py-4">
                    <div
                        className="middle flex items-center justify-center none relative h-20 w-20 rounded-full bg-emerald-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <TbClockStar size={40} />
                    </div>
                    <div className="md:px-6 md:py-4 px-2 grid flex-1">
                        <h3 className="text-lg font-semibold text-white">Agilidade</h3>
                        <p className="text-white">Atendimento rápido e em domicílio</p>
                    </div>
                </div>

                <div className="flex md:items-center md:justify-center gap-1 md:px-6 md:py-4">
                    <div
                        className="middle flex items-center justify-center none relative h-20 w-20 rounded-full bg-emerald-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-white/30 transition-all hover:shadow-lg hover:shadow-white-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <PiCertificate size={43} />
                    </div>
                    <div className="md:px-6 md:py-4 px-2 grid flex-1">
                        <h3 className="text-lg font-semibold text-white">Técnicos Certificados</h3>
                        <p className="text-white">Profissionais altamente qualificados</p>
                    </div>
                </div>


            </div>
            {/* <div className="grid grid-cols-2 gap-5 items-center">




                <div className="grid items-center justify-center gap-5">
                    <span
                        className="middle flex items-center justify-center none relative h-20 w-20 rounded-full bg-emerald-300 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <SlBadge size={40} />
                        
                    </span>
                        <h3 className="text-lg font-medium text-gray-900">Garantia de 1 ano</h3>
                </div>


                <div className="grid items-center justify-center gap-5">
                    <span
                        className="middle flex items-center justify-center none relative h-20 w-20 rounded-full bg-emerald-300 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <LuShieldCheck size={40} />
                        
                    </span>
                        <h3 className="text-lg font-medium text-gray-900">Agilidade</h3>
                </div>


                <div className="grid items-center justify-center gap-5">
                    <span
                        className="middle flex items-center justify-center none relative h-20 w-20 rounded-full bg-emerald-300 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <TbClockStar size={40} />
                        
                    </span>
                        <h3 className="text-lg font-medium text-gray-900">Agilidade</h3>
                </div>


                <div className="grid items-center justify-center gap-5">
                    <span
                        className="middle flex items-center justify-center none relative h-20 w-20 rounded-full bg-emerald-300 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <MdOutlineLocalLaundryService size={40} />
                        
                    </span>
                        <h3 className="text-lg font-medium text-gray-900">Agilidade</h3>
                </div>


                <div className="grid items-center justify-center gap-5">
                    <span
                        className="middle flex items-center justify-center none relative h-20 w-20 rounded-full bg-emerald-300 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <LuRefrigerator size={40} />
                        
                    </span>
                        <h3 className="text-lg font-medium text-gray-900">Agilidade</h3>
                </div>




            </div> */}

    </div>
</div>

</section>

)
}