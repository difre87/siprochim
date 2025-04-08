import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full min-h-screen grid lg:grid-cols-2 md:grid-cols-2 overflow-hidden sm:grid-cols-1">
      <div className="relative h-full flex flex-col gap-2 justify-center items-center bg-[url('/assets/bg-de.jpg')] bg-cover bg-center  hover:scale-105 hover:rotate-1 transition-all duration-1000">
        <div className="absolute left-0 right-0 bottom-0 top-0 bg-red-800/80">
          <div className="w-full h-full flex flex-col justify-center items-center lg:gap-3 md:gap-3 sm:gap-1">
            <h4 className="lg:text-3xl md:text-2xl sm:text-md font-medium text-white">
              Produits
            </h4>
            <h1 className="lg:text-6xl md:text-4xl sm:text-2xl font-extrabold text-white">
              d&apos;Entretien
            </h1>
            <Link
              href="/detergent"
              className="bg-red-800 lg:px-10 md:px-8 sm:px-3 lg:py-4 md:py-3 sm:py-2 font-semibold text-white rounded-full lg:text-lg md:text-md sm:text-sm"
            >
              Découvrir cet univers
            </Link>
          </div>
        </div>
      </div>
      <div className="relative h-full flex flex-col gap-2 justify-center items-center bg-[url('/assets/bg-alimentaire.jpg')] bg-cover bg-center   hover:scale-105 hover:rotate-1 transition-all duration-1000">
        <div className="absolute left-0 right-0 bottom-0 top-0 bg-blue-800/80">
          <div className="w-full h-full flex flex-col justify-center items-center  lg:gap-3 md:gap-3 sm:gap-1">
            <h4 className="lg:text-3xl md:text-2xl sm:text-md font-medium text-white">
              Produits
            </h4>
            <h1 className="lg:text-6xl md:text-4xl sm:text-2xl font-extrabold text-white">
              Alimentaires
            </h1>
            <Link
              href="/alimentaire"
              className="bg-blue-800  lg:px-10 md:px-8 sm:px-3 lg:py-4 md:py-3 sm:py-2 font-semibold text-white rounded-full lg:text-lg md:text-md sm:text-sm"
            >
              Découvrir cet univers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
