import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css'
import { Navigation } from 'swiper/modules';

import { FaWhatsapp, FaRegClock } from "react-icons/fa";
import { BsGeoAltFill } from "react-icons/bs";

export function Fotos() {

return (

<section className="bg-emerald-500">
<div id="contato" className="max-w-7xl mx-auto py-5 px-2 lg:py-20 lg:px-8">

    <div className="mt-16 lg:mt-20">
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
            <Swiper 
      navigation={true} 
      modules={[Navigation]}
      loop={true}  
      >
        <SwiperSlide>
        <picture>
            <img id="6" src="./serv.png" alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img id="6" src="./serv2.png" alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img id="6" src="./serv3.png" alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img id="6" src="./serv4.png" alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img id="6" src="./serv5.png" alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img id="6" src="./serv6.png" alt="slider" />
          </picture>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    </div>
</div>

</section>

)
}