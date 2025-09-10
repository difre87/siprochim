import Image from "next/image";

interface YearsProps {
  page: string;
}

const Years = ({ page = "alimentaire" }: YearsProps) => {
  return (
    <section className="w-full h-screen sm:py-20 md:py-0 sm:flex sm:flex-col bg-[url('/assets/alimentaire/years/news/planche.webp')] bg-cover bg-center bg-no-repeat relative z-10">
      <div className="h-full w-[1300px] mx-auto relative  flex justify-center items-center mt-20">
        <Image
          src={`${
            page == "alimentaire"
              ? "/assets/alimentaire/years/produit.png"
              : "/assets/detergent/year_det.webp"
          }`}
          fill
          objectFit="contain"
          alt=""
          className=""
        />
      </div>
      <div className="md:col-span-1 flex flex-col justify-center items-center gap-y-4">
        {/* <Image
          src={"/assets/logo-25-ans.png"}
          width={300}
          height={300}
          alt="siprochim 25 ans"
          className=" sm:hidden md:block"
        /> */}
        {/* <div className="w-[200px] h-[200px] sm:block md:hidden relative">
          <Image
            src={"/assets/logo-25-ans.png"}
            fill
            alt="siprochim 25 ans"
            objectFit="cover"
          />
        </div>
        <h1 className="md:text-6xl sm:text-4xl font-bold uppercase text-white -mt-10">
          De passion,
          <br /> pour vous
          <br /> servir
        </h1>

        <Link
          href={"/"}
          className="bg-[#e30613] rounded-full px-5 py-4 text-white font-medium w-[300px] text-center text-xl transition-all duration-300 hover:bg-red-700"
        >
          En savoir plus
        </Link> */}
      </div>
    </section>
  );
};

export default Years;
