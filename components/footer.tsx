import { menuFooter } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <section className="relative bg-[#e20612] py-10 w-full">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="w-full grid grid-cols-3 border-b-[1px] pb-10">
          <div className="flex flex-col gap-y-8 col-span-2">
            <Image
              src="/assets/logo-white.png"
              width={150}
              height={80}
              alt="sipro-chim"
            />
            <div className="w-full flex gap-x-6">
              {menuFooter.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.link}
                  className="text-white font-medium"
                >
                  {menu.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h4 className="font-medium text-white">S&apos;abonner</h4>
            <div className="flex gap-x-4">
              <Input
                placeholder="Entrez votre email"
                className="h-12 rounded-2xl text-white"
              />
              <Button className="h-12 rounded-2xl px-5 bg-[#2e2c75]">
                S&apos;abonner
              </Button>
            </div>
            <p className="text-[12px] font-light text-white">
              En vous abonnant, vous acceptez notre politique de
              confidentialité.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 py-5">
          <div className="col-span-2 flex gap-x-8">
            <Link href="#" className="text-white font-light text-sm underline">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-white font-light text-sm underline">
              Conditions de service
            </Link>
            <Link href="#" className="text-white font-light text-sm underline">
              Paramètres des Cookies
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-white font-light text-sm">
              &copy; Sipro-Chim. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
