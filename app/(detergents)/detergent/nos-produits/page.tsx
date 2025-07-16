"use client";
import Header from "@/components/header";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
 // const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

const handleCategoryClick = async (id:string) => {
    setIsLoadingProducts(true);

    try {
      const products = await fetchProductByCategories(id);
      console.log("Produits de la catégorie:", products);
      console.log("ID de la catégorie sélectionnée:", id);
      setSelectedProduct(products);

    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error);
      setSelectedProduct(null);
    } finally {
      setIsLoadingProducts(false);
    }
  };

  const clickNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const clickPrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    // Fonction pour charger les produits
    const loadProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetchCategory("detergent");
        console.log("Produits chargés:", data);
        setProductsData(data);
        // Automatiquement sélectionner et charger les produits de la première catégorie
        if (data && data.length > 0) {
          const firstCategory = data[0];
          setSelectedProduct(firstCategory);

          // Charger les produits de la première catégorie
          setIsLoadingProducts(true);
          try {
            const products = await fetchProductByCategories(firstCategory.slug);
            console.log("Produits de la première catégorie:", products);
            setSelectedProduct(products);
          } catch (error) {
            console.error("Erreur lors du chargement des produits de la première catégorie:", error);
            setSelectedProduct(null);
          } finally {
            setIsLoadingProducts(false);
          }
        }
        console.log("Produits chargés:", productsData);

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
                      className="flex flex-col gap-y-2 py-3 px-3 justify-center items-center cursor-pointer group"
                      onClick={() => handleCategoryClick(product.slug)}
                  >
                    <Image
                      src={`https://esjc.org/siprochim/public/${product.image}`}
                      width={300}
                      height={300}
                      alt={product.name}
                      className={`group-hover:scale-110 transition-all ease-in-out rounded-full ${selectedProduct?.id === product.id ? "ring-4 ring-[#2e2e72] scale-110 shadow-xl" : ""}`}
                    />
                    <h4 className="uppercase text-[#2e2e72] font-bold text-center mt-4">
                      {product.name}
                    </h4>
                  </SwiperSlide>
                ))
                )
              }
            </Swiper>
            <div className="absolute flex gap-x-2 top-1/3 z-20 left-0 right-0">
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
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-[500px] bg-[#00a1cf] py-20">
        {
          isLoadingProducts ? (
            <Loader />
          ): (
            <div className="max-w-screen-xl m-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-16">
              {
                selectedProduct && Array.isArray(selectedProduct) && selectedProduct.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white group h-[400px] rounded-lg flex flex-col justify-center items-center transition-all ease-in-out group-hover:scale-110"
                    style={{
                      background:
                        "radial-gradient(circle at center, #fff 0%, #ddf4ff 100%)",
                    }}
                  >
                    <Link
                      href={`/detergent/nos-produits/${product.id}`}
                      className="w-full h-full flex flex-col justify-center items-center transition-all duration-500 group hover:scale-110"
                    >
                      {
                        product.image && (
                          <Image
                            src={`https://esjc.org/siprochim/public/${product.image}`}
                            width={130}
                            height={130}
                            alt={""}
                            className="drop-shadow-2xl"
                          />
                        )
                      }

                      <h4 className="font-bold text-xl text-[#2e2e72]">{product.name}</h4>
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
