import Image from "next/image";

const SaveurInedite = () => {
  return (
    <section className="w-full h-screen bg-[#436d23]">
      <div className="w-full h-full max-w-screen-xl mx-auto sm:px-10 md:px-0">
        <div className="w-full h-full flex md:justify-center md:items-center sm:grid sm:grid-cols-1 gap-x-5">
          <div className="flex justify-center  flex-col gap-y-2 md:w-[400px] sm:w-full md:h-full">
            <h1 className="md:text-6xl sm:text-4xl text-white uppercase">
              Des
              <br /> saveurs
            </h1>
            <h4 className="text-white md:text-5xl sm:text-3xl uppercase">
              Inédites
            </h4>
            <p className="text-white md:text-md sm:text-sm text-justify mt-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos ea sint cumque perspiciatis voluptatem quaerat nobis
              porro, doloribus possimus debitis voluptatum corrupti, tempora
              rerum nesciunt ex enim eveniet, cum exercitationem!
            </p>
          </div>
          <div className="w-full h-[300px] relative sm:block md:hidden">
            <Image
              src={"/assets/alimentaire/saveurs.png"}
              fill
              objectFit="contain"
              alt="saveur"
            />
          </div>
          <div className="flex-1 h-full  px-5 flex  justify-end items-center relative md:block sm:hidden">
            <div className="w-[300px] h-[200px] absolute right-[38rem] -rotate-[55deg] mt-96">
              <Image
                src={"/assets/alimentaire/saveurs/1.png"}
                fill
                objectFit="contain"
                alt="siprochim"
              />
            </div>
            <div className="w-[300px] h-[200px] absolute right-[35rem] -rotate-[45deg] mt-72">
              <Image
                src={"/assets/alimentaire/saveurs/2.png"}
                fill
                objectFit="contain"
                alt="siprochim"
              />
            </div>
            <div className="w-[300px] h-[220px] absolute right-[32rem] -rotate-[36deg] mt-56">
              <Image
                src={"/assets/alimentaire/saveurs/3.png"}
                fill
                objectFit="contain"
                alt="siprochim"
              />
            </div>
            <div className="w-[300px] h-[240px] absolute right-[28rem] -rotate-[33deg] mt-40">
              <Image
                src={"/assets/alimentaire/saveurs/4.png"}
                fill
                objectFit="contain"
                alt="siprochim"
              />
            </div>
            <div className="w-[300px] h-[250px] absolute right-[24rem] -rotate-[28deg] mt-32">
              <Image
                src={"/assets/alimentaire/saveurs/5.png"}
                fill
                objectFit="contain"
                alt="siprochim"
              />
            </div>
            <div className="w-[300px] h-[300px] absolute right-[20rem] -rotate-[22deg] mt-20">
              <Image
                src={"/assets/alimentaire/saveurs/6.png"}
                fill
                objectFit="contain"
                alt="siprochim"
              />
            </div>
            <div className="w-[300px] h-[350px] absolute right-[15rem] -rotate-[20deg]">
              <Image
                src={"/assets/alimentaire/saveurs/7.png"}
                fill
                objectFit="contain"
                alt="siprochim"
              />
            </div>
            <div className="w-[200px] h-[400px] absolute right-[12rem]">
              <Image
                src={"/assets/alimentaire/saveurs/8.png"}
                fill
                objectFit="contain"
                alt="siprochim"
              />
            </div>
            <div className="w-[300px] h-[500px] absolute rotate-[20deg]">
              <Image
                src={"/assets/alimentaire/saveurs/9.png"}
                fill
                objectFit="contain"
                alt="siprochim"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveurInedite;
