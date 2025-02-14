import { MenuIcon } from "lucide-react";
import Logo from "./logo";
import MenuSite from "./menu";

interface HeaderProps {
  type: string;
}

const Header = ({ type }: HeaderProps) => {
  return (
    <section className="w-full min-h-16 sm:px-5 md:px-0">
      <div className="w-full max-w-screen-xl mx-auto h-full">
        <div className="w-full flex justify-between items-center h-full py-5">
          <Logo />
          <MenuSite page={type} />
          <MenuIcon className="sm:block md:hidden text-[#2e2e72] size-10" />
        </div>
      </div>
    </section>
  );
};

export default Header;
