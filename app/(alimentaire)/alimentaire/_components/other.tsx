import Image from "next/image";
import Link from "next/link";

const Other = () => {
  return (
    <section className="w-full min-h-screen bg-[#e32516] flex justify-center items-center relative -mt-12 sm:px-10 md:px-0">
      <div className="w-full min-h-[500px] py-10">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="w-full grid md:grid-cols-2 sm:gap-x-1 gap-x-10 sm:gap-y-10">
            <div className="flex flex-col justify-center  gap-y-8">
              <h1 className="text-white text-5xl font-bold">Lorem Ipsum</h1>
              <p className="text-justify text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                quasi dignissimos aperiam laboriosam fugit. Iure quibusdam ullam
                corrupti illum magnam, blanditiis temporibus nemo voluptate
                repellat similique facilis quia. Ipsam, recusandae.
              </p>
              <div className="flex">
                <Link
                  href="#"
                  className="bg-[#2e2e72] border-[2px] border-[#4b3e94] block px-10 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:bg-blue-950 hover:shadow-2xl"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="md:h-[500px] sm:h-[300px] relative">
              <Image
                src="/assets/other.png"
                objectFit="cover"
                fill
                alt=""
                className="rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Other;
