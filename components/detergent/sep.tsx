import Link from "next/link";

const Sep = () => {
  return (
    <section className="w-full min-h-[400px] py-20 bg-white">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="w-[700px] mx-auto flex flex-col justify-center items-center">
          <div className="w-full flex flex-col gap-y-5 items-center py-10">
            <h1 className="text-5xl text-[#313076] font-bold">
              Expert de la désinfection
            </h1>
            <p className="text-md text-[#313076] text-center">
              Depuis 25 ans, SIPRO-CHIM vous accompagne en vous proposant des
              gammes complètes de produits d&apos;entretien pour faciliter votre
              quotidien.
            </p>
          </div>
          <div className="w-full flex justify-center items-center gap-x-5">
            <Link
              href="#"
              className="bg-[#313076] text-white text-md rounded-lg px-5 py-3"
            >
              En savoir plus
            </Link>
            <Link
              href="#"
              className="border-[#313076] border-[1px] text-[#313076] text-md rounded-lg px-5 py-3"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sep;
