import { menuAlimentaire, menuDetergent } from "@/data";
import Link from "next/link";

interface MenuSiteProps {
  page: string;
  isPage?: boolean;
}

const MenuSite = ({ page, isPage }: MenuSiteProps) => {
  const menu = page == "alimentaire" ? menuAlimentaire : menuDetergent;
  return (
    <div className="md:flex md:gap-x-8  justify-center items-center sm:hidden">
      {menu.map((menu, index) =>
        menu.link ? (
          <Link
            key={index}
            href={menu.link}
            className={`font-semibold text-indigo-900 text-sm ${
              isPage ? "text-white" : "text-indigo-900"
            }`}
          >
            {menu.title}
          </Link>
        ) : null
      )}
      <Link
        href={page == "alimentaire" ? "/detergent" : "/alimentaire"}
        className={`py-2 px-4 rounded-full font-bold uppercase text-white ${
          isPage ? "bg-[#0074b2]" : "bg-red-800"
        }`}
      >
        {page == "alimentaire" ? "Détergents" : "Alimentaires"}
      </Link>
    </div>
  );
};

export default MenuSite;
