"use server"

import { createCartQuery } from "../cart";
import { shopifyData } from "../shopify";

export default async function createCartOnShopify() {
    const res = await shopifyData(createCartQuery)
    return res.data.cartCreate.cart.id
}