"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Title from "./title";
import { motion } from "framer-motion";
import Link from "next/link";
import "animate.css";

const HeroesAromate = () => {
  return (
    <>
      <section className="w-full min-h-screen relative bg-[#e5bd83] ">
        <div className="round-b w-full min-h-[500px]  bg-bamboo">
          {/* <div className="w-full max-w-screen-xl mx-auto">
            <div className="w-full flex items-end justify-center py-20">
              <Image
                src="/assets/alimentaire/aromate/aromate-logo.png"
                width={250}
                height={100}
                alt="aromate logo siprochim"
              />
            </div>
          </div> */}

          {/*   <div className="w-full min-h-[500px] relative flex md:block sm:hidden">
                <div className="w-[600px] h-[600px] absolute top-20 left-0">
                <Image
                    src={"/assets/alimentaire/aromate/aromate.png"}
                    fill
                    objectFit="contain"
                    alt="aromate"
                    className="animate__animated animate__pulse animate__infinite animate__slow"
                />
                </div>
                <div className="w-[250px] h-[250px] absolute top-[36rem] left-52">
                <Image
                    src={"/assets/alimentaire/aromate/tournesol.png"}
                    fill
                    objectFit="contain"
                    alt="aromate"
                    className="animate__animated animate__pulse animate__infinite animate__slow"
                />
                </div>
                <div className="w-[100px] h-[100px] absolute top-20 right-32">
                <Image
                    src={"/assets/alimentaire/aromate/ail-2.png"}
                    fill
                    objectFit="contain"
                    alt="aromate"
                    className="animate__animated animate__pulse animate__infinite animate__slow"
                />
                </div>
                <div className="w-[100px] h-[100px] absolute top-36 right-36">
                <Image
                    src={"/assets/alimentaire/aromate/ail-1.png"}
                    fill
                    objectFit="contain"
                    alt="aromate"
                    className="animate__animated animate__pulse animate__infinite animate__slow"
                />
                </div>
                <div className="w-[200px] h-[200px] absolute top-10 -right-20">
                <Image
                    src={"/assets/alimentaire/aromate/poivre.png"}
                    fill
                    objectFit="contain"
                    alt="aromate"
                    className="animate__animated animate__pulse animate__infinite animate__slow"
                />
                </div>
                <div className="w-[300px] h-[300px] absolute top-52 right-10">
                <Image
                    src={"/assets/alimentaire/aromate/tomates.png"}
                    fill
                    objectFit="contain"
                    alt="aromate"
                    className="animate__animated animate__pulse animate__infinite animate__slow"
                />
                </div>
                <div className="w-[350px] h-[300px] absolute top-[26rem] right-10">
                <Image
                    src={"/assets/alimentaire/aromate/bouillon-stick.png"}
                    fill
                    objectFit="contain"
                    alt="aromate"
                    className="animate__animated animate__pulse animate__infinite animate__slow"
                />
                </div>
                <div className="w-[400px] h-[400px] absolute top-[36rem] right-40">
                <Image
                    src={"/assets/alimentaire/aromate/bouillon.png"}
                    fill
                    objectFit="contain"
                    alt="aromate"
                    className="animate__animated animate__pulse animate__infinite animate__slow"
                />
                </div>
            </div>

          {/* <div className="w-full min-h-full relative"></div> */}

          <div className="min-h-[600px] w-full bg-gradient-to-t from-[#70b83a] from-50% relative  to-[transparent] py-32  md:round-b md:pb-56 sm:pb-10">
            <div className="w-full relative flex md:block sm:hidden">
              <div className="w-[300px] h-[300px] absolute  left-0">
                <Image
                  src={"/assets/alimentaire/aromate/aromate.png"}
                  fill
                  objectFit="contain"
                  alt="aromate"
                  className="animate__animated animate__pulse animate__infinite animate__slow"
                />
              </div>
              <div className="w-[150px] h-[150px] absolute top-[36rem] left-52">
                <Image
                  src={"/assets/alimentaire/aromate/tournesol.png"}
                  fill
                  objectFit="contain"
                  alt="aromate"
                  className="animate__animated animate__pulse animate__infinite animate__slow"
                />
              </div>
              {/* <div className="w-[50px] h-[50px] absolute top-[20rem] right-32">
                <Image
                  src={"/assets/alimentaire/aromate/ail-2.png"}
                  fill
                  objectFit="contain"
                  alt="aromate"
                  className="animate__animated animate__pulse animate__infinite animate__slow"
                />
              </div>
              <div className="w-[50px] h-[50px] absolute top-[20rem] right-36">
                <Image
                  src={"/assets/alimentaire/aromate/ail-1.png"}
                  fill
                  objectFit="contain"
                  alt="aromate"
                  className="animate__animated animate__pulse animate__infinite animate__slow"
                />
              </div> */}
              <div className="w-[180px] h-[180px] absolute bottom-0 -right-20">
                <Image
                  src={"/assets/alimentaire/aromate/poivre.png"}
                  fill
                  objectFit="contain"
                  alt="aromate"
                  className="animate__animated animate__pulse animate__infinite animate__slow"
                />
              </div>
              {/* <div className="w-[150px] h-[150px] absolute top-36 right-10">
                <Image
                  src={"/assets/alimentaire/aromate/tomates.png"}
                  fill
                  objectFit="contain"
                  alt="aromate"
                  className="animate__animated animate__pulse animate__infinite animate__slow"
                />
              </div> */}
              <div className="w-[200px] h-[200px] absolute top-[36rem] right-10">
                <Image
                  src={"/assets/alimentaire/aromate/bouillon-stick.png"}
                  fill
                  objectFit="contain"
                  alt="aromate"
                  className="animate__animated animate__pulse animate__infinite animate__slow"
                />
              </div>
              <div className="w-[300px] h-[300px] absolute  right-40">
                <Image
                  src={"/assets/alimentaire/aromate/bouillon.png"}
                  fill
                  objectFit="contain"
                  alt="aromate"
                  className="animate__animated animate__pulse animate__infinite animate__slow"
                />
              </div>
            </div>
            <div className="w-full max-w-screen-xl mx-auto relative sm:px-14 md:px-0">
              <Title
                label="Nos produits"
                subtitle="Aromate"
                otherclass="text-center"
              />
            </div>
            <div className="w-full max-w-screen-xl mx-auto relative">
              <div className="absolute bg-red-400  left-0 right-0 top-[50%] z-10">
                <div className="w-16 h-16 border-[5px] border-white rounded-full flex justify-center items-center cursor-pointer absolute -left-24 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-left-28 hover:bg-white group">
                  <ArrowLeft className="text-white w-12 h-12 group-hover:text-black" />
                </div>
                <div className="w-16 h-16 border-[5px] border-white rounded-full flex justify-center items-center cursor-pointer absolute -right-24 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:-right-28 hover:bg-white group">
                  <ArrowRight className="text-white w-12 h-12 group-hover:text-black" />
                </div>
              </div>
              <div className="w-full grid md:grid-cols-4 sm:grid-cols-1 sm:px-14 md:py-0 gap-10 py-20 ">
                <Link
                  href="#"
                  className="transition-all duration-500 group hover:scale-110"
                >
                  <motion.div
                    initial={{ transform: "translateX(-100px)", opacity: 0 }}
                    whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{
                      type: "spring",
                      ease: "linear",
                      duration: 1.5,
                    }}
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-red.png')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/p-5.png"
                        width={220}
                        height={250}
                        alt="siprochim"
                        className="group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                </Link>
                <Link
                  href="#"
                  className="transition-all duration-500 group hover:scale-110"
                >
                  <motion.div
                    initial={{ transform: "translateX(-100px)", opacity: 0 }}
                    whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{ type: "spring", ease: "linear", duration: 2 }}
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-white.png')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/p-6.png"
                        width={220}
                        height={250}
                        alt="siprochim"
                        className="group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                </Link>
                <Link
                  href="#"
                  className="transition-all duration-500 group hover:scale-110"
                >
                  <motion.div
                    initial={{ transform: "translateX(-100px)", opacity: 0 }}
                    whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{ type: "spring", ease: "linear", duration: 3 }}
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-gray-black.png')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/p-7.png"
                        width={220}
                        height={250}
                        alt="siprochim"
                        className="group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                </Link>
                <Link
                  href="#"
                  className="transition-all duration-500 group hover:scale-110"
                >
                  <motion.div
                    initial={{ transform: "translateX(-100px)", opacity: 0 }}
                    whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{
                      type: "spring",
                      ease: "linear",
                      duration: 3.5,
                    }}
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-brown.png')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/p-8.png"
                        width={220}
                        height={250}
                        alt="siprochim"
                        className="group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroesAromate;
