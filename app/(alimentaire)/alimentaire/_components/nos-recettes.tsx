"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";

const NosRecettes = () => {
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
    <section className="w-full min-h-screen bg-[#436d23] relative z-10">
      <div className="w-full min-h-[500px] bg-[#e59e01] relative z-10 pt-20 pb-36 md:px-0 sm:px-5 round-b">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-1 md:gap-x-5 sm:gap-10">
            <div className="relative overflow-hidden z-10 transition-all duration-500 hover:scale-110 hover:shadow-2xl rounded-[24px]">
              <div className="absolute left-0 right-0 py-10 px-10">
                <h1 className="text-[#2e2e72] text-6xl font-bold">
                  Nos <br /> recettes
                </h1>
              </div>

              <Image
                src="/assets/alimentaire/recettes/news/cuisiniere.webp"
                width={600}
                height={700}
                alt="recettes"
                className=""
              />
            </div>
            <div className="md:col-span-2 flex flex-col justify-between">
              <div className="w-full flex  items-center md:px-10 sm:px-0">
                {/* <p className="text-justify text-white font-regular uppercase">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus maiores officia mollitia voluptas minus rem
                  necessitatibus, distinctio totam illo! Reprehenderit
                  recusandae quos unde est impedit iusto necessitatibus laborum
                  veniam atque!
                </p> */}
              </div>
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 5000 }}
                slidesPerView={2}
                spaceBetween={10}
                className="w-full grid grid-cols-2 sm:mt-10 md:mt-0"
              >
                <SwiperSlide className="overflow-hidden rounded-[24px] relative">
                  <Link href="#">
                    <Image
                      src="/assets/alimentaire/recettes/news/1.webp"
                      width={400}
                      height={400}
                      alt="recette au poulets"
                      className="transition-all duration-500 hover:scale-110 hover:rotate-1 rounded-[24px]"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[24px]">
                  <Link href="#">
                    <Image
                      src="/assets/alimentaire/recettes/news/2.webp"
                      width={400}
                      height={400}
                      alt="recette au poulets"
                      className="transition-all duration-500 hover:scale-110 hover:rotate-1 rounded-[24px]"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[24px]">
                  <Link href="#">
                    <Image
                      src="/assets/alimentaire/recettes/news/3.webp"
                      width={400}
                      height={400}
                      alt="recette au poulets"
                      className="transition-all duration-500 hover:scale-110 hover:rotate-1 rounded-[24px]"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="overflow-hidden rounded-[24px]">
                  <Link href="#">
                    <Image
                      src="/assets/alimentaire/recettes/news/4.webp"
                      width={400}
                      height={400}
                      alt="recette au poulets"
                      className="transition-all duration-500 hover:scale-110 hover:rotate-1 rounded-[24px]"
                    />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-full flex justify-end mt-5 gap-x-10">
            <Link
              href="#"
              className="bg-[#e30613] text-white font-semibold md:text-xl sm:text-lg py-3 md:px-10 sm:px-3 rounded-2xl flex justify-center items-center transition-all duration-300 hover:bg-red-950"
            >
              Toutes nos recettes
            </Link>
            <div className="relative flex gap-x-2">
              <div
                className="w-12 h-12 border-[3px] border-white rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl group"
                onClick={clickPrev}
              >
                <ArrowLeft className="text-white w-6 h-6 group-hover:text-black" />
              </div>
              <div
                className="w-12 h-12 border-[3px] border-white rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl group"
                onClick={clickNext}
              >
                <ArrowRight className="text-white w-6 h-6 group-hover:text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosRecettes;
