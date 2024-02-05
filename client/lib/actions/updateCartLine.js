"use server"

import { shopifyData } from "../shopify"

export default async function updateCartLine(cartId, lineId, quantity) {
    const querry = `
    mutation UpdateCartLine {
        cartLinesUpdate(cartId: "${cartId}", lines: [{id: "${lineId}", quantity: ${quantity}}]) {
          cart {
            cost {
              totalAmount {
                amount
                currencyCode
              }
            }
            totalQuantity
            lines(first: 100) {
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

    const res = await shopifyData(querry)
    return res.data.cartLinesUpdate.cart;

}