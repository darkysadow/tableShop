"use server"

import { shopifyData } from "../shopify"

export default async function getTabletops () {
    const tableQuery = `{
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

    const legsQuerry = `{
      collection(handle: "legs-parts") {
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
                        format
                        url
                      }
                    }
                  }
                }
              }
              variants(first: 2) {
                edges {
                  node {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }`

    const res = await shopifyData(tableQuery)
    const legsRes = await shopifyData(legsQuerry)
    const tabletop = {
        shapes: res?.data?.collection?.products?.edges.map((item) => ({
            label: item.node.title.split(" ")[0],
            imgSrc: item.node.images.edges[0].node.url,
            link: item.node.media.edges.find(edge => edge.node.sources)
                .node.sources.find(item => item.format === "glb").url,
            variants: item.node.variants.edges.map(item => (item.node))
        })),
        sizes: res?.data?.collection?.products?.edges.map((item) => ({
            variants: item.node.variants.edges.map(item => (item.node.title.split(' / ')[1]))
        })),
        materials: res?.data?.collection?.products?.edges.map((item) => ({
            variants: item.node.variants.edges.map(item => (item.node.title.split(' / ')[0]))
        })),
        legsTypes: legsRes?.data?.collection?.products?.edges.map(item => ({
            label: item.node.title.split(" ")[0],
            imgSrc: item.node.images.edges[0].node.url,
            link: item.node.media.edges.find(edge => edge.node.sources)
                .node.sources.find(item => item.format === "glb").url,
            variant: item.node.variants.edges[0].node.id
        }))
    }
    const allVariants = tabletop.sizes.reduce((acc, { variants }) => acc.concat(variants), []);
    const uniqueVariants = [...new Set(allVariants)];
    const uniqueVariantsArray = Array.from(uniqueVariants).map(label => ({ label }));
    tabletop.sizes = uniqueVariantsArray;

    const matAllVariants = tabletop.materials.reduce((acc, { variants }) => acc.concat(variants), []);
    const matUniqueVariants = [...new Set(matAllVariants)];
    const matUniqueVariantsArray = Array.from(matUniqueVariants).map(label => ({ label }));
    tabletop.materials = matUniqueVariantsArray;

    return tabletop
}