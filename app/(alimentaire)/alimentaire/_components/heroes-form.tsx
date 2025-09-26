"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const HeroesForm = () => {
  return (
    <section className="w-full h-screen  bg-[#ffb81c] round md:-mt-40 sm:-mt-32 sm:px-10 md:px-0 sm:py-20 md:py-0 mt-40  relative z-10">
      <motion.div className="md:w-[600px] lg:w-[600px] lg:h-[700px] xl:w-[900px] xl:h-[800px] 2xl:w-[900px] 2xl:h-[1000px]  absolute -left-56 2xl:-left-56 2xl:-top-20 z-20">
        <Image
          src="/assets/planche-de-poulet.webp"
          fill
          objectFit="contain"
          alt="sipro-chim"
          className=""
        />
      </motion.div>
      <div className="w-full max-w-screen-xl mx-auto flex justify-end items-center h-full">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "esaeaseInOut",
            ease: "linear",
            duration: 1.5,
          }}
          className="md:w-[600px] sm:w-full flex flex-col gap-y-6 justify-center h-full"
        >
          <h1 className="md:text-6xl sm:text-4xl font-bold text-white uppercase leading-none ">
            Restez au
            <h4 className="uppercase text-white md:text-6xl sm:text-4xl font-bold">Courant!</h4>
          </h1>
          <p className="text-white md:text-lg sm:text-sm font-light leading-7">
            Recevez nos recettes, astuces et
            inspirations gourmandes directement
            dans votre boîte mail.
            De nouvelles idées simples et
            savoureuses pour égayer vos repas
            et surprendre vos proches.Un
            rendez-vous culinaire à ne pas
            manquer.
          </p>

          <div className="w-full flex flex-col">
            <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 gap-5 mb-5">
              <div className="relative flex flex-col">
                <Label className="text-white uppercase text-lg pl-2 pb-2">
                  Nom
                </Label>
                <Input className="bg-white h-14 border-none rounded-[24px]" />
              </div>
              <div className="relative flex flex-col">
                <Label className="text-white uppercase text-lg pl-2 pb-2">
                  Prénoms
                </Label>
                <Input className="bg-white h-14 border-none rounded-[24px] outline-0" />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <Label className="text-white uppercase text-lg pl-2 pb-2">
                Email
              </Label>
              <Input type="email" className="bg-white h-14 border-none rounded-[24px] outline-0" />
            </div>
          </div>
          <div className="flex">
            <Link
              href="#"
              className="bg-red-800 font-semibold text-white px-10 py-4 rounded-full transition-all duration-300 hover:bg-red-950 hover:shadow-2xl sm:w-full sm:text-center"
            >
              Envoyer
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroesForm;
