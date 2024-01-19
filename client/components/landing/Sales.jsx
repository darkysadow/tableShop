import React from 'react'

import atlantMain from '@/public/wtp/Atlant/oak_boras/main.jpg'
import atlantSecond from "@/public/wtp/Atlant/oak_boras/second.jpg"
import lindaMain from '@/public/wtp/Linda/oak_palena/main.jpg'
import lindaSecond from "@/public/wtp/Linda/oak_palena/second.jpg"
import trapeziaMain from '@/public/wtp/Trapezia/oak_boras/main.jpg'
import trapeziaSecond from "@/public/wtp/Trapezia/oak_boras/second.jpg"

import SalesCard from './SalesCard'

const saleGoods = [
    {
        goodName: "Table Atlant Oak Boras",
        tableType: "Atlant",
        material: "oak_boras",
        oldPrice: 280,
        salePrice: 260,
    },
    {
        goodName: "Table Linda Oak Palena",
        tableType: "Linda",
        material: "oak_palena",
        oldPrice: 320,
        salePrice: 290,
    },
    {
        goodName: "Table Trapezia Oak Boras",
        tableType: "Trapezia",
        material: "oak_boras",
        oldPrice: 290,
        salePrice: 210,
    },
]

const Sales = () => {
    return (
        <div className='w-full my-5'>
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