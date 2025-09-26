"use client";

import Link from "next/link";
import Title from "./title";
import Image from "next/image";
//import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroesBouillon = () => {
  return (
    <section className="w-full min-h-screen relative bg-[#e5bd83] ">
      <div className="w-full max-w-screen-xl relative mx-auto ">
        <div className="w-full min-h-[500px]  z-30 overflow-hidden ">
          <div className="w-full relative h-full">
            <Image
              src="/assets/alimentaire/plateau-2.png"
              width={1000}
              height={600}
              alt="sipro-chim"
              className="mx-auto  absolute left-[10%]"
            />
          </div>
          <Image
            src="/assets/alimentaire/produits/p-9.png"
            width={250}
            height={250}
            alt="siprochim"
            className="absolute z-20 -rotate-[30deg] left-[14%] transition-all duration-500 hover:scale-110"
          />
          <Image
            src="/assets/alimentaire/produits/p-10.png"
            width={250}
            height={250}
            alt="siprochim"
            className="absolute z-20 transform left-[40%] -top-[10%] transition-all duration-500 hover:scale-110"
          />
          <Image
            src="/assets/alimentaire/produits/p-12.png"
            width={350}
            height={250}
            alt="siprochim"
            className="absolute z-20 transform left-[36%] top-[25%] transition-all duration-500 hover:scale-110"
          />
          <Image
            src="/assets/alimentaire/produits/p-11.png"
            width={250}
            height={250}
            alt="siprochim"
            className="absolute  z-20 rotate-[30deg] right-[15%] transition-all duration-500 hover:scale-110"
          />
        </div>

        <div className="w-full max-w-screen-xl mx-auto">
          <Title
            label="Nos produits"
            subtitle="Bouillons"
            otherclass="text-center"
          />
        </div>
        <div className="w-full max-w-screen-xl mx-auto relative">
          <div className="w-full grid md:grid-cols-4 sm:grid-cols-1 sm:px-14 md:px-0 gap-10 py-10 ">
            <Link
              href="/alimentaire/produit/aromate-poulet-sachet-50g"
              className="transition-all duration-500 group hover:scale-110"
            >
              <motion.div
                initial={{ transform: "translateX(-100px)", opacity: 0 }}
                whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                transition={{ type: "spring", ease: "linear", duration: 1.5 }}
                className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-poulet.png')] bg-cover bg-no-repeat relative"
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <Image
                    src="/assets/alimentaire/produits/news/AROMATE_Poulet-Sachet-75g_nvo.webp"
                    width={300}
                    height={250}
                    alt="siprochim"
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                </div>
              </motion.div>
            </Link>
            <Link
              href="/alimentaire/produit/aromate-epices-sachet-50g"
              className="transition-all duration-500 group hover:scale-110"
            >
              <motion.div
                initial={{ transform: "translateX(-100px)", opacity: 0 }}
                whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                transition={{ type: "spring", ease: "linear", duration: 2 }}
                className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-epice.jpg')] bg-cover bg-no-repeat relative"
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <Image
                    src="/assets/alimentaire/produits/epice.png"
                    width={230}
                    height={250}
                    alt="siprochim"
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                </div>
              </motion.div>
            </Link>
            <Link
              href="/alimentaire/produit/aromate-crevette-sachet-50g"
              className="transition-all duration-500 group hover:scale-110"
            >
              <motion.div
                initial={{ transform: "translateX(-100px)", opacity: 0 }}
                whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                transition={{ type: "spring", ease: "linear", duration: 2.5 }}
                className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-crevette.png')] bg-cover bg-no-repeat relative"
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <Image
                    src="/assets/alimentaire/produits/news/AROMATE_Crevette-Sachet-75g_nvo.webp"
                    width={300}
                    height={250}
                    alt="siprochim"
                    className="group-hover:scale-125 transition-all duration-500"
                  />
                </div>
              </motion.div>
            </Link>
            <Link
              href="/alimentaire/produit/aromate-tomate-sachet-50g"
              className="transition-all duration-500 group hover:scale-110"
            >
              <motion.div
                initial={{ transform: "translateX(-100px)", opacity: 0 }}
                whileInView={{ transform: "translateX(0px)", opacity: 1 }}
                transition={{ type: "spring", ease: "linear", duration: 3 }}
                className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-tomate.png')] bg-cover bg-no-repeat relative"
              >
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <Image
                    src="/assets/alimentaire/produits/news/AROMATE_Tomate-Sachet-75g_nvo.webp"
                    width={300}
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
