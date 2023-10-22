import { MdOutlineLocalLaundryService } from "react-icons/md";
import { TbWashMachine } from "react-icons/tb";
import { LuRefrigerator } from "react-icons/lu"

export function Pecas() {

    return (
    
    <section className="bg-green-50">
    <div id="sobre" className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:py-5 lg:px-8">
    
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg">
    <picture>
        <img src="./pec.png" alt="" />
    </picture>
                </div>
                <div className="max-w-full mx-auto rounded-lg flex justify-start">
                    <div className="grid items-start justify-center px-6 py-4 text-emerald-500 gap-16">
    <p className="md:text-5xl flex items-center justify-center text-3xl">
    Peças Originais!
    </p>
    <p className="text-xl md:text-justify ">
    É nisso que acreditamos...
    Trabalhar sem sentir que está trabalhando e, por consequência, fechar os melhores negócios da sua vida.
    Afinal de contas, toda grande decisão também envolve um pouco de emoção, e se for pro seu cliente lembrar de você, que seja com as melhores emoções possíveis!
    </p>
    <div className="md:flex hidden w-full gap-24 items-center justify-center">
        






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
    </div>
    
    </section>
    
    )
    }