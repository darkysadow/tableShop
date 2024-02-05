import React from 'react'

import SalesCard from './SalesCard'

const saleGoods = [
    {
        goodName: "Table Atlant Oak Boras",
        tableType: "Atlant",
        material: "oak_boras",
        oldPrice: 280,
        salePrice: 260,
        availability: "In Stock",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        goodName: "Table Linda Oak Palena",
        tableType: "Linda",
        material: "oak_palena",
        oldPrice: 320,
        salePrice: 290,
        availability: "In Stock",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
    {
        goodName: "Table Trapezia Oak Boras",
        tableType: "Trapezia",
        material: "oak_boras",
        oldPrice: 290,
        salePrice: 210,
        availability: "Not Available",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

    },
]

const Sales = () => {
    return (
        <div className='w-full my-5 px-4'>
            <div className='container mx-auto flex flex-col my-10'>
                <div className='flex flex-col'>
                    <h2 className='text-center font-medium text-3xl'>Sale Off</h2>
                    <h3 className='text-center font-normal text-md text-[#323232]'>You might like discounted items</h3>
                </div>
                <div className='flex flex-row justify-start gap-x-[2%] flex-wrap py-10 max-md:flex-col'>
                    {saleGoods && saleGoods.map((item, index) => (
                        <SalesCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sales