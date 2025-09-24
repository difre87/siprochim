"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const BgAlimentaire = () => {
  return (
    <section className="w-full md:min-h-screen sm:bg-[url('/assets/alimentaire/home/news/tournesol.webp')] md:bg-[url('/assets/alimentaire/home/news/tournesol.webp')]  bg-cover bg-center bg-no-repeat relative sm:h-[300px] ">
      <div className="sm:hidden md:block absolute bottom-0 left-0 right-0 h-80 bg-[url('/assets/alimentaire/home/news/SUPPORT.webp')] bg-center bg-cover">
        <div className="w-full h-[400px]  flex justify-between absolute bottom-58 bottom-64">
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
                src="/assets/alimentaire/home/news/AROMATE_Huile_de_Tournesol 3L.webp"
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
                src="/assets/alimentaire/home/news/AROMATE_MayonnaiseSauce_Burger_350ml NLOGO.webp"
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
                src="/assets/alimentaire/home/news/AROMATE_Mayonnaise_Sauce_Barbecue_350ml NLOGO.webp"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </motion.div>
          </div>

          <div className="w-full h-[400px] flex items-end justify-center absolute bottom-0 left-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "spring",
                ease: "linear",
                duration: 1.5,
              }}
              className="w-[160px] h-[300px] relative"
            >
              <Image
                src="/assets/alimentaire/home/news/Rectangle_1.webp"
                fill
                alt="SIPROCHIM"
                objectFit="contain"
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
              className="w-[200px] h-[300px] relative -mx-8"
            >
              <Image
                src="/assets/alimentaire/home/news/Rectangle_7 copie.webp"
                fill
                alt="SIPROCHIM"
                objectFit="contain"
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
              className="w-[160px] h-[300px] relative"
            >
              <Image
                src="/assets/alimentaire/home/news/Rectangle_2.webp"
                fill
                alt="SIPROCHIM"
                objectFit="contain"
              />
            </motion.div>
          </div>

          <div className="flex  items-end justify-end h-full flex-row-reverse">
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
                src="/assets/alimentaire/home/news/AROMATE_Vinaigre_Blanc_0.9L.webp"
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
                src="/assets/alimentaire/home/news/AROMATE_Mayonnaise_Squeeze_Poivre_350ml.webp"
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
                src="/assets/alimentaire/home/news/AROMATE_Mayonnaise_Squeeze_Olive_350ml.webp"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </motion.div>
          </div>
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
              src="/assets/alimentaire/home/news/AROMATE_Poulet-Sachet-75g_nvo.webp"
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
              src="/assets/alimentaire/home/news/AROMATE_Tomate-Sachet-75g_nvo.webp"
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
              src="/assets/alimentaire/home/news/AROMATE-Tomate_Stick-10g.webp"
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
              src="/assets/alimentaire/home/news/AROMATE_Crevette-Sachet-75g_nvo.webp"
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
              src="/assets/alimentaire/home/news/AROMATE_Piment-Sachet-75g_nvo.webp"
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
