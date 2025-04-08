import { menuAlimentaire } from "@/data";
import Link from "next/link";

interface MenuSiteProps {
  page: string;
}

const MenuSite = ({ page }: MenuSiteProps) => {
  return (
    <div className="md:flex md:gap-x-8  justify-center items-center sm:hidden">
      {menuAlimentaire.map((menu, index) => (
        <Link
          key={index}
          href={"#"}
          className="font-semibold text-indigo-900 text-sm"
        >
          {menu.title}
        </Link>
      ))}
      <Link
        href={page == "alimentaire" ? "/detergents" : "/alimentaire"}
        className="bg-red-800 py-2 px-4 rounded-full font-bold uppercase text-white"
      >
        {page == "alimentaire" ? "Détergents" : "Alimentaires"}
      </Link>
    </div>
  );
};

export default MenuSite;
