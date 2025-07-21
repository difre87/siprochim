"use client";

import Image from "next/image";
import Title from "./title";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const Heroes = () => {
  return (
    <section className="w-full bg-[#a6192e]  min-h-screen  relative">
      <div className="w-full max-w-screen-xl mx-auto">
        <Title label="Nos produits préférés" otherclass="text-center" />
        <div className="w-full grid md:grid-cols-4 sm:grid-cols-1 gap-x-10 sm:gap-y-5  py-20 sm:px-14 md:px-0">
          <Link
            href="/alimentaire/produit/aromate-mayonnaise-bocal-450ml"
            className="transition-all duration-500 group hover:scale-110"
          >
            <motion.div
              initial={{ transform: "translateX(-100px)", opacity: 0 }}
              whileInView={{ transform: "translateX(0px)", opacity: 1 }}
              transition={{ type: "spring", ease: "linear", duration: 1.5 }}
              className="h-96 rounded-md cursor-pointer bg-[url('/assets/alimentaire/produits/bg-green.png')] bg-cover bg-no-repeat relative transition-all duration-300 hover:shadow-2xl"
            >
              <div className="w-full h-full flex flex-col justify-center items-center">
                <Image
                  src="/assets/alimentaire/produits/p-1.png"
                  width={100}
                  height={250}
                  alt="siprochim"
                  className="group-hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="w-full py-3 bg-black/20 absolute bottom-0 flex justify-center items-center text-center">
                <h3 className="font-bold uppercase text-2xl text-white">
                  Aromate
                </h3>
              </div>
            </motion.div>
          </Link>
          <Link
            href="/alimentaire/produit/mia-mayonnaise-450ml"
            className="transition-all duration-500 group hover:scale-110"
          >
            <motion.div
              initial={{ transform: "translateX(-100px)", opacity: 0 }}
              whileInView={{ transform: "translateX(0px)", opacity: 1 }}
              transition={{ type: "spring", ease: "linear", duration: 2 }}
              className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-indigo-1.png')] bg-cover bg-no-repeat relative"
            >
              <div className="w-full h-full flex flex-col justify-center items-center">
                <Image
                  src="/assets/alimentaire/produits/p-2.png"
                  width={110}
                  height={250}
                  alt="siprochim"
                  className="group-hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="w-full py-3 bg-black/20 absolute bottom-0 flex justify-center items-center text-center">
                <h3 className="font-bold uppercase text-2xl text-white">Mia</h3>
              </div>
            </motion.div>
          </Link>
          <Link
            href="/alimentaire/produit/top-mayo-mayonnaise-250ml"
            className="transition-all duration-500 group hover:scale-110"
          >
            <motion.div
              initial={{ transform: "translateX(-100px)", opacity: 0 }}
              whileInView={{ transform: "translateX(0px)", opacity: 1 }}
              transition={{ type: "spring", ease: "linear", duration: 2.5 }}
              className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-indigo-2.png')] bg-cover bg-no-repeat relative"
            >
              <div className="w-full h-full flex flex-col justify-center items-center">
                <Image
                  src="/assets/alimentaire/produits/p-3.png"
                  width={100}
                  height={250}
                  alt="siprochim"
                  className="group-hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="w-full py-3 bg-black/20 absolute bottom-0 flex justify-center items-center text-center">
                <h3 className="font-bold uppercase text-2xl text-white">
                  Top mayo
                </h3>
              </div>
            </motion.div>
          </Link>
          <Link
            href="/alimentaire/produit/aromate-mayo-25ml"
            className="transition-all duration-500 group hover:scale-110"
          >
            <motion.div
              initial={{ transform: "translateX(-100px)", opacity: 0 }}
              whileInView={{ transform: "translateX(0px)", opacity: 1 }}
              transition={{ type: "spring", ease: "linear", duration: 3 }}
              className="h-96 rounded-md bg-[url('/assets/alimentaire/produits/bg-gray.png')] bg-cover bg-no-repeat relative"
            >
              <div className="w-full h-full flex flex-col justify-center items-center">
                <Image
                  src="/assets/alimentaire/produits/p-4.png"
                  width={100}
                  height={250}
                  alt="siprochim"
                  className="group-hover:scale-125 transition-all duration-500"
                />
              </div>
              <div className="w-full py-3 bg-black/20 absolute bottom-0 flex justify-center items-center text-center">
                <h3 className="font-bold uppercase text-2xl text-white">
                  Aromate
                </h3>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ left: 0, x: -50, opacity: 0 }}
          whileInView={{ left: 1, x: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 1.5, type: "easeInOut" }}
          className="w-full"
        >
          <Image
            src="/assets/woman-eat-burger.png"
            width={1200}
            height={1500}
            alt="woman eat"
            className="mx-auto relative md:top-[5px] sm:-top-16"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Heroes;
