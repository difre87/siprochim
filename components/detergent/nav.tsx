import Logo from "@/components/logo";
import MenuSite from "@/components/menu";

const Nav = () => {
  return (
    <section className="absolute top-0 right-0 left-0  h-16">
      <div className="w-full max-w-screen-xl h-full mx-auto">
        <div className="w-full h-full flex items-center justify-between">
          <Logo />
          <MenuSite page="detergent" />
        </div>
      </div>
    </section>
  );
};

export default Nav;
