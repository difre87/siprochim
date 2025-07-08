"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const BgAlimentaire = () => {
  return (
    <section className="w-full md:min-h-screen sm:bg-[url('/assets/alimentaire/bg-alimentaire.jpg')] md:bg-[url('/assets/alimentaire/bg-alimentaire.jpg')]  bg-cover bg-center bg-no-repeat relative sm:h-[300px] ">
      <div className="sm:hidden md:block absolute bottom-0 left-0 right-0 h-80 bg-[url('/assets/alimentaire/home-planche.png')] bg-center bg-cover">
        <div className="w-full  h-[400px]  flex justify-between absolute bottom-58 bottom-64">
          <div className="flex items-end justify-end h-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                ease: "linear",
                duration: 1.5,
              }}
              className="w-[250px] h-[400px] relative"
            >
              <Image
                src="/assets/alimentaire/home/new/1.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                ease: "linear",
                duration: 1.5,
              }}
              className="w-[200px] h-[320px] relative -ml-16"
            >
              <Image
                src="/assets/alimentaire/home/new/2.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                ease: "linear",
                duration: 1.5,
              }}
              className="w-[200px] h-[320px] relative -ml-16"
            >
              <Image
                src="/assets/alimentaire/home/new/3.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </motion.div>
          </div>
          <div className="flex  items-end justify-end   h-full flex-row-reverse">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                ease: "linear",
                duration: 1.5,
              }}
              className="w-[200px] h-[400px] relative"
            >
              <Image
                src="/assets/alimentaire/home/new/6.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                ease: "linear",
                duration: 1.5,
              }}
              className="w-[200px] h-[320px] relative  -mr-16"
            >
              <Image
                src="/assets/alimentaire/home/new/5.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                ease: "linear",
                duration: 1.5,
              }}
              className="w-[200px] h-[320px] relative -mr-16"
            >
              <Image
                src="/assets/alimentaire/home/new/4.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="w-full  h-[400px] flex justify-center absolute bottom-10 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              ease: "linear",
              duration: 1.5,
            }}
            className="w-[200px] h-[320px] relative"
          >
            <Image
              src="/assets/alimentaire/home/new/7.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              ease: "linear",
              duration: 1.5,
            }}
            className="w-[200px] h-[320px] relative"
          >
            <Image
              src="/assets/alimentaire/home/new/8.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              ease: "linear",
              duration: 1.5,
            }}
            className="w-[200px] h-[320px] relative"
          >
            <Image
              src="/assets/alimentaire/home/new/9.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </motion.div>
        </div>
        <div className="w-full  h-[200px] flex justify-center items-end absolute gap-4 bottom-16 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              ease: "linear",
              duration: 1.5,
            }}
            className="w-[200px] h-[200px] relative"
          >
            <Image
              src="/assets/alimentaire/home/new/10.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              ease: "linear",
              duration: 1.5,
            }}
            className="w-[200px] h-[200px] relative"
          >
            <Image
              src="/assets/alimentaire/home/new/11.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              ease: "linear",
              duration: 1.5,
            }}
            className="w-[300px] h-[100px] relative"
          >
            <Image
              src="/assets/alimentaire/home/new/14.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              ease: "linear",
              duration: 1.5,
            }}
            className="w-[200px] h-[200px] relative"
          >
            <Image
              src="/assets/alimentaire/home/new/12.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              type: "spring",
              ease: "linear",
              duration: 1.5,
            }}
            className="w-[200px] h-[200px] relative"
          >
            <Image
              src="/assets/alimentaire/home/new/13.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BgAlimentaire;
