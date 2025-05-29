import React, { useState } from 'react'

const PricingSection = () => {
    const [productCount, setProductCount] = useState(1)

    // Calculate product price base on product count 
    const starterPrice = Math.round(4000 * (productCount / 50))
    const businessPrice = Math.round(7500 * (productCount / 50))
    return (
        <section id="pricing" className='w-full bg-gray-50'>
            <div className='max-w-7xl mx-auto py-20 px-6'>
                <div className='mb-7'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-500 text-center'>Pricing</h2>
                </div>

                <div className='grid gird-cols-1 md:grid-cols-2 gap-8 mb-12'>
                    {/**Starter plan */}
                    <div className='bg-white p-8 rounded-lg shadow-lg text-center'>
                        <h3 className='text-xl text-gray-500 mb-3'>Starter</h3>
                        <p className='text-gray-800 text-3xl font-bold mb-6'>${starterPrice}/mo</p>
                    </div>

                    {/**Business price */}
                    <div className='bg-white p-8 rounded-lg shadow-lg text-center'>
                        <h3 className='text-xl text-gray-500 mb-3'>Business</h3>
                        <p className='text-gray-800 text-3xl font-bold mb-6'>${businessPrice}/mo</p>
                    </div>
                </div>

                <div className='max-w-xl mx-auto mb-8'>
                    <p className='text-center text-gray-600 mb-4'>{productCount} products</p>
                    <div className='relative px-4'>
                        <div className='flex items-center gap-2 '>
                            <span className='text-xs sm:text-sm text-gray-600'>1</span>
                            <input className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" type="range" min="1" max="50" value={productCount} onChange={(e) => setProductCount(parseInt(e.target.value))} />
                            <span className='text-xs sm:text-sm text-gray-600'>50</span>
                        </div>
                    </div>
                </div>

                <div className='mb-8 text-center'>
                    <p className='text-xl  text-gray-600 text-center mb-4'>Ready to get started?</p>
                    <button className='bg-lime-700 text-white font-semibold px-6 py-3 rounded-full hover:bg-lime-600'>Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default PricingSection