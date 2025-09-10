"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Mayonnaise = () => {
  return (
    <section className="w-full min-h-screen relative bg-[#a31227] py-20 sm:px-5 md:px-0">
      <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 md:gap-x-32 sm:gap-10">
        <motion.div
          initial={{ transform: "translateX(-100px)", opacity: 0 }}
          whileInView={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ type: "spring", ease: "linear", duration: 2 }}
          className="md:min-h-[450px] sm:h-[300px] bg-[url('/assets/alimentaire/mayonnaise/news/planche-1.webp')] bg-cover bg-center bg-no-repeat md:rounded-r-[100px] flex items-center justify-center relative"
        >
          <div className="w-full grid grid-cols-2">
            <div className="flex flex-col h-full gap-y-4">
              <div className="flex justify-end w-full">
                <Image
                  src={"/assets/alimentaire/mayonnaise/news/logo_mia.webp"}
                  width={100}
                  height={100}
                  alt="mayonnaise mia"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h1 className="text-white md:text-3xl sm:text-xl font-semibold text-right">
                  Mayonnaise
                  <br /> Mia
                </h1>
                <p className="text-white md:text-sm sm:text-[12px] text-right">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt laborum saepe itaque velit ipsum sit aliquam pariatur
                </p>
                <div className="w-full flex justify-end">
                  <Link
                    href="/alimentaire/nos-produits?category=mia"
                    className="bg-[#e30613] rounded-full md:py-3 sm:py-2 px-5 transition-all duration-500 text-white font-medium hover:bg-[#b8050f]"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:block md:hidden">
              <Image
                src={"/assets/alimentaire/mayonnaise/news/mia.webp"}
                width={200}
                height={400}
                alt="mayonnaise mia"
                className="absolute -right-8 bottom-5"
              />
            </div>
            <Image
              src={"/assets/alimentaire/mayonnaise/news/mia.webp"}
              width={400}
              height={400}
              alt="mayonnaise mia"
              className="absolute -right-16 -top-10 md:block sm:hidden"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ transform: "translateX(100px)", opacity: 0 }}
          whileInView={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ type: "spring", ease: "linear", duration: 2.5 }}
          className="md:min-h-[450px] z-10 sm:h-[300px] bg-[url('/assets/alimentaire/mayonnaise/news/planche-2.webp')] bg-cover bg-center bg-no-repeat md:rounded-l-[100px]  flex items-center justify-center relative"
        >
          <Image
            src={"/assets/alimentaire/mayonnaise/news/top_mayo.webp"}
            width={400}
            height={400}
            alt="mayonnaise mia"
            className="absolute -left-[10%] -top-12  md:block sm:hidden"
          />
          <div className="sm:block md:hidden">
            <Image
              src={"/assets/alimentaire/mayonnaise/news/top_mayo.webp"}
              width={200}
              height={400}
              alt="mayonnaise mia"
              className="absolute -left-8 bottom-5"
            />
          </div>
          <div className="w-full grid grid-cols-2">
            <div></div>
            <div className="flex flex-col h-full gap-y-4">
              <div className="flex justify-start w-full">
                <Image
                  src={"/assets/alimentaire/mayonnaise/news/logo_top_mayo.webp"}
                  width={100}
                  height={100}
                  alt="mayonnaise top mayo"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h1 className="text-[#2e2e72] md:text-3xl sm:text-xl font-semibold">
                  Mayonnaise
                  <br /> top mayo
                </h1>
                <p className="text-[#2e2e72] md:text-sm sm:text-[12px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt laborum saepe itaque velit ipsum sit aliquam pariatur
                </p>
                <div className="w-full flex justify-start">
                  <Link
                    href="/alimentaire/nos-produits?category=top-mayo"
                    className="bg-[#e30613] rounded-full md:py-3 sm:py-2 px-5 transition-all duration-500 text-white font-medium hover:bg-[#b8050f]"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, right: -200 }}
        whileInView={{ opacity: 1, right: -80 }}
        transition={{ ease: "linear", duration: 1, type: "spring" }}
        className="z-10 absolute w-[700px] top-[35%]"
      >
        <Image
          src="/assets/alimentaire/mayonnaise/news/cuillere-de-mayonnaise.webp"
          width={700}
          height={300}
          alt="mayonnaise"
          className="absolute"
        />
      </motion.div>

      <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 md:gap-x-32 sm:gap-10 mt-32">
        <motion.div
          initial={{ transform: "translateX(-100px)", opacity: 0 }}
          whileInView={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ type: "spring", ease: "linear", duration: 2 }}
          className="md:min-h-[450px] sm:h-[300px] bg-[url('/assets/alimentaire/mayonnaise/news/planche-4.webp')] bg-cover bg-center bg-no-repeat md:rounded-r-[100px]  flex items-center justify-center relative"
        >
          <div className="w-full grid grid-cols-2">
            <div className="flex flex-col h-full gap-y-4">
              <div className="flex justify-end w-full">
                <Image
                  src={"/assets/alimentaire/mayonnaise/news/logo_aromate.webp"}
                  width={100}
                  height={100}
                  alt="mayonnaise santina"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h1 className="text-white md:text-3xl sm:text-xl font-semibold text-right">
                  Mayonnaise
                  <br /> Santina
                </h1>
                <p className="text-white md:text-sm sm:text-[12px] text-right">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt laborum saepe itaque velit ipsum sit aliquam pariatur
                </p>
                <div className="w-full flex justify-end">
                  <Link
                    href="/alimentaire/nos-produits?category=santina"
                    className="bg-[#e30613] rounded-full md:py-3 sm:py-2 px-5 transition-all duration-500 text-white font-medium hover:bg-[#b8050f]"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:block md:hidden">
              <Image
                src={"/assets/alimentaire/mayonnaise/news/aromate.webp"}
                width={200}
                height={400}
                alt="mayonnaise santina"
                className="absolute -right-8 bottom-5"
              />
            </div>
            <Image
              src={"/assets/alimentaire/mayonnaise/news/aromate.webp"}
              width={400}
              height={400}
              alt="mayonnaise santina"
              className="absolute -right-16 -top-10 md:block sm:hidden"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ transform: "translateX(100px)", opacity: 0 }}
          whileInView={{ transform: "translateX(0px)", opacity: 1 }}
          transition={{ type: "spring", ease: "linear", duration: 2.5 }}
          className="md:min-h-[450px] sm:h-[300px] bg-[url('/assets/alimentaire/mayonnaise/news/planche-3.webp')] bg-cover bg-center bg-no-repeat md:rounded-l-[100px] flex items-center justify-center relative"
        >
          <Image
            src={"/assets/alimentaire/mayonnaise/news/amerigo.webp"}
            width={300}
            height={400}
            alt="mayonnaise amerigo"
            className="absolute -left-20 -top-10  md:block sm:hidden"
          />
          <div className="sm:block md:hidden">
            <Image
              src={"/assets/alimentaire/mayonnaise/news/amerigo.webp"}
              width={200}
              height={400}
              alt="mayonnaise amerigo"
              className="absolute -left-8 bottom-5"
            />
          </div>
          <div className="w-full grid grid-cols-2">
            <div></div>
            <div className="flex flex-col h-full gap-y-4">
              <div className="flex justify-start w-full">
                <Image
                  src={"/assets/alimentaire/mayonnaise/news/logo_amerigo.webp"}
                  width={100}
                  height={100}
                  alt="mayonnaise amerigo"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h1 className="text-white md:text-3xl sm:text-xl font-semibold">
                  Mayonnaise
                  <br /> Amerigo
                </h1>
                <p className="text-white md:text-sm sm:text-[12px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt laborum saepe itaque velit ipsum sit aliquam pariatur
                </p>
                <div className="w-full flex justify-start">
                  <Link
                    href="/alimentaire/nos-produits?category=amerigo"
                    className="bg-[#e30613] rounded-full md:py-3 sm:py-2 px-5 transition-all duration-500 text-white font-medium hover:bg-[#b8050f]"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mayonnaise;
