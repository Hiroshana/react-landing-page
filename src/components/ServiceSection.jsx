import React from "react";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

const ServiceSection = () => {
    const services = [
        {
            icon: <BsStack className="w-8 h-8 text-indigo-600" />,
            title: "Web Design",
            description: "One for all and all for one, Muskehounds are always ready.",
            link: "#learn-more",
        },
        {
            icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
            title: "Ad-Creatives",
            description: "Alphabet Village and the subline of her own road.",
            link: "#learn-more",
        },
        {
            icon: <FiSettings className="w-8 h-8 text-red-400" />,
            title: "Automation",
            description: "Little Blind Text should turn around and return.",
            link: "#learn-more",
        },
        {
            icon: <BiTime className="w-8 h-8 text-cyan-400" />,
            title: "Infographics",
            description: "Nothing the copy said could convince her.",
            link: "#learn-more",
        },
    ];

    return (
        <section id="service" className="w-full bg-gray-white">
            <div className="container mx-auto py-20 px-6 lg:px-8">
                <div class="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">

                    {/**Left side */}
                    <div className="w-full md:w-3/5">
                        <h2 className="text-3xl md:text-4xl text-gray-700 font-bold  mb-3">
                            Future of support with new shape
                        </h2>
                        <p className="text-gray-600 text-lg ">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                            officiis praesentium id quasi aliquid libero delectus debitis
                            recusandae, eligendi repudiandae placeat, veritatis nesciunt.
                        </p>

                        <div className="mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                                </div>
                                <span className="text-gray-600">
                                    UX design content strategy
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                                </div>
                                <span className="text-gray-600">
                                    UX design content strategy
                                </span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button className="bg-gray-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>


                    {/**Right side */}
                    <div className="grid gird-cols-1 md:grid-cols-2 gap-8">
                        {
                            services.map((service, index) => (
                                <div key={index} className="bg-white max-w-100 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <div className="mb-4">{service.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <a href="#" className="text-blue-800 font-medium hover:text-blue-600 transition-colors">LEARN MORE</a>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
