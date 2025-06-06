import React, { useState } from "react";
import { motion } from "framer-motion"
import { HiMenu, HiX } from "react-icons/hi";
import { fadeIn } from '../utils/motion'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About us" },
        { href: "#services", label: "Services" },
        { href: "#testimonials", label: "Testimonials" },
    ];
    return (
        <motion.nav
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="fixed top-0 left-0 right-0 gb-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
                {/** * Logo */}
                <div className="flex items-center gap-1 cursor-pointer">
                    <div className="w-10 h-10 bg-lime-500 rounded-full opacity-75 hover:opacity-100 transition-opacity flex justify-around">
                        <div className="my-auto from-neutral-500 text-2xl">S</div>
                    </div>
                    <div className="w-10 h-10 bg-gray-400 -ml-4 rounded-full opacity-100 hover:opacity-75 flex justify-around">
                        <div className="my-auto from-neutral-500 text-2xl">a</div>
                    </div>
                </div>

                {/*** Desktop nav bar */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`font-medium relative 
                                    after:absolute after:bottom-0 after:left-0 
                                    after:h-0.5 after:w-0 hover:after:w-full 
                                    after:bg-lime-700 after:transition-all
                                    ${activeLink === link.href
                                    ? "text-lime-500 after:w-full"
                                    : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/**
         * Mobile menu
         */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2"
                >
                    {isMenuOpen ? (
                        <HiX className="size-6" />
                    ) : (
                        <HiMenu className="size-6" />
                    )}
                </button>

                {/**Get in touch btn */}
                <button className="hidden md:block bg-lime-500 text-white px-6 py-2.5 rounded-lg hover:bg-lime-600 font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                    <a href="#newsletter">Get in touch</a>
                </button>
            </div>

            {/**
       * Mobile menu items
       */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 py-4">
                    <div className="container mx-auto px-4">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                onClick={() => {
                                    setActiveLink(link.href);
                                    setIsMenuOpen(false);
                                }}
                                className={`block text-dm font-medium py-2 ${activeLink === link.href ? "text-lime-500" : "text-gray-600"
                                    }`}
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/**Get in touch btn */}
                        <button className="w-full bg-lime-500 text-white px-6 py-2 rounded-lg hover:bg-lime-600 font-medium transition-all hover:shadow-lg hover:shadow-blue-100">
                            <a href="#newsletter">Get in touch</a>
                        </button>
                    </div>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;
