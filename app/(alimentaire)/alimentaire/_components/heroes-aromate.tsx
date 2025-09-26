"use client";

//import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Title from "./title";
import { motion } from "framer-motion";
import Link from "next/link";
import "animate.css";

const HeroesAromate = () => {
  return (
    <>
      <section className="w-full min-h-screen relative bg-[#e5bd83] z-10">
        <div className="round-b w-full min-h-[500px]  bg-bamboo">
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
              <div className="w-[180px] h-[180px] absolute bottom-0 -right-20">
                <Image
                  src={"/assets/alimentaire/aromate/poivre.png"}
                  fill
                  objectFit="contain"
                  alt="aromate"
                  className="animate__animated animate__pulse animate__infinite animate__slow"
                />
              </div>
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
              <div className="w-full grid md:grid-cols-4 sm:grid-cols-1 sm:px-14 md:py-0 gap-10 py-20 ">
                <Link
                  href="/alimentaire/nos-produits/55"
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
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/news/ketchup_fond.webp')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/news/ketchup.webp"
                        width={220}
                        height={250}
                        alt="siprochim"
                        className="group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                </Link>
                <Link
                  href="/alimentaire/nos-produits/16"
                  className="transition-all duration-500 group hover:scale-110"
                >
                  <motion.div
                    initial={{ transform: "translateX(-100px)", opacity: 0 }}
                    whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{ type: "spring", ease: "linear", duration: 2 }}
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/news/ail_fond.webp')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/news/ail.webp"
                        width={220}
                        height={250}
                        alt="siprochim"
                        className="group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                </Link>
                <Link
                  href="/alimentaire/nos-produits/16"
                  className="transition-all duration-500 group hover:scale-110"
                >
                  <motion.div
                    initial={{ transform: "translateX(-100px)", opacity: 0 }}
                    whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                    transition={{ type: "spring", ease: "linear", duration: 3 }}
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/news/barbecue_fond.webp')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/news/barbecue.webp"
                        width={220}
                        height={250}
                        alt="siprochim"
                        className="group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                </Link>
                <Link
                  href="/alimentaire/nos-produits/16"
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
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/news/burger_fond.webp')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/news/burger.webp"
                        width={220}
                        height={250}
                        alt="siprochim"
                        className="group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                </Link>

                <Link
                  href="/alimentaire/nos-produits/16"
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
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/news/poivre_bg.png')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/news/AROMATE_Mayonnaise_Squeeze Poivr_ 350ml.png"
                        width={220}
                        height={250}
                        alt="siprochim"
                        className="group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                </Link>

                <Link
                  href="/alimentaire/nos-produits/16"
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
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/news/bg_tournesol.png')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/news/AROMATE_Mayonnaise_350ml.png"
                        width={220}
                        height={250}
                        alt="siprochim"
                        className="group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                </Link>

                <Link
                  href="/alimentaire/nos-produits/16"
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
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/news/bg_piment.png')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/news/AROMATE_Mayonnaise_Squeeze_Piment_350ml.png"
                        width={220}
                        height={250}
                        alt="siprochim"
                        className="group-hover:scale-125 transition-all duration-500"
                      />
                    </div>
                  </motion.div>
                </Link>

                <Link
                  href="/alimentaire/nos-produits/22"
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
                    className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/news/bg_moutarde.png')] bg-cover bg-no-repeat relative"
                  >
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <Image
                        src="/assets/alimentaire/produits/news/AROMATE_Moutarde_Squeeze_380g.png"
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
