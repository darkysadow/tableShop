import { StoreProvider } from "@/app/redux/provider";
import Additionals from "@/components/Catalog/CatalogItem/Additionals";
import ItemRating from "@/components/Catalog/CatalogItem/ItemRating";
import MaterialPicker from "@/components/Catalog/CatalogItem/MaterialPicker";
import ProductImageSlider from "@/components/Catalog/CatalogItem/ProductImageSlider";
import DiscountInfo from "@/components/landing/DiscountInfo";
import { shopifyData } from "@/lib/shopify";
import Link from "next/link";

export default async function CatalogItem({ params }) {
  const productId = params.catalog

  const query = `
    {
        product (id: "gid://shopify/Product/${productId}") {
        title
        descriptionHtml
        availableForSale
        metafields (identifiers: [
          {namespace: "custom", key:"legs_material"},
          {namespace: "custom", key:"folded"},
          {namespace: "custom", key:"weight"},
        ]) {
          key
          value
        }
        priceRange {
            maxVariantPrice {
              amount
            }
        }
        variants (first:5) {
          edges {
            node {
              title
              product {
                productType
              }
            }
          }
        }
        images (first: 15) {
          edges {
            node {
              url
              altText
            }
          }
        }
      }
    }
    `

  const { data } = await shopifyData(query)
  const product = data.product

  return (
    <main className="container mx-auto flex flex-col">
      <section className="text-sm flex flex-row my-10 [&>*]:relative [&>*]:before:absolute [&>*]:text-[#7f7f7f] [&>*]:before:content-['/'] [&>*]:before:right-0 [&>*]:px-7 max-sm:[&>*]:px-3 [&>p]:before:content-[''] [&>p]:text-black ">
        <Link href={'/'} >Home</Link>
        <Link href={'/catalog'}>Catalog</Link>
        <p>{data.product.title}</p>
      </section>
      <section className="flex flex-row max-md:flex-col h-full">
        <StoreProvider>
          <ProductImageSlider images={product.images.edges} />
        </StoreProvider>
        <div className="w-2/5 flex flex-col px-2 max-md:w-full max-md:mt-9">
          <div className="w-full flex flex-col max-md:flex-col-reverse">
            <div>
              <h1 className="font-medium text-3xl">{product.title}</h1>
              <ItemRating />
              <div className="quick-view-price flex flex-row gap-x-2 items-center my-5 text-2xl">
                <span className='font-rubik text-black'>${product.priceRange.maxVariantPrice.amount}</span>
              </div>
              <hr />
              <div
                className="py-4 text-[#4f4f4f] text-lg leading-8 "
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}></div>
              <hr />
            </div>
            <StoreProvider>
              <MaterialPicker materials={product.variants.edges} />
            </StoreProvider>
          </div>
          <div className="my-5">
            <p>Availability: {product.availableForSale ? <span className="text-blue-600">In stock</span> : <span className="text-red-500">Not available</span>}</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col my-10">
        <Additionals metafields={product.metafields} />
      </section>
      <DiscountInfo />
    </main>
  )
}