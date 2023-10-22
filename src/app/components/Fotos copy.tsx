// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css'
// import required modules
import { Navigation } from 'swiper/modules';

export function Fotos() {
  return (

<section className="md:bg-gradient-to-r bg-gradient-to-b from-emerald-400 from-10% via-green-300 via-30% to-emerald-500 to-90%... shadow-2xl drop-shadow-md">
<div id="quality" className="max-w-7xl mx-auto pt-16 sm:px-6 lg:pt-6 ">

        <div className="grid md:grid-cols-2 gap-8 items-center">



        <div className="rounded-lg ">
        <picture>
        <img src="./24.png" alt="" className="w-full items-center justify-center flex " />
    </picture>
 
            </div>
            


            <div >
                
            <Swiper 
      navigation={true} 
      modules={[Navigation]}
      loop={true}  
      >
        <SwiperSlide>
        <picture>
            <img id="6" src="./serv2.png" alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img id="6" src="./serv2.png" alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img id="6" src="./serv2.png" alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img id="6" src="./serv2.png" alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide>
        <picture>
            <img id="6" src="./serv2.png" alt="slider" />
          </picture>
        </SwiperSlide>
      </Swiper>


            </div>
           
    </div>
</div>

</section>











  );
}
