export const shopifyData = async (query) => {
    const URL = `https://${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}/api/2024-01/graphql.json`
    const options = {
        endpoint: URL,
        method: "POST",
        headers: {
            "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_PUBLIC_ACCESS_TOKEN,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        cache: 'no-store' 
    };

    try {
        const data = await fetch(URL, options).then((response) => {
            return response.json();
        });

        return data;
    } catch (error) {
        throw new Error("Products not fetched", error);
    }
}