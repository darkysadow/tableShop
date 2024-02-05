"use server"

import { shopifyData } from "../shopify"

export default async function addToCart(cartId, variantId) {
    const addToCartQuerry = `
    mutation AddToCart {
        cartLinesAdd(cartId: "${cartId}", lines: [{quantity: 1, merchandiseId: "${variantId}"}]) {
          cart {
            lines(first: 100) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      title
                      product {
                        title
                        
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `


    const res = await shopifyData(addToCartQuerry)
    console.log(res);
}