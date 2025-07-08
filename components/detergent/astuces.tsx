import AstuceItems from "./astuce-items";
import { astucesObject } from "@/data";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
// Update the path to the correct location

const Astuces = () => {
  return (
    <section className="w-full min-h-screen bg-white">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="w-full grid grid-cols-2 gap-x-10">
          <div className="h-[800px] bg-[#2478cf] rounded-xl flex justify-center items-center px-10 relative">
            <Image
              src="/assets/detergent/assouplissant-produit.png"
              width={250}
              height={300}
              alt=""
              className="absolute -top-[10%] -left-[10%]"
            />
            <div className="w-full flex flex-col justify-center items-center gap-y-10">
              <h1 className="text-5xl text-[#000061] font-bold text-center leading-[56px]">
                Les astuces & <br /> les topos à la maison
              </h1>
              <p className="text-md text-[#000061] text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                error saepe harum culpa accusamus nesciunt cum asperiores autem
                aspernatur qui, repellendus possimus deserunt suscipit, at
                quibusdam beatae molestias quis labore!
              </p>
            </div>
            <Image
              src="/assets/detergent/fleur.png"
              width={250}
              height={300}
              alt=""
              className="absolute bottom-0 right-0"
            />
            <Image
              src="/assets/detergent/Lessive-poudre-produit.png"
              width={200}
              height={300}
              alt=""
              className="absolute bottom-0 right-0"
            />
          </div>
          <div className="flex w-full flex-col">
            <div className="w-full  py-5">
              <Carousel className="w-full">
                <CarouselContent className="w-full">
                  {astucesObject.map((astuce) => (
                    <CarouselItem key={astuce.id} className="basis-1/5 ">
                      <AstuceItems label={astuce.label} icon={astuce.icon} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-y-4">
                <Image
                  src="/assets/detergent/astuce-1.jpg"
                  width={700}
                  height={600}
                  alt="astuce"
                  className="rounded-2xl"
                />
                <div className="w-full flex flex-col">
                  <h4 className="text-sm font-semibold text-[#343378]">
                    Fiches Thématiques
                  </h4>
                  <p className="text-md text-[#343378]">
                    Comment choisir et associer ses produits d&apos;entretien ?
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <Image
                  src="/assets/detergent/astuce-2.jpg"
                  width={700}
                  height={600}
                  alt="astuce"
                  className="rounded-2xl"
                />
                <div className="w-full flex flex-col">
                  <h4 className="text-sm font-semibold text-[#343378]">
                    Fiches Thématiques
                  </h4>
                  <p className="text-md text-[#343378]">
                    les bienfaits de nos produits et votre qualité de vie
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <Image
                  src="/assets/detergent/astuce-3.jpg"
                  width={700}
                  height={600}
                  alt="astuce"
                  className="rounded-2xl"
                />
                <div className="w-full flex flex-col">
                  <h4 className="text-sm font-semibold text-[#343378]">
                    Fiches Thématiques
                  </h4>
                  <p className="text-md text-[#343378]">
                    les bienfaits de nos produits et votre qualité de vie
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <Image
                  src="/assets/detergent/astuce-4.jpg"
                  width={700}
                  height={600}
                  alt="astuce"
                  className="rounded-2xl"
                />
                <div className="w-full flex flex-col">
                  <h4 className="text-sm font-semibold text-[#343378]">
                    Fiches Thématiques
                  </h4>
                  <p className="text-md text-[#343378]">
                    Commeny appliquer et bien doser le javel et l&apos;eau ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Astuces;
