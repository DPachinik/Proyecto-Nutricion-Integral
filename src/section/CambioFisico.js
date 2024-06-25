import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper/modules';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import 'swiper/css/effect-fade';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import adelgazamiento from "../imagenes/adelgazamiento.jpg";
import calidadvida from "../imagenes/calidadvida.jpg";
import hipertrofia from "../imagenes/hipertrofia.jpg";
import performance from "../imagenes/performance.jpg";

register();

const CambioFisico = () => {
  const diapositivas = [
    { id: '1', image: adelgazamiento },
    { id: '2', image: calidadvida },
    { id: '3', image: hipertrofia },
    { id: '4', image: performance },
  ];

  return (
    <div className="m-[50px]">
      <h1 className="flex text-white justify-center text-center pb-10 text-[20px] md:text-[40px] font-semibold ">
        Cambios Fisicos de algunos de mis pacientes
      </h1>
      <Swiper
        modules={[EffectFade,Navigation, Pagination, Scrollbar, A11y]}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {diapositivas.map((items) => (
          <SwiperSlide key={items.id}>
            <div className="flex items-center justify-center w-full h-[400px]">
              <img
                src={items.image}
                alt="foto cambio fisico"
                className="object-cover w-100% h-100% shadow-lg shadow-amber-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CambioFisico;
