import React from 'react'
import scheduleImage from '../assets/stats.webp'
import { FaLongArrowAltRight } from "react-icons/fa";

const ScheduleSection = () => {
    return (
        <section id="about" className='w-full bg-gray-50'>
            <div className='max-w-7xl mx-auto py-20 px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-12 md:gap-12'>
                    {/**Left section */}
                    <div className='w-full md:w-1/2 '>
                        <img src={scheduleImage} alt="schedule image" className='w-full h-auto' />
                    </div>

                    {/**Right section */}
                    <div className='w-full md:w-1/2 '>
                        <p className='text-lime-700 text-2xl mb-2'>SCHEDULE</p>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-500 mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                        <p className='text-gray-600 mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid cum, excepturi ipsa ut eaque omnis eos nobis suscipit natus ad optio iste fuga earum quibusdam eligendi reprehenderit? Totam, illum.</p>
                        <a className="text-lime-600 font-semibold text-xl flex items-center gap-2 hover:gap-4 transition-all" href="#">Explore scheduling features <FaLongArrowAltRight className='size-6' /></a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ScheduleSection