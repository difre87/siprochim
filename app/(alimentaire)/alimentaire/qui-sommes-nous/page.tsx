"use client";
import Header from "@/components/header";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/footer";

const Apropos = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const clickNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const clickPrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
      <Header type="alimentaire" className="bg-[#2e2e72]" isPage />
      <section className="w-full h-screen bg-[url('/assets/alimentaire/apropos/bg.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <h1 className="uppercase text-white text-[5rem] leading-none font-bold text-center">
          à propos de <br /> sipro-chim
        </h1>
      </section>
      <section className="w-full bg-white">
        <div className="max-w-screen-xl m-auto">
          <div className="w-full grid grid-cols-2 gap-x-24">
            <div className="flex flex-col gap-y-5 py-12 px-10">
              <Image
                src={"/assets/logo.png"}
                alt="sipro-chim"
                width={450}
                height={200}
              />
              <p className="text-[#2e2e72] text-[1.2rem]">
                Notre entreprise est spécialisée dans la fabrication et la
                distribution de bien de consommation courante
              </p>
              <p className="text-[#2e2e72] text-md">
                Basées à Abidjan,
                <br />
                plus précisement dans la zone industrielle de Yopougon, nous
                possédons deux unités de production, plus de 11 marques et 3O
                produits.
              </p>
            </div>
            <div className="relative -top-36">
              <Image
                src={"/assets/alimentaire/apropos/road.png"}
                alt="sipro-chim"
                width={600}
                height={600}
                className="w-full h-full object-cover relative"
              />
              <Image
                src={"/assets/alimentaire/apropos/vehicle.png"}
                alt="sipro-chim"
                width={1500}
                height={800}
                className="absolute top-36 right-36 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pb-10">
        <div className="max-w-screen-xl m-auto px-5">
          <div className="grid grid-cols-2 gap-x-10">
            <div className="w-full flex flex-col gap-y-5">
              <Image
                src={"/assets/alimentaire/apropos/entretien.png"}
                alt="sipro-chim"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="flex flex-col gap-y-1 pl-10">
                <h3 className="uppercase text-xl text-[#2e2e72] font-bold">
                  Entretien ménager
                </h3>
                <p className="text-md text-[#2e2e72]">
                  Tout commence avec nos produits d&apos;entretien de maison,
                  nos détergents et poudres à laver.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-5">
              <Image
                src={"/assets/alimentaire/apropos/alimentaire.png"}
                alt="sipro-chim"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="flex flex-col gap-y-1 pl-10">
                <h3 className="uppercase text-xl text-[#2e2e72] font-bold">
                  Alimentaire
                </h3>
                <p className="text-md text-[#2e2e72]">
                  Nos gammes alimentaires offrent des produits variés;
                  bouillons, jus et boissons, condiments, huile et vinaigre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#2e2e72] flex justify-center py-24">
        <div className="max-w-screen-xl m-auto px-5">
          <div className="w-full grid grid-cols-3 gap-x-24">
            <div className="flex flex-col gap-y-10 text-white  items-center relative after:content[''] after:absolute after:w-1 after:h-56 after:bg-white after:top-1/4 after:-right-10">
              <h3 className="font-semibold text-4xl">
                Plus de
                <br /> 20 ans
              </h3>
              <div className="flex flex-col gap-y-5">
                <p className="text-center text-md">
                  Nous voyons le jour en 1999 avec la fabrication de détergents.
                </p>
                <p className="text-center text-md">
                  L&apos;équipe de SIPRO-CHIM fait de l&apos;innovation et de la
                  recherche une priorité.
                </p>
              </div>
            </div>
            <div className="flex flex-col  gap-y-10 text-white  items-center relative after:content[''] after:absolute after:w-1 after:h-56 after:bg-white after:top-1/4 after:-right-10">
              <h3 className="font-semibold text-4xl text-center">
                Equipements
                <br /> de qualité
              </h3>
              <div className="flex flex-col gap-y-5">
                <p className="text-center text-md">
                  Notre entreprise aux équipements ultra-modernes, répond aux
                  normes internationales et garantit des produits de qualités
                  supérieures.
                </p>
                <p className="text-center text-md">
                  Nos moyens logistiques efficaces nous permettent de distribuer
                  nos produits dans les délais et d&apos;éviter les retards de
                  livraison.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-10 text-white  items-center">
              <h3 className="font-semibold text-4xl text-center">
                Certifiés
                <br /> ISO 9001
              </h3>
              <div className="flex flex-col gap-y-5">
                <p className="text-center text-md">
                  SIPRO-CHIM est certifiée ISO 9001 version 2015 sur ses
                  activités de fabrication, vente et distribution de détergents
                  liquides, détergents en poudres, eau de javel et denrées
                  alimentaires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-10">
        <div className="max-w-screen-xl m-auto px-5">
          <div className="w-full flex flex-col gap-y-2 justify-center items-center">
            <h2 className="text-4xl text-[#2e2e72] font-bold">Notre volonté</h2>
            <span className="text-xl text-[#2e2e72]">
              Assurer des produits de qualité et des process innovants pour
              garantir la satisfaction de nos clients.
            </span>
          </div>
          <div className="w-[90%] h-[450px] relative mt-10 mx-auto">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 5000 }}
              slidesPerView={1}
              spaceBetween={10}
              className="w-full h-full"
            >
              <SwiperSlide className="overflow-hidden relative">
                <Image
                  src="/assets/alimentaire/apropos/volonte-1.png"
                  width={400}
                  height={400}
                  alt="recette au poulets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-32 right-16 flex flex-col gap-y-4 w-[500px]">
                  <h4 className="text-4xl text-[#2e2e72] font-bold">
                    Hygiène et sécurité
                  </h4>
                  <p className="text-[#2e2e72]">
                    SIPRO-CHIM veille en permanence au niveau d&apos;hygiène de
                    ses usines, ainsi qu&apos;à la santé et la sécurité de ses
                    employés. Nos installations et méthodes de travail
                    concourent à limiter au maximum notre empreinte
                    environnementale.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="overflow-hidden">
                <Image
                  src="/assets/alimentaire/apropos/volonte-2.png"
                  width={400}
                  height={400}
                  alt="recette au poulets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-32 right-16 flex flex-col gap-y-4 w-[500px]">
                  <h4 className="text-4xl text-[#2e2e72] font-bold">
                    Nos engagements
                  </h4>
                  <p className="text-[#2e2e72]">
                    Depuis sa création, SIPRO-CHIM a engagé une politique
                    volontaire d&apos;amélioration continue de la qualité de ses
                    produits et de son organisation. Chacune de nos actions vise
                    à fournir en permanence aux consommateurs des produits
                    répondant à leurs besoins et attentes.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="overflow-hidden">
                <Image
                  src="/assets/alimentaire/apropos/volonte-3.png"
                  width={400}
                  height={400}
                  alt="recette au poulets"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-32 right-16 flex flex-col gap-y-4 w-[500px]">
                  <h4 className="text-4xl text-[#2e2e72] font-bold">
                    Qualité irreprochable
                  </h4>
                  <p className="text-[#2e2e72]">
                    Nos laboratoires aux techniques de pointe permettent un
                    contrôle quotidien des plus stricts de la qualité de nos
                    produits. Par ailleurs nous avons mis en place
                    l&apos;ensemble des disposition néccessaires à
                    l&apos;évaluation et à la maitrise des dangers alimentaires.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="absolute flex gap-x-2 top-1/2 z-20 left-0 right-0">
              <div
                className="w-14 h-14 border-[4px] border-[#2e2e72] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl group absolute -left-20"
                onClick={clickPrev}
              >
                <ArrowLeft className="text-[#2e2e72] w-8 h-8 group-hover:text-black" />
              </div>
              <div
                className="w-14 h-14 absolute -right-20 border-[4px] border-[#2e2e72] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl group"
                onClick={clickNext}
              >
                <ArrowRight className="text-[#2e2e72] w-8 h-8 group-hover:text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Apropos;
