"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonies = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 5000 }}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      }}
      slidesPerView={1}
      className="md:w-[800px] sm:w-full mx-auto"
    >
      <SwiperSlide>
        <div className="w-full flex flex-col gap-y-8">
          <p className="text-lg text-white text-center">
            Les produits de cette entreprise ont transformé notre quotidien.
            Nous ne pourrions plus nous en passer !
          </p>
          <div className="flex justify-center gap-x-8">
            <div className="flex gap-x-4">
              <Image
                src="/assets/user.png"
                width={50}
                height={50}
                alt=""
                className="rounded-full"
              />
              <div className="flex flex-col justify-center">
                <h4 className="text-white font-semibold text-sm">
                  Esther Howard
                </h4>
                <span className="text-sm text-white">
                  Directrice, Maison verte
                </span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full flex flex-col gap-y-8">
          <p className="text-lg text-white text-center">
            Les produits de cette entreprise ont transformé notre quotidien.
            Nous ne pourrions plus nous en passer!
          </p>
          <div className="flex justify-center gap-x-8">
            <div className="flex gap-x-4">
              <Image
                src="/assets/manager.png"
                width={50}
                height={50}
                alt=""
                className="rounded-full"
              />
              <div className="flex flex-col justify-center">
                <h4 className="text-white font-semibold text-sm">
                  Nahomi Konan
                </h4>
                <span className="text-sm text-white">Chef Cuisinier</span>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonies;
