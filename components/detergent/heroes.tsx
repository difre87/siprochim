//import Link from "next/link";
import Image from "next/image";
import { QuoteIcon } from "lucide-react";

const Heroes = () => {
  return (
    <section className="w-full relative py-20 flex justify-between px-20">
      <div className="relative w-[600px]">
        <Image
          src="/assets/detergent/vague.png"
          width={1000}
          height={500}
          alt=""
          className="position absolute -bottom-10 -left-52 z-10"
        />
        <Image
          src="/assets/detergent/panier.png"
          width={350}
          height={500}
          alt=""
          className="position absolute bottom-32 left-0"
        />
        <Image
          src="/assets/detergent/detergent-prod.png"
          width={600}
          height={500}
          alt=""
          className="absolute bottom-0 left-0 z-20"
        />
      </div>
      <div className="w-[400px] flex flex-col items-center">
        <h1 className="text-5xl text-[#313076] font-bold text-center mb-5">
          Ressentez la fraicheur
        </h1>
        <p className="text-md text-[#313076] text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsa
          dolores incidunt. Iusto, et. Molestiae a dolorem explicabo natus.
        </p>
      </div>
      <div className="relative w-[500px] mt-32">
        <div className="flex gap-x-3 items-center">
          <div className="w-11 h-11 rounded-full bg-[#313076] flex justify-center items-center">
            <QuoteIcon className="text-white" />
          </div>
          <h2 className="text-3xl text-[#313076] font-bold">
            Découvrez notre gamme <br /> de produits d&apos;entretien
          </h2>
        </div>
        <div className="w-full pl-14 my-10">
          <p className="text-md text-[#313076] text-jutify">
            Nous proposons une variété de produits d&apos;entretien adaptés à
            tous vos besoins. Chaque produit est conçu pour offrir efficacité
            et sécurité dans votre quotidien.
          </p>
        </div>
        <div className="w-full pl-14 grid grid-cols-2 gap-x-10">
          <div className="flex flex-col">
            <h4 className="text-lg text-[#313076] font-bold">
              Produits Ecologiques
            </h4>
            <p className="text-sm text-[#313076] text-jutify py-2">
              Des solutions respectueuses de l&apos;environnement pour un
              ménage impécable.
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-lg text-[#313076] font-bold">
              Efficacité Maximale
            </h4>
            <p className="text-sm text-[#313076] text-jutify py-2">
              Des formules puissantes pour éliminer les tâches et désinfecter
              en profondeur.
            </p>
          </div>
        </div>
        {/* <div className="flex pl-14 mt-5">
          <Link
            href="#"
            className="bg-[#313076] text-white text-md rounded-lg px-5 py-3 transition-all duration-500 hover:bg-white hover:text-[#313076] hover:drop-shadow-lg"
          >
            En savoir plus
          </Link>
        </div> */}
      </div>


    </section>
  );
};

export default Heroes;
