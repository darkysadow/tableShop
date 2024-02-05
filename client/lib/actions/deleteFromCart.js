"use server"

import { shopifyData } from "../shopify"

export default async function deleteFromCart(cartId, itemId) {
    console.log(itemId);
    const querry = `
    mutation RemoveFromCart {
        cartLinesRemove(
          cartId: "${cartId}"
          lineIds: ["${itemId}"]
        ) {
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
    return res.data.cartLinesRemove.cart
}