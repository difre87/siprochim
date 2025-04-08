import Blog from "@/components/blog";
import Astuces from "@/components/detergent/astuces";
import Product from "@/components/detergent/product";
import Sep from "@/components/detergent/sep";
import Footer from "@/components/footer";
import Header from "@/components/detergent/header";
import SocialMedia from "@/components/social-media";
import Years from "@/components/years";
import Cloud from "@/components/detergent/cloud";
import Faq from "@/components/faq";

const DetergentPage = () => {
  return (
    <>
      <Header />
      <Cloud />
      <Sep />
      <Product />
      <Astuces />
      <SocialMedia page={"detergent"} />
      <Years page="detergnent" />
      <div className="-mt-8">
        <Blog />
      </div>
      <Faq page="detergent" />
      <Footer />
    </>
  );
};

export default DetergentPage;
