import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-flip';
import './styles.css';


// import required modules
import { EffectCube, Navigation, Pagination, EffectFlip } from 'swiper/modules';

export function Fotos() {

    
  return (


<section className="md:bg-gradient-to-r bg-gradient-to-b from-emerald-400 from-10% via-green-300 via-30% to-emerald-500 to-90% ... shadow-2xl drop-shadow-md">
<div id="quality" className="max-w-7xl mx-auto pt-16  sm:px-6 lg:pt-6 ">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">



        <div className="rounded-lg overflow-hidden">
        <h2 className="text-3xl font-medium text-white">Nós podemos te ajudar!</h2>

        <div>
        <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
        </div>

        <picture>
        <img src="./24.png" alt="" className="w-full items-center justify-center flex " />
    </picture>
 
            </div>
            


            <div className="max-w-full mx-auto rounded-lg overflow-hidden flex flex-wrap justify-start px-5">
                


        <Swiper className='md:w-[35rem] w-48 rounded-3xl'
        effect={'flip'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectFlip, Navigation, Pagination]}
        loop={true}

        navigation={true}
        

      >
        <SwiperSlide className='rounded-3xl'>
          <img className='rounded-3xl' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className='rounded-3xl'>
          <img className='rounded-3xl' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className='rounded-3xl'>
          <img className='rounded-3xl' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className='rounded-3xl'>
          <img className='rounded-3xl' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>


            </div>
           


    </div>
</div>

</section>

  );
}









