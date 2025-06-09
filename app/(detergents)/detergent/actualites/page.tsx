"use client";
import Header from "@/components/header";
import Image from "next/image";

import Footer from "@/components/footer";
import Link from "next/link";

const Apropos = () => {
  return (
    <>
      <Header type="detergent" className="bg-[#2e2e72]" isPage />
      <section className="w-full h-screen bg-[url('/assets/alimentaire/apropos/bg.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <h1 className="uppercase text-white text-[5rem] leading-none font-bold text-center">
          Actualités
        </h1>
      </section>

      <section className="w-full py-20">
        <div className="max-w-screen-xl m-auto px-5">
          <div className="grid grid-cols-2 gap-10">
            <div className="w-full flex flex-col gap-y-5">
              <Image
                src={"/assets/alimentaire/actualites/1.png"}
                alt="sipro-chim"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="flex justify-between items-center gap-y-1">
                <div className="flex flex-col w-2/3">
                  <h3 className="uppercase text-xl text-[#2e2e72] font-bold">
                    Entretien ménager
                  </h3>
                  <p className="text-sm text-[#2e2e72]">
                    Tout commence avec nos produits d&apos;entretien de maison,
                    nos détergents et poudres à laver.
                  </p>
                </div>
                <Link
                  href={"#"}
                  className="bg-red-600 rounded-full w-1/2 h-10 text-white flex justify-center items-center font-semibold uppercase transition-all hover:bg-red-700"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-5">
              <Image
                src={"/assets/alimentaire/actualites/2.png"}
                alt="sipro-chim"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="flex justify-between items-center gap-y-1">
                <div className="flex flex-col w-2/3">
                  <h3 className="uppercase text-xl text-[#2e2e72] font-bold">
                    Entretien ménager
                  </h3>
                  <p className="text-sm text-[#2e2e72]">
                    Tout commence avec nos produits d&apos;entretien de maison,
                    nos détergents et poudres à laver.
                  </p>
                </div>
                <Link
                  href={"#"}
                  className="bg-red-600 rounded-full w-1/2 h-10 text-white flex justify-center items-center font-semibold uppercase transition-all hover:bg-red-700"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-5">
              <Image
                src={"/assets/alimentaire/actualites/3.png"}
                alt="sipro-chim"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="flex justify-between items-center gap-y-1">
                <div className="flex flex-col w-2/3">
                  <h3 className="uppercase text-xl text-[#2e2e72] font-bold">
                    Entretien ménager
                  </h3>
                  <p className="text-sm text-[#2e2e72]">
                    Tout commence avec nos produits d&apos;entretien de maison,
                    nos détergents et poudres à laver.
                  </p>
                </div>
                <Link
                  href={"#"}
                  className="bg-red-600 rounded-full w-1/2 h-10 text-white flex justify-center items-center font-semibold uppercase transition-all hover:bg-red-700"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-5">
              <Image
                src={"/assets/alimentaire/actualites/4.png"}
                alt="sipro-chim"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="flex justify-between items-center gap-y-1">
                <div className="flex flex-col w-2/3">
                  <h3 className="uppercase text-xl text-[#2e2e72] font-bold">
                    Entretien ménager
                  </h3>
                  <p className="text-sm text-[#2e2e72]">
                    Tout commence avec nos produits d&apos;entretien de maison,
                    nos détergents et poudres à laver.
                  </p>
                </div>
                <Link
                  href={"#"}
                  className="bg-red-600 rounded-full w-1/2 h-10 text-white flex justify-center items-center font-semibold uppercase transition-all hover:bg-red-700"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer isPage />
    </>
  );
};

export default Apropos;
