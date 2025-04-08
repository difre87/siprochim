import Header from "@/components/header";
import BgAlimentaire from "./_components/bg-alimentaire";
import SaveurInedite from "./_components/saveur-inedite";
import Mayonnaise from "./_components/mayonnaise";
import NosRecettes from "./_components/nos-recettes";
import SocialMedia from "@/components/social-media";
import Years from "./_components/years";
import Other from "./_components/other";
import Blog from "@/components/blog";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Heroes from "./_components/heroes";
import HeroesForm from "./_components/heroes-form";
import SepBurger from "./_components/sep-burger";
import HeroesBouillon from "./_components/heroes-bouillon";
import HeroesAromate from "./_components/heroes-aromate";
import "animate.css";

const AlimentairePage = () => {
  return (
    <>
      <Header type="alimentaire" />
      <BgAlimentaire />
      <Heroes />
      <HeroesForm />
      <HeroesAromate />
      <HeroesBouillon />
      <SepBurger />
      <Mayonnaise />
      <NosRecettes />
      <SaveurInedite />
      <SocialMedia page={"alimentaire"} />
      <Years />
      <Other />
      <Blog />
      <Faq page={"alimentaire"} />
      <Footer />
    </>
  );
};

export default AlimentairePage;
