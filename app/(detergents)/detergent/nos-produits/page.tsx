"use client";
import Header from "@/components/header";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
//import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/footer";
import { Category, Product } from "@/lib/type";
import Link from "next/link";
import { fetchCategory, fetchProductByCategories } from "@/data/product";
import Loader from "@/components/Loader";

const NosProduits =  () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [productsData, setProductsData] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategoryClick = async (slug: string, category: Category) => {
    setIsLoadingProducts(true);
    setSelectedCategory(category); // Mettre à jour la catégorie sélectionnée

    try {
      const products = await fetchProductByCategories(slug);
      console.log("Produits de la catégorie:", products);
      console.log("ID de la catégorie sélectionnée:", slug);
      setSelectedProduct(products);

    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error);
      setSelectedProduct(null);
    } finally {
      setIsLoadingProducts(false);
    }
  };

  /* const clickNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const clickPrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }; */

  useEffect(() => {
    // Fonction pour charger les produits
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCategory("detergent");
        //console.log("Produits chargés:", data);
        setProductsData(data);
        // Automatiquement sélectionner et charger les produits de la première catégorie
        if (data && data.length > 0) {
          const firstCategory = data[0];
          setSelectedCategory(firstCategory); // Définir la première catégorie comme sélectionnée

          // Charger les produits de la première catégorie
          setIsLoadingProducts(true);
          try {
            const products = await fetchProductByCategories(firstCategory.slug);
            console.log("Produits de la première catégorie:", products);
            setSelectedProduct(products);
            //console.log(selectedProduct?.length)
          } catch (error) {
            console.error("Erreur lors du chargement des produits de la première catégorie:", error);
            setSelectedProduct(null);
          } finally {
            setIsLoadingProducts(false);
          }
        }

      } catch (error) {
        console.error("Erreur lors du chargement des produits:", error);
      }finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <>
      <Header type="detergent" className="bg-[#2e2e72]" isPage />
      <section className="w-full h-screen bg-[url('/assets/detergent/produits/bg.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center"></section>

      <section className="w-full py-20">
        <div className="max-w-screen-xl m-auto px-5">
          <div className="w-full relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={7}
              spaceBetween={50}
              className="w-full h-full flex"
            >
              {
                isLoading ? (
                  <Loader />
                ) : (
                  productsData.map((product) => (
                    <SwiperSlide
                      key={product.id}
                      className={`flex flex-col gap-y-2 py-3 px-3 justify-center items-center cursor-pointer group transition-all duration-300 rounded-lg ${
                        selectedCategory?.id === product.id
                          ? "bg-[#2e2e72] shadow-xl transform scale-105"
                          : "hover:bg-[#2e2e7220]"
                      }`}
                      onClick={() => handleCategoryClick(product.slug, product)}
                    >
                      <Image
                        src={`https://esjc.org/siprochim/public/${product.image}`}
                        width={300}
                        height={300}
                        alt={product.name}
                        className={`group-hover:scale-110 transition-all ease-in-out rounded-full`}
                      />
                      <h4 className={`uppercase font-bold text-center mt-4 transition-all duration-300 ${
                        selectedCategory?.id === product.id
                          ? "text-white text-md"
                          : "text-[#2e2e72] group-hover:text-[#00a1cf]"
                      }`}>
                        {product.name}
                      </h4>
                    </SwiperSlide>
                  ))
                )
              }
            </Swiper>
            {/* <div className="absolute flex gap-x-2 top-1/3 z-20 left-0 right-0">
              <div
                className="w-14 h-14 border-[4px] border-[#2e2e72] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl group absolute -left-20"
                onClick={clickPrev}
              >
                <ArrowLeft className="text-[#2e2e72] w-8 h-8 group-hover:text-black" />
              </div>
              <div
                className="w-14 h-14 absolute -right-20 border-[4px] border-[#2e2e72] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl group"
                onClick={clickNext}
              >
                <ArrowRight className="text-[#2e2e72] w-8 h-8 group-hover:text-black" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="w-full min-h-[500px] bg-[#00a1cf] py-20">
        {
          isLoadingProducts ? (
            <Loader />
          ): (


            <div className={`max-w-screen-xl m-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8`}>
              {

                selectedProduct && Array.isArray(selectedProduct) && selectedProduct.map((subproduct) => (
                  <div
                    key={subproduct.id}
                    className="bg-white group h-[300px] rounded-lg flex flex-col justify-center items-center transition-all ease-in-out group-hover:scale-110"
                    style={{
                      background:
                        "radial-gradient(circle at center, #fff 0%, #ddf4ff 100%)",
                    }}
                  >
                    <Link
                      href={`/detergent/nos-produits/${subproduct.slug}/${subproduct.id}`}
                      className="w-full h-full flex flex-col justify-center items-center transition-all duration-500 group hover:scale-110"
                    >
                      {
                        subproduct.image && (
                          <Image
                            src={`https://esjc.org/siprochim/public/${subproduct.image}`}
                            width={130}
                            height={130}
                            alt={""}
                            className="drop-shadow-2xl"
                          />
                        )
                      }

                      <h4 className="font-bold text-lg text-[#2e2e72]">{subproduct.name}</h4>
                    </Link>
                  </div>
                ))
              }
            </div>

          )
        }
      </section>
      <Footer isPage />
    </>
  );
};

export default NosProduits;