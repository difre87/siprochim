"use client";
import Header from "@/components/header";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState, Suspense } from "react";
//import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/footer";
import { Category, Product } from "@/lib/type";
import Link from "next/link";
import { fetchCategory, fetchProductByCategories } from "@/data/product";
import Loader from "@/components/Loader";
import { useSearchParams } from "next/navigation";

// Composant interne qui utilise useSearchParams
const NosProduitContent = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [productsData, setProductsData] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const searchParams = useSearchParams();

  const handleCategoryClick = async (slug: string, category: Category) => {
    setIsLoadingProducts(true);
    setSelectedCategory(category);

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
        const data = await fetchCategory("alimentaire");
        console.log("Produits chargés:", data);
        
        // Définir l'ordre souhaité
        const desiredOrder = ["aromate", "top mayo", "mia", "santina", "amerigo", "top moutarde"];
        
        // Trier les données selon l'ordre souhaité
        const sortedData = data.sort((a: Category, b: Category) => {
          const aIndex = desiredOrder.findIndex(order => 
            a.name.toLowerCase().includes(order.toLowerCase()) || 
            a.slug.toLowerCase().includes(order.toLowerCase())
          );
          const bIndex = desiredOrder.findIndex(order => 
            b.name.toLowerCase().includes(order.toLowerCase()) || 
            b.slug.toLowerCase().includes(order.toLowerCase())
          );
          
          // Si l'élément n'est pas trouvé dans l'ordre souhaité, le mettre à la fin
          if (aIndex === -1) return 1;
          if (bIndex === -1) return -1;
          
          return aIndex - bIndex;
        });
        
        setProductsData(sortedData);

        // Vérifier si il y a un paramètre de catégorie dans l'URL
        const categoryParam = searchParams.get('category');

        if (data && data.length > 0) {
          let targetCategory = data[0]; // Par défaut, prendre la première catégorie

          // Si il y a un paramètre category, chercher la catégorie correspondante
          if (categoryParam) {
            const foundCategory: Category | undefined = data.find((cat: Category) =>
              cat.slug.toLowerCase() === categoryParam.toLowerCase() ||
              cat.name.toLowerCase().includes(categoryParam.toLowerCase())
            );
            if (foundCategory) {
              targetCategory = foundCategory;
            }
          }

          setSelectedCategory(targetCategory);

          // Charger les produits de la catégorie ciblée
          setIsLoadingProducts(true);
          try {
            const products = await fetchProductByCategories(targetCategory.slug);
            console.log("Produits de la catégorie sélectionnée:", products);
            setSelectedProduct(products);
          } catch (error) {
            console.error("Erreur lors du chargement des produits de la catégorie:", error);
            setSelectedProduct(null);
          } finally {
            setIsLoadingProducts(false);
          }
        }

      } catch (error) {
        console.error("Erreur lors du chargement des produits:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, [searchParams]);

  return (
    <>
      <Header type="alimentaire" className="bg-[#008b36]" isPage />
      <section className="w-full h-screen relative bg-[url('/assets/alimentaire/bamboo-bg.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center">
        <div className="max-w-screen-xl w-full h-full flex items-center justify-between px-5">
          <div className="w-1/2 flex flex-col gap-y-6 text-white">
            <h1 className="md:text-6xl sm:text-4xl text-white uppercase font-bold drop-shadow-lg">
              Le Goût qui Rassemble
            </h1>
            <p className="text-lg text-white leading-normal bg-black/40 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              Parce qu&apos;un bon repas commence toujours par la bonne touche. <br />
              Des sauces crémeuses, des condiments incontournables et des
              recettes authentiques qui subliment vos plats au quotidien. <br />
              Chez SIPRO-CHIM, chaque produit est pensé pour transformer 
              vos repas en vrais moments de partage.
            </p>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-[850px] h-[600px]">
              <Image
                src="/assets/alimentaire/saveurs-aromate.png"
                width={500}
                height={500}
                alt="saveurs aromate"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-10 bg-[#008b3610]">
        <div className="max-w-screen-xl m-auto px-5">
          <div className="w-full relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={7}
              spaceBetween={50}
              className="w-full h-full flex"
            >
              {isLoading ? (
                <Loader />
              ) : (
                productsData.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className={`flex flex-col gap-y-2 py-3 px-3 justify-center items-center cursor-pointer group transition-all duration-300 rounded-lg ${
                      selectedCategory?.id === product.id
                        ? "bg-[#008b36] shadow-xl transform scale-105"
                        : "hover:bg-[#008b3620]"
                    }`}
                    onClick={() => handleCategoryClick(product.slug, product)}
                  >
                    {product.image && (
                      <Image
                        src={`https://esjc.org/siprochim/public/${product.image}`}
                        width={100}
                        height={100}
                        alt={product.name}
                        className={`drop-shadow-2xl object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                          selectedCategory?.id === product.id
                            ? " scale-110 filter brightness-110"
                            : ""
                        }`}
                      />
                    )}

                    <h4 className={`uppercase font-bold text-center mt-4 transition-all duration-300 ${
                      selectedCategory?.id === product.id
                        ? "text-white text-lg"
                        : "text-[#2e2e72] group-hover:text-[#008b36]"
                    }`}>
                      {product.name}
                    </h4>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
            {/* <div className="absolute flex gap-x-2 top-1/3 z-20 left-0 right-0">
              <div
                className="w-14 h-14 border-[4px] border-[#008b36] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl group absolute -left-20"
                onClick={clickPrev}
              >
                <ArrowLeft className="text-[#008b36] w-8 h-8 group-hover:text-black" />
              </div>
              <div
                className="w-14 h-14 absolute -right-20 border-[4px] border-[#008b36] rounded-full flex justify-center items-center cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white hover:shadow-2xl group"
                onClick={clickNext}
              >
                <ArrowRight className="text-[#008b36] w-8 h-8 group-hover:text-black" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="w-full min-h-[500px] bg-white py-20">
        {isLoadingProducts ? (
          <Loader />
        ) : (
          <div className="max-w-screen-xl m-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
            {selectedProduct && Array.isArray(selectedProduct) && selectedProduct.map((product) => (
              <div
                key={product.id}
                className="bg-white group h-[300px] rounded-lg flex flex-col justify-center items-center transition-all ease-in-out group-hover:scale-110"
                style={{
                  background: "radial-gradient(circle at center, #28a054 0%, #008b36 100%)",
                }}
              >
                <Link
                  href={`/alimentaire/nos-produits/${product.id}`}
                  className="w-full h-full flex flex-col justify-center items-center transition-all duration-500 group hover:scale-110 p-4"
                >
                  {product.image && (
                    <div className="w-32 h-32 flex justify-center items-center mb-4">
                      <Image
                        src={`https://esjc.org/siprochim/public/${product.image}`}
                        width={130}
                        height={130}
                        alt={product.name}
                        className="drop-shadow-2xl object-contain max-w-full max-h-full"
                      />
                    </div>
                  )}

                  <h4 className="text-white text-lg font-bold text-center">{product.name}</h4>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer className="!bg-[#008b36]" />
    </>
  );
};

// Composant principal avec Suspense
const NosProduits = () => {
  return (
    <Suspense fallback={<Loader />}>
      <NosProduitContent />
    </Suspense>
  );
};

export default NosProduits;