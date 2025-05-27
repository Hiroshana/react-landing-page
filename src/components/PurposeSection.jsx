import React from 'react'
import { FaRegDotCircle } from "react-icons/fa";

const PurposeSection = () => {

    const features = [
        {
            title: "Built for impact",
            description: "We identify and nurture a truly diverse team of designers, developers and marketers"
        },
        {
            title: "In sync with you",
            description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
        }
    ];

    return (
        <section id="about" className='w-full bg-gray-50'>
            <div className='container mx-auto py-20 px-6'>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="...">
                        <div>
                            <p className=' text-gray-400 text-2xl mb-2'>ACHIEVE MORE</p>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-500'>A convoy's purpose is to ensure the safety and coordination of the team while traveling together</h2>
                        </div>
                    </div>

                    {
                        features.map((feature, index) => (
                            <div div key={index} className='pb-4'>
                                <div className='flex flex-row items-center gap-3 text-2xl mb-2'>
                                    <FaRegDotCircle className='text-lime-500' />
                                    <h3 className='text-gray-400'>{feature.title}</h3>
                                </div>
                                <div>

                                    <p className='text-gray-500'>{feature.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section >
    )
}

export default PurposeSection