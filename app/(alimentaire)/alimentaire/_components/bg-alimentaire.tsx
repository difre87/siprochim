import Image from "next/image";

const BgAlimentaire = () => {
  return (
    <section className="w-full md:min-h-screen sm:bg-[url('/assets/alimentaire/home-bg.png')] md:bg-[url('/assets/alimentaire/home.png')] bg-center bg-cover bg-no-repeat relative sm:h-[300px] ">
      <div className="sm:hidden md:block absolute bottom-0 left-0 right-0 h-80 bg-[url('/assets/alimentaire/home-planche.png')] bg-center bg-cover">
        <div className="w-full  h-[400px]  flex justify-between absolute bottom-58 bottom-64">
          <div className="flex items-end justify-end h-full">
            <div className="w-[250px] h-[400px] relative">
              <Image
                src="/assets/alimentaire/home/1.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </div>

            <div className="w-[200px] h-[320px] relative -ml-16">
              <Image
                src="/assets/alimentaire/home/2.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </div>
            <div className="w-[200px] h-[320px] relative -ml-16">
              <Image
                src="/assets/alimentaire/home/3.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex  items-end justify-end   h-full flex-row-reverse">
            <div className="w-[200px] h-[400px] relative">
              <Image
                src="/assets/alimentaire/home/6.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </div>

            <div className="w-[200px] h-[320px] relative  -mr-16">
              <Image
                src="/assets/alimentaire/home/5.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </div>
            <div className="w-[200px] h-[320px] relative -mr-16">
              <Image
                src="/assets/alimentaire/home/4.png"
                fill
                alt="SIPROCHIM"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full  h-[400px] flex justify-center absolute bottom-10 ">
          <div className="w-[200px] h-[320px] relative">
            <Image
              src="/assets/alimentaire/home/7.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </div>

          <div className="w-[200px] h-[320px] relative">
            <Image
              src="/assets/alimentaire/home/8.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </div>
          <div className="w-[200px] h-[320px] relative">
            <Image
              src="/assets/alimentaire/home/9.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="w-full  h-[200px] flex justify-center items-end absolute gap-4 bottom-16 ">
          <div className="w-[200px] h-[200px] relative">
            <Image
              src="/assets/alimentaire/home/10.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </div>

          <div className="w-[200px] h-[200px] relative">
            <Image
              src="/assets/alimentaire/home/11.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </div>
          <div className="w-[300px] h-[100px] relative">
            <Image
              src="/assets/alimentaire/home/14.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </div>
          <div className="w-[200px] h-[200px] relative">
            <Image
              src="/assets/alimentaire/home/12.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </div>

          <div className="w-[200px] h-[200px] relative">
            <Image
              src="/assets/alimentaire/home/13.png"
              fill
              alt="SIPROCHIM"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BgAlimentaire;
