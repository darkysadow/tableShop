"use server"

import { shopifyData } from "../shopify"

export default async function addToCart(cartId, variantId) {
    const addToCartQuerry = `
    mutation AddToCart {
        cartLinesAdd(cartId: "${cartId}", lines: [{quantity: 1, merchandiseId: "${variantId}"}]) {
          cart {
            cost {
                totalAmount {
                  amount
                  currencyCode
                }
            }
            totalQuantity
            lines (first: 100) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        
                        price {
                          amount
                        }
                        image {
                          url
                        }
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
    return res
}