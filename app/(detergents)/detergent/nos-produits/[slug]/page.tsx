"use client"
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

import Link from "next/link";
import { Product } from "@/lib/type";
import { fetchProductBySlug } from "@/data/product";
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
          // Automatiquement sélectionner et charger les produits de la première catégorie

          console.log("Produits chargés:", productSlug);

        } catch (error) {
          console.error("Erreur lors du chargement des produits:", error);
        }finally {
          setIsLoading(false);
        }
      };

      loadProducts();
    }, []);

  /* try {
    product = await fetchProductBySlug(resolvedParams.slug);
    console.log("Produit chargé:", product);
  } catch (error) {
    console.error("Erreur lors du chargement du produit:", error);
  } */
  return (
    <>
      <Header type="detergent" className="bg-[#2e2e72]" isPage  />
      <section className="w-full py-10 relative">
        <div className="max-w-screen-xl m-auto w-full">
          <h2 className="text-4xl text-[#00a1cf] text-center font-bold pt-10 pb-20">Nos Produits</h2>
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
                    href={`/detergent/produit/${item.slug}`}
                    className="w-full h-full border border-[#00a1cf] flex flex-col justify-center items-center transition-all duration-500 group bg-white hover:bg-[#000a1cf] hover:scale-110 hover:shadow-2xl rounded-3xl overflow-hidden"
                  >
                    <div className="w-full h-[450px] flex flex-col justify-center items-center relative  transition-all duration-500 hover:bg-hover-aliment  rounded-lg overflow-hidden">
                      <Image
                        src={`https://esjc.org/siprochim/public/${item.image}`}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="drop-shadow-2xl object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"

                    />
                    <div className="px-5 flex justify-center items-center">
                    <h4 className="font-light text-center text-lg text-[#00a1cf] py-4 group-hover:text-[#00a1cf]">{item.name}</h4>
                    </div>

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
