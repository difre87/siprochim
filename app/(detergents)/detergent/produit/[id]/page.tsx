import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Product } from "@/lib/type";
import { fetchProductById } from "@/data/product";

interface ProductSlugPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductSlugPage = async ({params}:ProductSlugPageProps) => {
  //const productId = params.Id; // Extract the product ID from the params
  const resolvedParams = await params;
  console.log("Params résolus:", resolvedParams);
  const productId = resolvedParams.id; // Convert the
  // Fetch the product data based on the ID
  let product: Product | null = null;
  console.log("ID du produit:", productId);

  try {
    product = await fetchProductById(productId);
    console.log("Produit chargé:", product);
  } catch (error) {
    console.error("Erreur lors du chargement du produit:", error);
  }
  return (
    <>
      <Header type="detergent" className="bg-[#2e2e72]" isPage />
      <section className="w-full min-h-[500px] bg-[#00a1cf] py-20">
        {
          product ? (
            <div className="max-w-screen-xl m-auto">
              <div className="px-20 w-2/3 mx-auto grid grid-cols-2">
                <Image
                  src={`https://esjc.org/siprochim/public/${product.image}`}
                  alt={product.name}
                  width={260}
                  height={250}
                  className="drop-shadow-2xl"
                />

                <div className="flex flex-col gap-10">
                  <h2 className="text-[3rem] text-white uppercase font-bold leading-10">{product.name}</h2>
                  {/* <h2 className="text-[6rem] text-white uppercase font-bold">
                    Lorem <br />{" "}
                    <span className="text-6xl uppercase -mt-10 block font-semibold">
                      Ipsum
                    </span>
                  </h2> */}
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href={"#"}
                      className="px-2 h-10 font-bold transition-all ease-in-out duration-500 rounded-full flex justify-center items-center uppercase text-[#2e2e72] bg-white hover:bg-transparent hover:text-white hover:border-[2px]"
                    >
                      lorem ipsum
                    </Link>
                    <Link
                      href={"#"}
                      className="px-2 rounded-full h-10 font-bold transition-all ease-in-out duration-500 flex justify-center items-center uppercase text-white border-[2px] border-white hover:bg-white hover:text-[#2e2e72]"
                    >
                      lorem ipsum
                    </Link>
                  </div>
                  <p className="text-white uppercase text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                    aperiam a unde. Iste, atque harum dolor possimus reiciendis
                    deleniti mollitia ipsum optio illo, quaerat molestias
                    consectetur inventore nulla fugiat nostrum.
                  </p>
                </div>
              </div>
              <div className="px-20 w-2/3 mx-auto flex justify-center items-center py-10">
                <h2 className="text-2xl text-white uppercase font-bold">
                  Lorem Ipsum
                </h2>
              </div>
              <div className="px-20 w-2/3 mx-auto grid grid-cols-4  gap-10">
                <div className="w-32 h-32 bg-transparent border-[1px] border-white flex justify-center items-center rounded-full">
                  <div className="w-28 h-28 bg-white  flex justify-center items-center rounded-full">
                    <h3 className="font-bold text-[#2e2e72] text-6xl">0</h3>
                    <span className="block mt-5 font-semibold text-2xl text-[#2e2e72]">
                      g
                    </span>
                  </div>
                </div>
                <div className="w-32 h-32 bg-transparent border-[1px] border-white flex justify-center items-center rounded-full">
                  <div className="w-28 h-28 bg-white  flex justify-center items-center rounded-full">
                    <h3 className="font-bold text-[#2e2e72] text-6xl">0</h3>
                    <span className="block mt-5 font-semibold text-2xl text-[#2e2e72]">
                      g
                    </span>
                  </div>
                </div>
                <div className="w-32 h-32 bg-transparent border-[1px] border-white flex justify-center items-center rounded-full">
                  <div className="w-28 h-28 bg-white  flex justify-center items-center rounded-full">
                    <h3 className="font-bold text-[#2e2e72] text-6xl">0</h3>
                    <span className="block mt-5 font-semibold text-2xl text-[#2e2e72]">
                      g
                    </span>
                  </div>
                </div>
                <div className="w-32 h-32 bg-transparent border-[1px] border-white flex justify-center items-center rounded-full">
                  <div className="w-28 h-28 bg-white  flex justify-center items-center rounded-full">
                    <h3 className="font-bold text-[#2e2e72] text-6xl">0</h3>
                    <span className="block mt-5 font-semibold text-2xl text-[#2e2e72]">
                      g
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-3/4 mx-auto bg-white px-10 py-5 rounded-3xl min-h-[300px] mt-10">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-1"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="border-b-[2px] border-[#00a1cf] uppercase no-underline text-[#2e2e72] font-bold text-lg hover:no-underline">
                      Lorem ipsum
                    </AccordionTrigger>
                    <AccordionContent className="w-full text-justify py-10 border-0">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aut sint, sit id aspernatur accusamus beatae facilis
                        perspiciatis, quos pariatur inventore exercitationem eum
                        nihil blanditiis laudantium porro dolore non architecto
                        cupiditate!
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="border-b-[2px] border-[#00a1cf] uppercase no-underline text-[#2e2e72] font-bold text-lg hover:no-underline">
                      Lorem ipsum
                    </AccordionTrigger>
                    <AccordionContent className="w-full text-justify py-10 border-0">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aut sint, sit id aspernatur accusamus beatae facilis
                        perspiciatis, quos pariatur inventore exercitationem eum
                        nihil blanditiis laudantium porro dolore non architecto
                        cupiditate!
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="border-b-[2px] border-[#00a1cf] uppercase no-underline text-[#2e2e72] font-bold text-lg hover:no-underline">
                      Lorem ipsum
                    </AccordionTrigger>
                    <AccordionContent className="w-full text-justify py-10 border-0">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aut sint, sit id aspernatur accusamus beatae facilis
                        perspiciatis, quos pariatur inventore exercitationem eum
                        nihil blanditiis laudantium porro dolore non architecto
                        cupiditate!
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="border-b-[2px] border-[#00a1cf] uppercase no-underline text-[#2e2e72] font-bold text-lg hover:no-underline">
                      Lorem ipsum
                    </AccordionTrigger>
                    <AccordionContent className="w-full text-justify py-10 border-0">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aut sint, sit id aspernatur accusamus beatae facilis
                        perspiciatis, quos pariatur inventore exercitationem eum
                        nihil blanditiis laudantium porro dolore non architecto
                        cupiditate!
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="border-b-[2px] border-[#00a1cf] uppercase no-underline text-[#2e2e72] font-bold text-lg hover:no-underline">
                      Lorem ipsum
                    </AccordionTrigger>
                    <AccordionContent className="w-full text-justify py-10 border-0">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Aut sint, sit id aspernatur accusamus beatae facilis
                        perspiciatis, quos pariatur inventore exercitationem eum
                        nihil blanditiis laudantium porro dolore non architecto
                        cupiditate!
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ):(
            <div className="max-w-screen-xl m-auto px-20 py-10">
              <h2 className="text-2xl text-white uppercase font-bold">
                Produit non trouvé
              </h2>
            </div>
          )
        }
      </section>
      <Footer className="!bg-[#008b3690]" />
    </>
  );
};

export default ProductSlugPage;