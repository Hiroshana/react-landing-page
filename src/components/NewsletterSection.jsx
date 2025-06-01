import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const NewsletterSection = () => {
    return (
        <section className='container mx-auto py-20 px-6 lg:px-8'>
            <div className='bg-lime-100 rounded-2xl overflow-hidden'>
                <div className='relative md:px-16 py-16 px-6 md:py-24'>
                    {/*** Gradient bg */}
                    <div className='absolute top-0 right-0 w-1/2 h-full bg-lime-200 clip-path-slant hidden md:block'></div>

                    <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>
                        {/** Left content */}
                        <div className='max-w-lg text-center md:text-left'>
                            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium mb-4'>Subscribe newsletters</h2>
                            <p>Best cooks and best delivery guys all at your service. Hot tasty food</p>
                        </div>

                        {/**Right content */}
                        <div className='flex lfex-col sm:flex-row gap-4 sm:gap-0'>
                            <input type="email" placeholder='Enter your email address' className='w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none' />
                            <button className="bg-gray-500 text-white px-6 py-4 rounded-l-none rounded-r-xl hover:bg-gray-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-gray-300">Discover</button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default NewsletterSection