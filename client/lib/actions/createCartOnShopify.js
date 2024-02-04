"use server"

import { shopifyData } from "../shopify";

const createCartQuery = `
mutation {
    cartCreate (input: {}) {
      cart {
        id
      }
    }
  }
`

export default async function createCartOnShopify() {
    const res = await shopifyData(createCartQuery)
    return res.data.cartCreate.cart
}