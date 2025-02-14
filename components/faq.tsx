import Image from "next/image";

interface FaqProps {
  page: string;
}

const Faq = ({ page = "alimentaire" }: FaqProps) => {
  return (
    <section className="w-full min-h-screen relative bg-[url('/assets/faq/planche.png')] bg-center bg-cover">
      <div className="w-full h-full grid md:grid-cols-2 sm:grid-cols-1">
        <div className=" flex justify-end flex-col z-40 relative">
          <Image
            src={"/assets/faq/produit.png"}
            width={1500}
            height={800}
            alt="siprochim"
            className="absolute z-20 bottom-0"
          />
          <Image
            src={"/assets/faq/famille.png"}
            width={900}
            height={500}
            alt="siprochim"
            className="absolute z-10 "
          />
        </div>
        <div className="flex flex-col px-20 justify-center gap-y-5">
          <h1 className="text-5xl uppercase text-[#3d88ff] font-bold">FAQ</h1>
          <p className="text-[#34347e] text-md">
            Découvrez les réponses aux questions les plus fréquentes concernant
            nos produits et services.
          </p>
          <div className="w-full border-[2px] border-[#cbe3d6] rounded-lg p-5">
            <h4 className="text-[#34347e] font-semibold text-lg py-4">
              Quels produits proposez-vous ?
            </h4>
            <p className="text-sm text-justify text-[#34347e]">
              Nous proposons une large gamme de produits, y compris des produits
              de nettoyage, des détergents et des aliments. Nos articles
              incluent des bouillons, des jus, des condiments, ainsi que des
              huiles et vinaigres. Chaque produits est conçu pour répondre à vos
              besoins quotidiens.
            </p>
          </div>
          <div className="w-full border-[2px] border-[#cbe3d6] rounded-lg p-5">
            <h4 className="text-[#34347e] font-semibold text-lg py-4">
              Quels produits proposez-vous ?
            </h4>
            <p className="text-sm text-justify text-[#34347e]">
              Nous proposons une large gamme de produits, y compris des produits
              de nettoyage, des détergents et des aliments. Nos articles
              incluent des bouillons, des jus, des condiments, ainsi que des
              huiles et vinaigres. Chaque produits est conçu pour répondre à vos
              besoins quotidiens.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="absolute left-0 right-0 bottom-0 top-0 bg-black/10">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="w-full grid grid-cols-2">
            <div></div>
            <div className="flex flex-col justify-center py-20 gap-y-10">

            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Faq;
