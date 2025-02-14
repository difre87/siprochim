"use client";

import Link from "next/link";
import Title from "./title";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroesBouillon = () => {
  return (
    <section className="w-full min-h-screen bg-[#e5bd83]">
      <div className="w-full max-w-screen-xl mx-auto">
        <Image
          src="/assets/plateau.png"
          width={1000}
          height={400}
          alt="sipro-chim"
          className="mx-auto relative -top-20"
        />

        <div className="w-full max-w-screen-xl mx-auto">
          <Title
            label="Nos produits"
            subtitle="Bouillons"
            otherclass="text-center"
          />
        </div>
        <div className="w-full max-w-screen-xl mx-auto relative">
          <div className="absolute bg-red-400  left-0 right-0 top-[50%] z-10">
            <div className="w-16 h-16 border-[5px] border-white rounded-full flex justify-center items-center cursor-pointer absolute -left-24 transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl hover:-left-28 group">
              <ArrowLeft className="text-white w-12 h-12 group-hover:text-black" />
            </div>
            <div className="w-16 h-16 border-[5px] border-white rounded-full flex justify-center items-center cursor-pointer absolute -right-24 transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl hover:-right-28 group">
              <ArrowRight className="text-white w-12 h-12 group-hover:text-black" />
            </div>
          </div>
          <div className="w-full grid md:grid-cols-4 sm:grid-cols-1 sm:px-14 md:px-0 gap-10 py-10 ">
            <Link
              href="#"
              className="transition-all duration-500 group hover:scale-110"
            >
              <motion.div
                initial={{ transform: "translateX(-100px)", opacity: 0 }}
                whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                transition={{ type: "spring", ease: "linear", duration: 1.5 }}
                className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-b-gray.png')] bg-cover bg-no-repeat relative"
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <Image
                    src="/assets/alimentaire/produits/p-9.png"
                    width={130}
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
                className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-b-yellow.png')] bg-cover bg-no-repeat relative"
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <Image
                    src="/assets/alimentaire/produits/p-10.png"
                    width={130}
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
                transition={{ type: "spring", ease: "linear", duration: 2.5 }}
                className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-b-brown.png')] bg-cover bg-no-repeat relative"
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <Image
                    src="/assets/alimentaire/produits/p-11.png"
                    width={130}
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
                className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-b-red.png')] bg-cover bg-no-repeat relative"
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <Image
                    src="/assets/alimentaire/produits/p-12.png"
                    width={200}
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
    </section>
  );
};

export default HeroesBouillon;
