import { TbClockStar } from "react-icons/tb";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { LuShieldCheck, LuRefrigerator } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";



export function Qualidade() {

return (

<section className="md:bg-gradient-to-r bg-gradient-to-b from-emerald-400 from-10% via-green-300 via-30% to-emerald-500 to-90% ... shadow-2xl drop-shadow-md">
<div id="quality" className="max-w-7xl mx-auto pt-16  sm:px-6 lg:pt-6 ">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">



        <div className="rounded-lg overflow-hidden">
        <picture>
        <img src="./24.png" alt="" className="w-full items-center justify-center flex " />
    </picture>
 
            </div>
            


            <div className="max-w-full mx-auto rounded-lg overflow-hidden flex flex-wrap justify-start px-5">
                
        <h2 className="text-3xl font-medium text-white">Nós podemos te ajudar!</h2>

                <div className="flex items-center justify-center px-6 py-4">
                    <div
                        className="middle flex items-center justify-center none relative h-20 w-20 rounded-full bg-emerald-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <SlBadge size={40} />
                    </div>
                    <div className="px-3 py-4">
                        <h3 className="text-lg font-semibold text-white">Garantia</h3>
                        <p className="mt-1 text-white">Garantia de até 1 ano em todos nossos serviços</p>
                    </div>
                </div>

                <div className="flex items-center justify-center px-6 py-4">
                    <div
                        className="middle flex items-center justify-center none relative h-20 w-20 rounded-full bg-emerald-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <TbClockStar size={40} />
                    </div>
                    <div className="px-3 py-4">
                        <h3 className="text-lg font-semibold text-white">Agilidade</h3>
                        <p className="mt-1 text-white">Atendimento rápido e em domicílio</p>
                    </div>
                </div>

                <div className="flex items-center justify-center px-6 py-4">
                    <div
                        className="middle flex items-center justify-center none relative h-20 w-20 rounded-full bg-emerald-500 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-white/30 transition-all hover:shadow-lg hover:shadow-white-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <PiCertificate size={43} />
                    </div>
                    <div className="px-3 py-4">
                        <h3 className="text-lg font-semibold text-white">Técnicos Certificados</h3>
                        <p className="mt-1 text-white">Profissionais altamente qualificados</p>
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