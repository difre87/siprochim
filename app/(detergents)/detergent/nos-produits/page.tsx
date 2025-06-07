"use client";
import Header from "@/components/header";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/footer";
import { ProduitDetergent } from "@/data";

const NosProduits = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const clickNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const clickPrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <Header type="detergent" className="bg-[#2e2e72]" isPage />
      <section className="w-full h-screen bg-[url('/assets/detergent/produits/bg.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center"></section>

      <section className="w-full py-20">
        <div className="max-w-screen-xl m-auto px-5">
          <div className="w-full relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={7}
              spaceBetween={50}
              className="w-full h-full flex"
            >
              {ProduitDetergent.map((product) => (
                <SwiperSlide
                  key={product.id}
                  className="flex flex-col gap-y-2 justify-center items-center cursor-pointer group"
                >
                  <Image
                    src={product.imageUrl}
                    width={300}
                    height={300}
                    alt={product.title}
                    className=" group-hover:scale-110 transition-all ease-in-out"
                  />
                  <h4 className="uppercase text-[#2e2e72] font-bold text-center mt-4">
                    {product.title}
                  </h4>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute flex gap-x-2 top-1/3 z-20 left-0 right-0">
              <div
                className="w-14 h-14 border-[4px] border-[#2e2e72] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl group absolute -left-20"
                onClick={clickPrev}
              >
                <ArrowLeft className="text-[#2e2e72] w-8 h-8 group-hover:text-black" />
              </div>
              <div
                className="w-14 h-14 absolute -right-20 border-[4px] border-[#2e2e72] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl group"
                onClick={clickNext}
              >
                <ArrowRight className="text-[#2e2e72] w-8 h-8 group-hover:text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-[500px] bg-[#00a1cf] py-20"></section>
      <Footer isPage />
    </>
  );
};

export default NosProduits;
