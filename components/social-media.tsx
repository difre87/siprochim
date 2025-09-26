import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SocialMediaProps {
  page: string;
}

const SocialMedia = ({ page = "alimentaire" }: SocialMediaProps) => {
  return (
    <section
      className={cn(
        "w-full min-h-[400px] bg-white flex justify-center items-center flex-col  relative",
        page == "alimentaire" ? "" : ""
      )}
    >
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="w-full flex flex-col justify-center items-center mt-20 gap-y-10">
          <h1 className="md:text-6xl sm:text-4xl sm:py-5 md:py-0 uppercase text-center font-semibold">
            Suivez-nous sur les réseaux
          </h1>
          <p className="uppercase font-medium text-center">
            Astuce ménage ou idée gourmande,
            on partage tout ! <br />
            Rejoignez notre communauté et
            découvrez chaque jour conseils,
            recettes et bons plans.
            <br />
            Un clic, et vous êtes dans la boucle.
          </p>
        </div>
        <div className="w-full flex justify-center items-center gap-x-5 mt-5">
          <Link
            href="#"
            className="w-20 h-20 rounded-full border-[5px] border-[#002c7c] flex justify-center items-center transition-all duration-500 hover:border-red-950"
          >
            <div className="w-16 h-16 rounded-full bg-[#002c7c] flex justify-center items-center transition-all duration-500 hover:bg-red-800 ">
              <FaFacebookF className="text-white w-8 h-8" />
            </div>
          </Link>
          <Link
            href="#"
            className="w-20 h-20 rounded-full border-[5px] border-[#002c7c] flex justify-center items-center transition-all duration-500 hover:border-red-950"
          >
            <div className="w-16 h-16 rounded-full bg-[#002c7c] flex justify-center items-center transition-all duration-500 hover:bg-red-800">
              <FaInstagram className="text-white w-8 h-8" />
            </div>
          </Link>
          <Link
            href="#"
            className="w-20 h-20 rounded-full border-[5px] border-[#002c7c] flex justify-center items-center transition-all duration-500 hover:border-red-950"
          >
            <div className="w-16 h-16 rounded-full bg-[#002c7c] flex justify-center items-center transition-all duration-500 hover:bg-red-800">
              <FaTiktok className="text-white w-8 h-8" />
            </div>
          </Link>
          <Link
            href="#"
            className="w-20 h-20 rounded-full border-[5px] border-[#002c7c] flex justify-center items-center transition-all duration-500 hover:border-red-950"
          >
            <div className="w-16 h-16 rounded-full bg-[#002c7c] flex justify-center items-center transition-all duration-500 hover:bg-red-800">
              <FaPinterestP className="text-white w-8 h-8" />
            </div>
          </Link>
        </div>
      </div>
      {/* */}
    </section>
  );
};

export default SocialMedia;
