import Image from "next/image";
//import Link from "next/link";

const Product = () => {
  return (
    <section className="w-full min-h-[500px] bg-white py-32">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="w-full grid grid-cols-3 gap-x-8">
          <div className="bg-[#313076] rounded-[12px] flex flex-col items-center justify-between p-10 h-96 gap-y-5 group">
            <Image
              src="/assets/detergent/pour-la-maison.png"
              width={350}
              height={300}
              alt="detergents"
              className="-mt-48 transition-all duration-500 group-hover:scale-110"
            />
            <div className="w-full flex justify-center items-center flex-col -mt-32 gap-y-5">
              <h1 className="text-4xl text-white font-bold -mt-64">Pour la maison</h1>
              <p className="text-white text-sm text-center">
                Des solutions simples et efficaces pour un nettoyage complet de
                votre maison. Pour toutes les surfaces, pour tous vos besoins.
              </p>
              {/* <Link
                href="#"
                className="bg-white p-3 text-[#313076] font-semibold rounded-md transition-all duration-300 hover:bg-[#c83d38] hover:text-white"
              >
                Pour la maison
              </Link> */}
            </div>
          </div>
          <div className="bg-[#c83d38] rounded-[12px] flex flex-col items-center justify-between p-10 h-96 gap-y-5 group">
            <Image
              src="/assets/detergent/pour-la-vaiselle.png"
              width={450}
              height={300}
              alt="detergents"
              className="-mt-44 transition-all duration-500 group-hover:scale-110"
            />
            <div className="w-full flex justify-center items-center flex-col -mt-24 gap-y-5">
              <h1 className="text-4xl text-white font-bold -mt-64">
                Pour la vaisselle
              </h1>
              <p className="text-white text-md text-center">
                Des solutions pratiques et efficaces pour le nettoyage de votre
                vaiselle adorée.
              </p>

              {/* <Link
                href="#"
                className="bg-[#313076] p-3 text-white font-semibold rounded-md transition-all duration-300 hover:bg-white hover:text-[#313076] hover:drop-shadow-lg"
              >
                Pour la vaisselle
              </Link> */}
            </div>
          </div>
          <div className="bg-[#2ba3da] rounded-[12px] flex flex-col items-center justify-between p-10 h-96 gap-y-5 group">
            <Image
              src="/assets/detergent/pour-le-linge.png"
              width={300}
              height={300}
              alt="detergents"
              className="-mt-52 transition-all duration-500 group-hover:scale-110"
            />
            <div className="w-full flex justify-center items-center flex-col -mt-12 gap-y-5 ">
              <h1 className="text-4xl text-white font-bold -mt-56">Pour le linge</h1>
              <p className="text-white text-md text-center">
                Des solutions pour éliminer les mauvaises odeurs et prendre soin
                de votre linge.
              </p>
              {/* <Link
                href="#"
                className="bg-[#313076] p-3 text-white font-semibold rounded-md transition-all duration-300 hover:bg-white hover:text-[#313076] hover:drop-shadow-lg group-hover:scale-120"
              >
                Pour le linge
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="w-full grid grid-cols-2 gap-x-10 py-20">
          <div className="flex flex-col gap-y-5">
            <h1 className="text-5xl text-[#313076] font-bold">
              La garantie hygiène
            </h1>
            <p className="text-md text-[#313076] text-justify">
              Depuis plus de 20 ans déjà, SIPRO-CHIM, l&apos;expert de produits
              désinfectant vous propose une gamme innovante de produits destinés
              à l&lsquo;hygiène de la maison, du linge et des mains.
            </p>
            {/* <Link
              href="#"
              className="bg-[#313076] p-4 text-white font-semibold rounded-md w-52 text-center transition-all duration-300 hover:bg-[#c83d38] hover:text-white  hover:drop-shadow-lg"
            >
              En savoir plus
            </Link> */}
          </div>
          <div className="grid grid-cols-4 gap-x-4">
            <div className="flex flex-col items-center gap-y-3">
              <Image
                src="/assets/detergent/elimine-microbe.png"
                width={100}
                height={100}
                alt="elimine les microbes"
              />
              <div className="w-full flex flex-col items-center justify-center">
                <h4 className="text-xl text-[#313076] font-bold leading-none">
                  ELimine
                </h4>
                <span className="text-lg text-[#313076]">les microbes</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-3">
              <Image
                src="/assets/detergent/nettoie-profondeur.png"
                width={100}
                height={100}
                alt="elimine les microbes"
              />
              <div className="w-full flex flex-col items-center justify-center">
                <h4 className="text-xl text-[#313076] font-bold leading-none">
                  Nettoie
                </h4>
                <span className="text-lg text-[#313076]">en profondeur</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-3">
              <Image
                src="/assets/detergent/testé-labo.png"
                width={100}
                height={100}
                alt="elimine les microbes"
              />
              <div className="w-full flex flex-col items-center justify-center">
                <h4 className="text-xl text-[#313076] font-bold leading-none">
                  Testé
                </h4>
                <span className="text-lg text-[#313076]">en laboratoire</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-3">
              <Image
                src="/assets/detergent/respect-formule.png"
                width={110}
                height={100}
                alt="elimine les microbes"
              />
              <div className="w-full flex flex-col items-center justify-center">
                <h4 className="text-xl text-[#313076] font-bold leading-none">
                  Des formules
                </h4>
                <span className="text-lg text-[#313076]">respectueuses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
