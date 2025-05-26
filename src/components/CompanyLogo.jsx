import React from 'react'
import slack from "../assets/slack.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"
import woocommerce from "../assets/woocommerce.png"
import amazon from "../assets/amazon.png"

const CompanyLogo = () => {
    const logos = [slack, amazon, woocommerce, meundies, sitepoint]
    return (
        <div className='w-full container overflow-hidden  mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start px-2 sm:px-4 lg:px-8'>
            <div className='w-[300px] shrink-0 text-gray-600 border-l-4 px-3 border-lime-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left'>Proud to have Samath IT Solutions <br />  as trusted partners.</div>
            <div className='flex animate-marquee whitespace-nowrap'>
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="company logo" className='mx-12 h-auto w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
                ))}

                {/**Duplicate logs */}
                {logos.map((logo, index) => (
                    <img key={`duplicate-${index}`} src={logo} alt="company logo" className='mx-12 h-auto w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' />
                ))}

            </div>

        </div>
    )
}

export default CompanyLogo