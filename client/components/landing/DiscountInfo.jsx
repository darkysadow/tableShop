import React from 'react'

const DiscountInfo = () => {
    return (
        <div className='container mx-auto flex flex-col items-center my-10 py-10 gap-y-5'>
            <h2 className='text-3xl font-medium'>Get Discount Info</h2>
            <h3 className='w-3/5 max-md:w-3/4 text-center text-md leading-7 text-[#6e6e6e]'>Subscribe to the TableShop mailing list to receive updates on new arrivals, special offers and other discount information.</h3>
            <form className='flex flex-col w-1/2 max-md:w-3/4 gap-y-10 items-center'>
                <div className="gap-y-4 w-full">
                    <input type="email" name="" id="" className='w-full text-center py-3 focus:outline-none' placeholder='Enter your email...' />
                    <hr />
                </div>

                <button className='uppercase w-44 py-3 border-2 border-black text-xs tracking-widest font-medium transition-all hover:border-[#bd8448] hover:text-[#bd8448]'>
                    subscribe
                </button>
            </form>
        </div>
    )
}

export default DiscountInfo