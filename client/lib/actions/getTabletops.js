"use server"

import { shopifyData } from "../shopify"

export default async function getTabletops () {
    const querry = `{
    collection(handle: "tabletop-parts") {
        products(first: 100) {
          edges {
            node {
              title
              images(first: 1) {
                edges {
                  node {
                    url
                  }
                }
              }
              media(first: 10) {
                edges {
                  node {
                    ... on Model3d {
                      sources {
                        url
                        format
                      }
                    }
                  }
                }
              }
              variants(first: 100) {
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
    }`

    const res = await shopifyData(querry)
    const arr = res?.data?.collection?.products?.edges.map((item) => ({
        
    }))
    return arr
}