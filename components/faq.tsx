import Image from "next/image";

interface FaqProps {
  page: string;
}

const Faq = ({ page = "alimentaire" }: FaqProps) => {
  return (
    <section
      className={`w-full h-screen relative ${
        page == "alimentaire"
          ? "bg-[url('/assets/faq/planche.png')]"
          : "bg-[url('/assets/detergent/bg-faq-det.png')]"
      } bg-center bg-cover`}
    >
      {page == "detergent" && (
        <Image
          src="/assets/detergent/faq-det-table.png"
          width={1000}
          height={200}
          alt="siprochim"
          className="absolute z-10 bottom-0 left-0 right-0 w-full h-[180px]"
        />
      )}

      <div className="w-full h-full 2xl:h-full grid md:grid-cols-2 lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-2 sm:flex sm:flex-col-reverse sm:py-5 md:py-0">
        <div className="flex justify-end flex-col z-40 md:relative lg:relative 2xl:relative">
          <Image
            src={`${
              page == "alimentaire"
                ? "/assets/faq/produit.png"
                : "/assets/detergent/faq-det-2.png"
            }`}
            width={page === "alimentaire" ? 1500 : 1000}
            height={800}
            alt="siprochim"
            className={`absolute   ${
              page == "alimentaire" ? "bottom-0 z-20" : "bottom-36"
            }`}
          />
          <Image
            src={`${
              page == "alimentaire"
                ? "/assets/faq/famille.png"
                : "/assets/detergent/faq-det-1.png"
            }`}
            width={page === "alimentaire" ? 900 : 320}
            height={500}
            alt="siprochim"
            className={`absolute z-10 bottom-0 ${
              page == "detergent" && " left-48"
            }`}
          />
        </div>
        <div className="flex flex-col md:px-20 sm:px-10 lg:h-full 2xl:h-full  justify-center gap-y-5 relative z-40">
          <h1 className="md:text-5xl sm:text-3xl uppercase text-[#3d88ff] font-bold">
            FAQ
          </h1>
          <p className="text-[#34347e] md:text-md sm:text-sm">
            Découvrez les réponses aux questions les plus fréquentes concernant
            nos produits et services.
          </p>
          <div className="w-full border-[2px] border-[#cbe3d6] rounded-lg md:p-5 sm:p-2">
            <h4 className="text-[#34347e] font-semibold md:text-lg sm:text-md py-4">
              Quels produits proposez-vous ?
            </h4>
            <p className="md:text-sm sm:text-[12px] text-justify text-[#34347e]">
              Nous proposons une large gamme de produits, y compris des produits
              de nettoyage, des détergents et des aliments. Nos articles
              incluent des bouillons, des jus, des condiments, ainsi que des
              huiles et vinaigres. Chaque produits est conçu pour répondre à vos
              besoins quotidiens.
            </p>
          </div>
          <div className="w-full border-[2px] border-[#cbe3d6] rounded-lg md:p-5 sm:p-2">
            <h4 className="text-[#34347e] font-semibold  md:text-md sm:text-sm py-4">
              Quels produits proposez-vous ?
            </h4>
            <p className="md:text-sm sm:text-[12px] text-justify text-[#34347e]">
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
