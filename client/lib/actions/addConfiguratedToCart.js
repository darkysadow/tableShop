"use server"

import { shopifyData } from "../shopify"

export default async function addConfiguratedToCart(cartId, tabletopVariantId, legsVariantId) {
    const addToCartQuerry = `
    mutation AddToCart {
        cartLinesAdd(cartId: "${cartId}", lines: [{quantity: 1, merchandiseId: "${tabletopVariantId}"}, {quantity: 1, merchandiseId: "${legsVariantId}"}]) {
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