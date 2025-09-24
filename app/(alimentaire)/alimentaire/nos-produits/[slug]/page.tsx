"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

import Link from "next/link";
import { Product } from "@/lib/type";
import { fetchProductBySlug,findSubCategoryById } from "@/data/product";
import { useEffect, useState } from "react";

interface ProductSlugPageProps {
  params: Promise<{
    slug: string;
  }>
}

const ProductSlugPage =  ({params}:ProductSlugPageProps) => {
  //const productId = params.Id; // Extract the product ID from the params
  //const resolvedParams = await params;
  //const productId = parseInt(resolvedParams.slug); // Convert the
  // Fetch the product data based on the ID
  const [productSlug, setProductSlug] = useState<Product[]>([]);
  const [categoryData, setCategoryData] = useState<{ name: string } | null>(null);
  const [subCategoryData, setSubCategoryData] = useState<{ name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Fonction pour charger les produits
      const loadProducts = async () => {
        setIsLoading(true);
        const resolvedParams = await params;
        try {
          const data = await fetchProductBySlug(resolvedParams.slug);
          console.log("Produits chargés:", data);
          setProductSlug(data);

           // Charger les informations de la catégorie
            const subCategoryInfo = await findSubCategoryById(parseInt(resolvedParams.slug));
            console.log("Sous-catégorie chargée:", subCategoryInfo);
            setCategoryData(subCategoryInfo["category"]);
            setSubCategoryData(subCategoryInfo);

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
      <Header type="alimentaire" className="bg-[#008b36]" isPage />
      <section className="w-full py-10 relative">
        <div className="max-w-screen-xl m-auto w-full">
          <h2 className="text-4xl text-[#008b36] text-center font-bold py-4">Nos Produits</h2>
           {productSlug && (
              <div className="flex flex-col items-center justify-center gap-3 pb-10 mb-20">

                <h3 className="text-2xl text-[#2e2e72] font-semibold bg-gradient-to-r from-[#008b36] to-[#09ef3b] bg-clip-text text-transparent">
                  {categoryData ? categoryData.name : "Chargement..."}
                </h3>
                <span className="text-xl text-[#008b36] font-semibold">
                  {subCategoryData ? subCategoryData.name : "Chargement..."}
                </span>
              </div>
            )}
          <div className="grid grid-cols-3 gap-10">
            {
              isLoading ? (
                <div className="col-span-3 flex justify-center items-center">
                  <p className="text-xl text-gray-500">Chargement des produits...</p>
                </div>
              ) : (
                productSlug?.map((item) => (
                  <div className="flex flex-col " key={item.id}>
                    <Link
                      href={`/alimentaire/produit/${item.slug}`}
                      className="w-full h-full border border-[#008b36] flex flex-col justify-center items-center transition-all duration-500 group bg-[#FAFAFA] hover:bg-[#008b36] hover:scale-110 hover:shadow-2xl rounded-3xl overflow-hidden"
                  >
                    <div className="w-full h-[450px] p-10 flex flex-col justify-center items-center relative  transition-all duration-500 hover:bg-hover-aliment  rounded-lg overflow-hidden">
                      <Image
                        src={`https://esjc.org/siprochim/public/${item.image}`}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="drop-shadow-2xl object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"

                    />
                    <h4 className="font-light text-center text-xl text-[#008b36] py-4 group-hover:text-white">{item.name}</h4>
                  </div>

                  </Link>
                </div>)
              ))
            }
          </div>

        </div>

      </section>

      <Footer className="!bg-[#008b3690]" />
    </>
  );
};

export default ProductSlugPage;
