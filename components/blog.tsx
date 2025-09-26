import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Testimonies from "./testimonies";

interface BlogProps {
  page?: string;
}

const Blog = ({ page }: BlogProps) => {
  return (
    <section className={`w-full min-h-screen  ${page == "alimentaire" ? "bg-[#ffb81c]" : "bg-white  -mt-52"} `}>
      <div className="w-full min-h-[500px] bg-[#40409c] round  relative pt-16 pb-20 sm:px-10 md:px-0">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="w-full py-40 flex flex-col gap-y-8">
            <span className="text-white font-semibold">Blog</span>
            <h1 className="text-white text-5xl font-bold">
              Nos Actualités
            </h1>
            <p className="text-white font-medium">
              Tendances, nouveautés et coulisses
              de l’entreprise : suivez toute l’actu
              SIPRO-CHIM.
            </p>
          </div>
          <div className="w-full grid md:grid-cols-3 sm:grid-cols-1 sm:gap-y-10 gap-x-10">
            <Link
              href="#"
              className="group transition-all duration-500 hover:shadow-2xl"
            >
              <div className="border-[2px] border-[#fafafa] bg-white rounded-2xl">
                <div className="w-full overflow-hidden">
                  <Image
                    src="/assets/blog/1.jpg"
                    width={1000}
                    height={400}
                    alt="blog"
                    className="rounded-tr-2xl rounded-tl-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>

                <div className="p-5  w-full">
                  <h4 className="font-semibold text-[#3d84f8]">Nouveautés</h4>
                  <h3 className="text-[#2d2a71] text-xl font-semibold py-4 transition-all duration-500 group-hover:underline">
                    Lancement de notre nouveau produit écologique
                  </h3>
                  <p className="font-medium text-sm">
                    Nous sommes fiers de présenter notre gamme de produits
                    respectueux de l&apos;environnement.
                  </p>
                  <div className="w-full flex gap-x-3 mt-5">
                    <div className="w-14 h-14 rounded-full bg-[#dbdbdb] flex justify-center items-center">
                      <ImageIcon className="w-4 h-4 text-[#ebebeb]" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-bold">Admin</h4>
                      <div className="flex justify-center items-center gap-x-2 text-sm">
                        <span>17 Sep 2024 </span>
                        <div className="w-1 h-1 rounded-full bg-black"></div>
                        <span>3 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="group transition-all duration-500 hover:shadow-2xl"
            >
              <div className="border-[2px] border-[#fafafa] bg-white rounded-2xl">
                <div className="w-full overflow-hidden">
                  <Image
                    src="/assets/blog/1.jpg"
                    width={1000}
                    height={400}
                    alt="blog"
                    className="rounded-tr-2xl rounded-tl-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>

                <div className="p-5  w-full">
                  <h4 className="font-semibold text-[#3d84f8]">Evènements</h4>
                  <h3 className="text-[#2d2a71] text-xl font-semibold py-4 transition-all duration-500 group-hover:underline">
                    Participation à la foire des produits bio
                  </h3>
                  <p className="font-medium text-sm">
                    Rejoignez-nous pour découvrir nos produits lors de cet
                    évènement incontournable.
                  </p>
                  <div className="w-full flex gap-x-3 mt-5">
                    <div className="w-14 h-14 rounded-full bg-[#dbdbdb] flex justify-center items-center">
                      <ImageIcon className="w-4 h-4 text-[#ebebeb]" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-bold">Admin</h4>
                      <div className="flex justify-center items-center gap-x-2 text-sm">
                        <span>28 Fév 2024 </span>
                        <div className="w-1 h-1 rounded-full bg-black"></div>
                        <span>12 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="group transition-all duration-500 hover:shadow-2xl"
            >
              <div className="border-[2px] border-[#fafafa] bg-white rounded-2xl">
                <div className="w-full overflow-hidden">
                  <Image
                    src="/assets/blog/1.jpg"
                    width={1000}
                    height={400}
                    alt="blog"
                    className="rounded-tr-2xl rounded-tl-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>

                <div className="p-5  w-full">
                  <h4 className="font-semibold text-[#3d84f8]">Produits</h4>
                  <h3 className="text-[#2d2a71] text-xl font-semibold py-4 transition-all duration-500 group-hover:underline">
                    Amélioration de notre gamme de détergents
                  </h3>
                  <p className="font-medium text-sm">
                    Découvrez nos nouvelles formules pour un nettoyage efficace
                    et respectueux.
                  </p>
                  <div className="w-full flex gap-x-3 mt-5">
                    <div className="w-14 h-14 rounded-full bg-[#dbdbdb] flex justify-center items-center">
                      <ImageIcon className="w-4 h-4 text-[#ebebeb]" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-bold">Admin</h4>
                      <div className="flex justify-center items-center gap-x-2 text-sm">
                        <span>11 Jan 2024 </span>
                        <div className="w-1 h-1 rounded-full bg-black"></div>
                        <span>5 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-screen-xl mx-auto mt-20">
          <Testimonies />
        </div>
      </div>
    </section>
  );
};

export default Blog;
