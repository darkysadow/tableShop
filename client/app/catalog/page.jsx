import CatalogCard from "@/components/Catalog/CatalogCard";
import { shopifyData } from "@/lib/shopify";
import Image from "next/image";
import Link from "next/link";
import { StoreProvider } from "../redux/provider";

export default async function Catalog() {
    const query = `
    {
        products (first: 15) {
        edges {
          node {
            id
            title
            images(first: 15) {
              edges{
                node{
                  url
                  altText
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
            variants (first: 5) {
               edges {
                node {
                  id
                  title
                }
              }
            }
          }
        }
      }
    }
    `
    const {data} = await shopifyData(query);
    /* console.log(data.products.edges); */
    return (
        <main>
            <section className="h-[55vh] max-[550px]:h-[40vh] relative flex justify-center items-center w-full catalog-head-block">
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <Image priority={false} src={'/wtp/Atlant/oak_palena/third.jpg'} fill sizes="100%" style={{objectFit: "cover", objectPosition: "top"}} alt="Atlant Oak Palena Table" />
                </div>
                <div className="flex flex-col justify-center items-center z-[1] pt-10">
                    <h1 className="text-3xl font-medium text-black">Products</h1>
                    <div className="flex flex-row text-sm text-[#aeaeae] gap-x-3 mt-4 tracking-widest">
                        <Link href={'/'} className="transition md:hover:text-black">Home</Link> <span>/</span><p className="text-black">Catalog</p>
                    </div>
                </div>
            </section>
            <section className="container mx-auto flex flex-row flex-wrap my-28">
              <StoreProvider>
                {data.products && data.products.edges.map((item, index) => (<CatalogCard key={index} item={item.node} />))}
              </StoreProvider>
            </section>
        </main>
    )
}