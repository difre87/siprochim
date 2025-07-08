import Blog from "@/components/blog";
import Astuces from "@/components/detergent/astuces";
import Product from "@/components/detergent/product";
import Sep from "@/components/detergent/sep";
import Footer from "@/components/footer";
import Header from "@/components/detergent/header";
import SocialMedia from "@/components/social-media";
import Years from "@/components/years";
//import Other from "@/app/(alimentaire)/alimentaire/_components/other";

const DetergentPage = () => {
  return (
    <>
      <Header />
      <Sep />
      <Product />
      <Astuces />
      <SocialMedia page={"detergent"} />
      <Years page="detergnent" />
      {/* <Other /> */}
      <div className="-mt-8">
        <Blog />
      </div>

      <Footer />
    </>
  );
};

export default DetergentPage;
