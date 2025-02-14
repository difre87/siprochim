import Image from "next/image";
import Link from "next/link";

const Mayonnaise = () => {
  return (
    <section className="w-full min-h-screen relative bg-[#a31227] py-20 sm:px-5 md:px-0">
      <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 md:gap-x-32 sm:gap-10">
        <div className="md:min-h-[450px] sm:h-[300px] bg-[url('/assets/alimentaire/mayonnaise/planche-1.png')] bg-cover bg-center bg-no-repeat md:rounded-tr-[100px] md:rounded-br-[100px] sm:rounded-[20px] flex items-center justify-center relative">
          <div className="w-full grid grid-cols-2">
            <div className="flex flex-col h-full gap-y-4">
              <div className="flex justify-end w-full">
                <Image
                  src={"/assets/alimentaire/mayonnaise/logo-mia.png"}
                  width={100}
                  height={100}
                  alt="mayonnaise mia"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h1 className="text-white md:text-3xl sm:text-xl font-semibold text-right">
                  Mayonnaise
                  <br /> Mia
                </h1>
                <p className="text-white md:text-sm sm:text-[12px] text-right">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt laborum saepe itaque velit ipsum sit aliquam pariatur
                </p>
                <div className="w-full flex justify-end">
                  <Link
                    href="/"
                    className="bg-[#e30613] rounded-full md:py-3 sm:py-2 px-5 transition-all duration-500 text-white font-medium"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
            <div className="sm:block md:hidden">
              <Image
                src={"/assets/alimentaire/mayonnaise/mia.png"}
                width={200}
                height={400}
                alt="mayonnaise mia"
                className="absolute -right-8 bottom-5"
              />
            </div>
            <Image
              src={"/assets/alimentaire/mayonnaise/mia.png"}
              width={400}
              height={400}
              alt="mayonnaise mia"
              className="absolute -right-16 -top-10 md:block sm:hidden"
            />
          </div>
        </div>
        <div className="md:min-h-[450px] sm:h-[300px] bg-[url('/assets/alimentaire/mayonnaise/planche-2.png')] bg-cover bg-center bg-no-repeat md:rounded-tr-[100px] md:rounded-br-[100px] sm:rounded-[20px] flex items-center justify-center relative">
          <Image
            src={"/assets/alimentaire/mayonnaise/top-mayo.png"}
            width={400}
            height={400}
            alt="mayonnaise mia"
            className="absolute -top-10  md:block sm:hidden"
          />
          <div className="sm:block md:hidden">
            <Image
              src={"/assets/alimentaire/mayonnaise/top-mayo.png"}
              width={200}
              height={400}
              alt="mayonnaise mia"
              className="absolute -left-8 bottom-5"
            />
          </div>
          <div className="w-full grid grid-cols-2">
            <div></div>
            <div className="flex flex-col h-full gap-y-4">
              <div className="flex justify-start w-full">
                <Image
                  src={"/assets/alimentaire/mayonnaise/logo-top-mayo.png"}
                  width={100}
                  height={100}
                  alt="mayonnaise top mayo"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h1 className="text-[#2e2e72] md:text-3xl sm:text-xl font-semibold">
                  Mayonnaise
                  <br /> top mayo
                </h1>
                <p className="text-[#2e2e72] md:text-sm sm:text-[12px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt laborum saepe itaque velit ipsum sit aliquam pariatur
                </p>
                <div className="w-full flex justify-start">
                  <Link
                    href="/"
                    className="bg-[#e30613] rounded-full md:py-3 sm:py-2 px-5 transition-all duration-500 text-white font-medium"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full md:mt-28 sm:mt-10">
        <div className="w-[795px] md:h-[450px] sm:h-[300px] bg-[url('/assets/alimentaire/mayonnaise/planche-3.png')] bg-cover bg-center bg-no-repeat md:rounded-[100px] sm:rounded-[20px] flex items-center relative">
          <Image
            src={"/assets/alimentaire/mayonnaise/santina.png"}
            width={450}
            height={400}
            alt="mayonnaise mia"
            className="absolute -left-10 -top-20 md:block sm:hidden"
          />

          <div className="w-full grid grid-cols-2">
            <div></div>
            <div className="flex flex-col h-full gap-y-4">
              <div className="flex justify-start w-full">
                <Image
                  src={"/assets/alimentaire/mayonnaise/logo-santina.png"}
                  width={100}
                  height={100}
                  alt="mayonnaise mia"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <h1 className="text-[#2e2e72] md:text-3xl sm:text-xl font-semibold">
                  Mayonnaise
                  <br /> top mayo
                </h1>
                <p className="text-[#2e2e72] md:text-sm sm:text-[12px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deserunt laborum saepe itaque velit ipsum sit aliquam pariatur
                </p>
                <div className="w-full flex justify-start">
                  <Link
                    href="/"
                    className="bg-[#e30613] rounded-full md:py-3 sm:py-2  px-5 transition-all duration-500 text-white font-medium"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:block md:hidden">
            <Image
              src={"/assets/alimentaire/mayonnaise/santina.png"}
              width={200}
              height={400}
              alt="mayonnaise mia"
              className="absolute -left-2 bottom-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mayonnaise;
