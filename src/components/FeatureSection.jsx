import React from 'react'
import { FaSearch, FaCog } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";

const FeatureSection = () => {
    const features = [
        {
            icon: <FaSearch className='text-lime-500 size-10' />,
            title: "Find out what you need",
            description: "We present you a proposal and discuss nitty-gritty like"
        },
        {
            icon: <FaCog className='text-lime-500 size-10' />,
            title: "Work out the details",
            description: "Communication protocols apart from engagement models"
        },
        {
            icon: <MdRocketLaunch className='text-lime-500 size-10' />,
            title: "We get to work fast",
            description: "Protocols apart from engage models, pricing billing"
        }
    ]

    return (
        <section className='container mx-auto px-4 py-20'>
            { /** * Header text */}
            <div className='text-center mb-15'>
                <h2 className='text-3xl font-bold mb-2'>How can we help your business</h2>
                <p className='text-gray-600'>When you resell besnik, you build trust and increase</p>
                <div className='border-t-2 border-lime-500 w-[5%] flex-row flex-col items-center mx-auto mt-1'></div>
            </div>

            { /** * Features box */}

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {features.map((feature, index) => (
                    <div key={index}>
                        <div className='flex flex-col items-center'>
                            <div className='mb-3'>
                                <div className='w-24 h-24 rounded-full flex justify-center items-center bg-gray-300'>
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className='text-2xl font-medium text-gray-500'>{feature.title}</h3>
                            <p className='text-gray-600'>{feature.description}</p>
                        </div>

                    </div>
                ))}

            </div>

            { /** * Button */}
            <div className='text-center mt-15'>
                <button className='bg-lime-400 text-gray-800 cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-lime-600 hover:text-white transition-colors relative'>Become a partner
                    <div className='absolute -z-10 w-full h-full rounded-full  bg-lime-300 blur-xl top-0 left-0'></div>
                </button>
            </div>

        </section>
    )
}

export default FeatureSection