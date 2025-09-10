import Image from "next/image";
import Link from "next/link";
import Heroes from "./heroes";
import Nav from "./nav";
import ThreeBubbles from "./threeBubbles";


const Header = () => {
  return (
    <section className="w-full relative bg-detergent z-40">
      <Image
        src="/assets/detergent/cloud.webp"
        className="w-full h-full absolute left-0 right-0 -bottom-0 "
        width={1000}
        height={500}
        alt="cloud"
      />

      <div className="w-full h-screen relative">
       <ThreeBubbles />
        <Nav />
        <Image
          src="/assets/detergent/profil_detergent.webp"
          width={1200}
          height={500}
          alt="detergents"
          className="absolute bottom-[1%] right-5"
        />
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="w-[600px] absolute top-[25%] flex flex-col gap-y-4">
            <h1 className="text-4xl text-[#313076] font-bold">
              Découvrez nos produits de qualité supérieur
            </h1>
            <p className="text-md text-[#313076] text-justify">
              Nous sommes fiers de vous offir une gamme variée de produits
              essentiels pour votre quotidien. Explorez notre sélection de
              produits ménagèrs et alimentaires qui allient efficacité et
              qualité.
            </p>
            <div className="flex gap-x-5">
              <Link
                href="/detergent/nos-produits"
                className="bg-[#313076] text-white text-md rounded-lg px-5 py-3 transition-all duration-500 hover:bg-white hover:text-[#313076] hover:drop-shadow-lg"
              >
                En savoir plus
              </Link>
              {/* <Link
                href="#"
                className="border-[#313076] border-[1px] text-[#313076] text-md rounded-lg px-5 py-3 transition-all duration-500 hover:bg-[#313076] hover:text-white hover:drop-shadow-lg"
              >
                En savoir plus
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <Heroes />
    </section>
  );
};

export default Header;
