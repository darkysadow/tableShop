"use client"

import { Rating } from '@mui/material'
import React, { useState } from 'react'
import Review from './Review'

const Additionals = ({ metafields }) => {
    const [openedTab, setOpenedTab] = useState("Additional")
    return (
        <>
            <div className="w-full px-2">
                <ul className="w-full overflow-x-auto pb-5 px-4 text-nowrap flex flex-row justify-center gap-x-20 my-5 font-medium max-md:justify-start text-[#7f7f7f]">
                    <li
                        onClick={(e) => setOpenedTab(e.target.outerText)}
                        className={"transition-colors cursor-pointer hover:text-black hover:transition-colors " + `${openedTab === 'Additional' && " text-black"}`}>Additional</li>
                    <li
                        onClick={(e) => setOpenedTab(e.target.outerText)}
                        className={"transition-colors cursor-pointer hover:text-black hover:transition-colors " + `${openedTab === 'Shopping & Return' && " text-black"}`}>Shopping & Return</li>
                    <li
                        onClick={(e) => setOpenedTab(e.target.outerText)}
                        className={"transition-colors cursor-pointer hover:text-black hover:transition-colors " + `${openedTab === 'Reviews' && " text-black"}`}>Reviews</li>
                </ul>
            </div>
            <div className='w-full px-2'>
                {openedTab === "Additional" ?
                    <div className='w-full'>
                        {metafields && metafields.map((metafield, index) => (
                            <div
                                key={index}
                                className='flex flex-row justify-between py-5 odd:bg-slate-50 px-5'
                            >
                                <div className='w-2/5 capitalize'>
                                    {metafield.key.split('_').join(' ')}
                                </div>
                                <div className="w-3/5 capitalize">
                                    {metafield.value}
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    openedTab === "Shopping & Return" ?
                        <div className='flex flex-col'>
                            <h3 className='text-black font-medium text-2xl my-5'>Returns Policy</h3>
                            <p className='text-[#525252]'>You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).

                                You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).

                                If you need to return an item, simply login to your account, view the order using the 'Complete Orders' link under the My Account menu and click the Return Item(s) button. We'll notify you via e-mail of your refund once we've received and processed the returned item.</p>
                            <h3 className='text-black font-medium text-2xl my-5'>Shipping</h3>
                            <p className='text-[#525252]'>We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.

                                When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.

                                Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.</p>
                        </div>
                        :
                        openedTab === "Reviews" &&
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-col items-center gap-y-5 py-5'>
                                <h3 className='text-black text-xl font-medium uppercase text-center'>customer reviews</h3>
                                <Rating name="read-only" value={4.5} precision={0.1} readOnly size="medium" />
                                <p>Based on 1 review</p>
                                <button className='px-7 py-3 bg-[#323232] transition-colors hover:bg-[#bd8448] text-white text-sm'>Write a review</button>
                            </div>
                            <hr />
                            <div>
                                <Review createdAt="Jan 11, 2024" description="Very Good" rating={5} senderName='matheu' title="Very good" />
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default Additionals