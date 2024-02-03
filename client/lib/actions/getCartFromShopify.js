"use server"

import { getShopifyCart } from "../shopify";

export default async function getCartFromShopify(cartId) {
    const res = await getShopifyCart(cartId)
    return res;
}