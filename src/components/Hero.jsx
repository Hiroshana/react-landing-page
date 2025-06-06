import React from "react";
import { motion } from "framer-motion"
import { fadeIn, textVariant } from '../utils/motion'
import { GiAlarmClock } from "react-icons/gi";
import { FaLongArrowAltRight } from "react-icons/fa";
import heroImage from '../assets/hero-image.png'

const Hero = () => {
    return (
        <section id="home" className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8">
            {/** left col*/}
            <div className="w-full md:w-1/2 space-y-8">
                {/** Start Badge */}
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView="show">
                    <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100">
                        <span className="text-lime-500 group-hover:text-amber-300 group-hover:scale-110 transition-transform">
                            ⭐
                        </span>
                        <span className="text-sm font-medium">Jump start your growth</span>
                    </div>
                </motion.div>

                <motion.h1
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500">
                    We boost the growth for
                    <span className="text-lime-400 relative inline-block">
                        Startup to Fortune 500<span className="absolute bottom-0 left-0 w-full h-0.5 bg-lime-200/60"></span>
                    </span>
                    Companies
                    <span className="pl-2 inline-block align-middle animate-pulse">
                        <GiAlarmClock className="size-4xl text-red-400" />
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeIn('up', 0.4)}
                    initial="hidden"
                    whileInView="show"
                    className="text-gray-600 text-lg md:text-xl max-w-xl">Get the most accurate leads, sales people training and conversions, tools and more - all within the some one billing.</motion.p>

                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView="show"
                    className="flex gap-3 max-w-md">
                    <input type="email" placeholder="Email address" className="flex-1 px-6 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:ring-0.5 focus:ring-gray-400 transition-all" />
                    <button className="bg-gray-500 text-white px-6 py-4 rounded-xl hover:bg-gray-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-gray-300"><FaLongArrowAltRight /></button>
                </motion.div>
            </div>

            {/** right col */}
            <motion.div variants={fadeIn('left', 0.6)}
                initial="hidden"
                whileInView="show"
                className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
                <div>
                    <img src={heroImage} alt="hero image" className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
