import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import { Product, ProductFaq } from "@/lib/type";
import { fetchProductById, findProductFaq } from "@/data/product";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ProductSlugPageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductSlugPage = async ({params}:ProductSlugPageProps) => {
  //const productId = params.Id; // Extract the product ID from the params
  const resolvedParams = await params;
  const productId = resolvedParams.id;
  // Fetch the product data based on the ID
  let product: Product | null = null;
  let productFaqs: ProductFaq[] = [];

  try {
    product = await fetchProductById(productId);
    if (product) {
      const faqData = await findProductFaq(parseInt(productId));
      productFaqs = faqData || [];
    }
  } catch (error) {
    console.error("Erreur lors du chargement du produit:", error);
  }

  const stripHtml = (html?: string) => {
    if (!html) return "";
    // Convert <br> to new line, then remove any other tags
    return html.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]+>/g, "");
  };
  return (
    <>
      <Header type="alimentaire" className="bg-[#008b36]" isPage />
      <section className="w-full min-h-[500px] bg-[#008b36] py-20">
        {
          product ? (
            <div className="max-w-screen-xl m-auto">
              <div className="px-20 w-2/3 mx-auto grid grid-cols-2">
              <div className=" relative w-full flex justify-center items-center">
                <Image
                  src={`https://esjc.org/siprochim/public/${product.image}`}
                  alt={product.name}
                  fill
                  className="drop-shadow-2xl object-contain transition-all duration-300 ease-in-out hover:scale-110"
                />
              </div>


                <div className="flex flex-col gap-10 ml-10">
                  <h2 className="text-[3rem] text-white uppercase font-bold leading-10">{product.name}</h2>
                  <p className="text-white text-left whitespace-pre-line">
                    {stripHtml(product.description)}
                  </p>
                </div>
              </div>
              <div className="px-20 w-2/3 mx-auto flex justify-center items-center py-8">
                <h2 className="text-2xl text-white uppercase font-bold">
                  {product.analytics.length > 0 ? `${product.analytics[0].label}` : "Volume"}
                </h2>
              </div>
              <div className={`px-20 w-2/3 mx-auto grid   gap-10 ${product.analytics.length > 4 ? 'grid-cols-4' : ' justify-center items-center'} py-5`}>
              {
                product.analytics.map((analytic) => (
                  <div key={analytic.id} className="w-32 h-32 bg-transparent border-[1px] border-white flex justify-center items-center rounded-full">
                    <div className="w-28 h-28 bg-white flex justify-center items-center rounded-full">
                      <h3 className="font-bold text-[#2e2e72] text-3xl leading-none">{analytic.value}</h3>
                      <span className="block  font-semibold text-xl text-[#2e2e72]">
                        {analytic.unit}
                      </span>
                    </div>
                  </div>
                ))
              }

              </div>
              {productFaqs.length > 0 && (
                <div className="w-3/4 mx-auto bg-white px-10 py-5 rounded-3xl min-h-[300px] mt-10">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue={`item-${productFaqs[0]?.id}`}
                  >
                    {productFaqs.map((faq) => (
                      <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                        <AccordionTrigger className="border-b-[2px] border-[#00a1cf] uppercase no-underline text-[#2e2e72] font-bold text-lg hover:no-underline">
                          {faq.title}
                        </AccordionTrigger>
                        <AccordionContent className="w-full text-justify py-10 border-0">
                          <div 
                            dangerouslySetInnerHTML={{ __html: faq.content || '' }}
                            className="prose prose-sm max-w-none"
                          />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
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