"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const SaveurInedite = () => {
  return (
    <section className="w-full h-screen  relative">
       <Image
          src="/assets/alimentaire/saveurs/tranche-de-tomate.png"
          width={200}
          height={500}
          alt="siprochim"
          className="absolute left-[5%] -top-[15%] z-20"
        />
      <div className="w-full h-full round-b bg-[#436d23]">

        <Image
          src="/assets/alimentaire/saveurs/oignons.png"
          width={550}
          height={500}
          alt="siprochim"
          className="absolute -right-[10%] bottom-0"
        />
        <Image
          src="/assets/alimentaire/saveurs/ail.png"
          width={100}
          height={500}
          alt="siprochim"
          className="absolute left-[5%] bottom-[8%]"
        />
        <div className="w-full h-full max-w-screen-xl mx-auto sm:px-10 md:px-0">
          <div className="w-full h-full md:flex md:justify-center md:items-center sm:grid sm:grid-cols-1 gap-x-5">
            <div className="flex justify-center  flex-col gap-y-2 md:w-[400px] sm:w-full md:h-full">
              <h1 className="md:text-6xl sm:text-4xl text-white uppercase font-bold">
                Des
                <br /> saveurs
              </h1>
              <h4 className="text-white md:text-6xl sm:text-4xl uppercase font-bold">
                Inédites
              </h4>
              <p className="text-white md:text-md sm:text-sm text-justify mt-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dignissimos ea sint cumque perspiciatis voluptatem quaerat nobis
                porro, doloribus possimus debitis voluptatum corrupti, tempora
                rerum nesciunt ex enim eveniet, cum exercitationem!
              </p>
            </div>
            <div className="w-full h-[300px] relative sm:block md:hidden lg:hidden 2xl:hidden">
              <Image
                src={"/assets/alimentaire/saveurs.png"}
                fill
                objectFit="contain"
                alt="saveur"
              />
            </div>
            <div className="flex-1 h-full px-5 md:flex  md:justify-end lg:justify-end 2xl:justify-end items-center relative sm:hidden">
              <motion.div
                initial={{ right: 0, rotate: 0, opacity: 1 }}
                whileInView={{ opacity: 1, right: "38rem", rotate: -55 }}
                transition={{
                  type: "spring",
                  ease: "linear",
                  duration: 1.5,
                }}
                className="w-[300px] h-[200px] absolute right-[38rem] -rotate-[55deg] mt-96"
              >
                <Image
                  src={"/assets/alimentaire/saveurs/1.png"}
                  fill
                  objectFit="contain"
                  alt="siprochim"
                />
              </motion.div>
              <motion.div
                initial={{ right: 0, rotate: 0, opacity: 1 }}
                whileInView={{ opacity: 1, right: "35rem", rotate: -45 }}
                transition={{
                  type: "spring",
                  ease: "linear",
                  duration: 1.5,
                }}
                className="w-[300px] h-[200px] absolute right-[35rem] -rotate-[45deg] mt-72"
              >
                <Image
                  src={"/assets/alimentaire/saveurs/2.png"}
                  fill
                  objectFit="contain"
                  alt="siprochim"
                />
              </motion.div>
              <motion.div
                initial={{ right: 0, rotate: 0, opacity: 1 }}
                whileInView={{ opacity: 1, right: "32rem", rotate: -36 }}
                transition={{
                  type: "spring",
                  ease: "linear",
                  duration: 1.5,
                }}
                className="w-[300px] h-[220px] absolute right-[32rem] -rotate-[36deg] mt-56"
              >
                <Image
                  src={"/assets/alimentaire/saveurs/3.png"}
                  fill
                  objectFit="contain"
                  alt="siprochim"
                />
              </motion.div>
              <motion.div
                initial={{ right: 0, rotate: 0, opacity: 1 }}
                whileInView={{ opacity: 1, right: "28rem", rotate: -33 }}
                transition={{
                  type: "spring",
                  ease: "linear",
                  duration: 1.5,
                }}
                className="w-[300px] h-[240px] absolute right-[28rem] -rotate-[33deg] mt-40"
              >
                <Image
                  src={"/assets/alimentaire/saveurs/4.png"}
                  fill
                  objectFit="contain"
                  alt="siprochim"
                />
              </motion.div>
              <motion.div
                initial={{ right: 0, rotate: 0, opacity: 1 }}
                whileInView={{ opacity: 1, right: "24rem", rotate: -28 }}
                transition={{
                  type: "spring",
                  ease: "linear",
                  duration: 1.5,
                }}
                className="w-[300px] h-[250px] absolute right-[24rem] -rotate-[28deg] mt-32"
              >
                <Image
                  src={"/assets/alimentaire/saveurs/5.png"}
                  fill
                  objectFit="contain"
                  alt="siprochim"
                />
              </motion.div>
              <motion.div
                initial={{ right: 0, rotate: 0, opacity: 1 }}
                whileInView={{ opacity: 1, right: "20rem", rotate: -20 }}
                transition={{
                  type: "spring",
                  ease: "linear",
                  duration: 1.5,
                }}
                className="w-[300px] h-[300px] absolute right-[20rem] -rotate-[22deg] mt-20"
              >
                <Image
                  src={"/assets/alimentaire/saveurs/6.png"}
                  fill
                  objectFit="contain"
                  alt="siprochim"
                />
              </motion.div>
              <motion.div
                initial={{ right: 0, rotate: 0, opacity: 1 }}
                whileInView={{ opacity: 1, right: "15rem", rotate: -20 }}
                transition={{
                  type: "spring",
                  ease: "linear",
                  duration: 1.5,
                }}
                className="w-[300px] h-[350px] absolute right-[15rem] -rotate-[20deg]"
              >
                <Image
                  src={"/assets/alimentaire/saveurs/7.png"}
                  fill
                  objectFit="contain"
                  alt="siprochim"
                />
              </motion.div>
              <motion.div
                initial={{ right: 0, rotate: 0, opacity: 1 }}
                whileInView={{ opacity: 1, right: "12rem" }}
                transition={{
                  type: "spring",
                  ease: "linear",
                  duration: 1.5,
                }}
                className="w-[200px] h-[400px] absolute right-[12rem]"
              >
                <Image
                  src={"/assets/alimentaire/saveurs/8.png"}
                  fill
                  objectFit="contain"
                  alt="siprochim"
                />
              </motion.div>
              <motion.div
                initial={{ right: 0, rotate: 0, opacity: 1 }}
                whileInView={{ opacity: 1, rotate: 20 }}
                transition={{
                  type: "spring",
                  ease: "linear",
                  duration: 1.5,
                }}
                className="w-[300px] h-[500px] absolute rotate-[20deg]"
              >
                <Image
                  src={"/assets/alimentaire/saveurs/9.png"}
                  fill
                  objectFit="contain"
                  alt="siprochim"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveurInedite;
