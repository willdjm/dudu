import { MdOutlineLocalLaundryService } from "react-icons/md";
import { TbWashMachine } from "react-icons/tb";
import { LuRefrigerator } from "react-icons/lu"

export function Pecas() {

    return (
    
    <section className="bg-green-50">
    <div id="sobre" className="max-w-7xl mx-auto py-5 px-2 lg:py-5 lg:px-8">
    
        <div className="mt-8 lg:mt-20">
        <p className="flex mb-5 items-center justify-center text-3xl md:hidden text-emerald-500 font-medium">
    Peças Originais!
    </p>            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="rounded-lg">
    <picture>
        <img src="./pec.png" alt="" />
    </picture>
                </div>
                <div className="flex flex-col items-start justify-start text-emerald-500 px-4">
    <p className="md:text-3xl lg:text-5xl md:flex md:items-center md:justify-center hidden">
    Peças Originais!
    </p>
    <p className="text-xl text-justify md:mt-10">
    É nisso que acreditamos...
    Trabalhar sem sentir que está trabalhando e, por consequência, fechar os melhores negócios da sua vida.
    Afinal de contas, toda grande decisão também envolve um pouco de emoção, e se for pro seu cliente lembrar de você, que seja com as melhores emoções possíveis!
    </p>
    <div className="md:flex hidden w-full items-center justify-center md:mt-5 gap-10">

                    <span
                        className="middle flex items-center justify-center none relative h-24 w-24 rounded-full bg-emerald-400 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <MdOutlineLocalLaundryService size={60} />
                        
                    </span>


                    <span
                        className="middle flex items-center justify-center none relative h-28 w-28 rounded-full bg-emerald-400 text-center uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <LuRefrigerator size={70} />
                        
                    </span>

                    <span
                        className="middle flex items-center justify-center none relative h-24 w-24 rounded-full bg-emerald-400 text-center font-sans text-xs font-medium uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        <TbWashMachine size={60} />
                        
                    </span>


    </div>
    
                </div>

            </div>
        </div>
    </div>
    
    </section>
    
    )
    }