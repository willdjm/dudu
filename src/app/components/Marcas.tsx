import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from 'swiper/element/bundle'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


register();

export function Marcas() {

const [slidePreview, setSlidePreview] = useState(4)

useEffect(() => {

function handleResize() {
  if (window.innerWidth < 720) {
    setSlidePreview(2);
  }
  else {
    setSlidePreview(5);
  }
}
handleResize();

window.addEventListener("resize", handleResize)

return () => {

  window.removeEventListener("resize", handleResize)
}
}, [])

return (

<section className="bg-emerald-50 ">
  <div id="marcas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20 ">
    <div className='md:w-full flex flex-wrap items-start justify-between py-5'>

    <div className="w-full items-center flex ">
    <span className="text-emerald-500 flex items-center justify-center w-max font-semibold text-2xl mr-4"> Nossas marcas</span>

    <span className="relative flex h-3 w-3">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
</span>

    <span className="flex flex-1 items-center w-full bg-gradient-to-r rounded-2xl from-green-500 h-0.5"/>
     
      </div>      
       <Swiper className="h-44 flex items-center justify-center"
        loop={true}
        slidesPerView={slidePreview}
        grabCursor={true}
        spaceBetween={30}
        autoplay
        pagination
        speed={200}

        
        >
        <SwiperSlide key='1'>
          <picture>
            <img id="1" src='./marcas/samsung.png' alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide key='2'>
          <picture>
            <img id="2" src='./marcas/consul.png' alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide key='3'>
          <picture>
            <img id="3" src='./marcas/brastemp.png' alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide key='4'>
          <picture>
            <img id="4" src='./marcas/electrolux.png' alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide key='5'>
          <picture>
            <img id="6" src='./marcas/panasonic.png' alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide key='6'>
          <picture>
            <img id="6" src='./marcas/lg.png' alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide key='7'>
          <picture>
            <img id="7" src='./marcas/dako.png' alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide key='8'>
          <picture>
            <img id="8" src='./marcas/continental.png' alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide key='9'>
          <picture>
            <img id="9" src='./marcas/bosch.png' alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide key='10'>
          <picture>
            <img id="10" src='./marcas/ge.png' alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide key='11'>
          <picture>
            <img id="11" src='./marcas/colomaq.png' alt="slider" />
          </picture>
        </SwiperSlide>
        <SwiperSlide key='12'>
          <picture>
            <img id="12" src='./marcas/mabe.png' alt="slider" />
          </picture>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</section>
)
}