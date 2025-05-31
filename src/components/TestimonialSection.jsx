import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight, BsFillStarFill } from 'react-icons/bs';

const TestimonialSection = () => {

    const testimonials = [
        {
            id: 1,
            name: "Robin Ayala Doe",
            image: "https://randomuser.me/api/portraits/men/77.jpg",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
        },
        {
            id: 2,
            name: "John De marli",
            image: "https://randomuser.me/api/portraits/women/90.jpg",
            text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
        },
        {
            id: 3,
            name: "Rowhan Smith",
            image: "https://randomuser.me/api/portraits/men/90.jpg",
            text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
        },
        {
            id: 4,
            name: "Sarah Johnson",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
        },
        {
            id: 5,
            name: "Michael Chen",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
        },
        {
            id: 6,
            name: "Emma Wilson",
            image: "https://randomuser.me/api/portraits/women/28.jpg",
            text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
        },

    ];

    return (
        <section id="testimonial" className='w-full bg-gray-50'>
            <div className='max-w-7xl mx-auto py-20 px-6'>
                <div className='mb-7 text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-500 mb-2'>What our happy client says</h2>
                    <p className='text-gray-600'>Things that make it the best place to start trading</p>
                </div>

                {/**Testimonial cards */}
                <div>
                    {/**swiper cards */}
                    <Swiper
                        navigation={
                            {
                                nextEl: '.swiper-button-next-custom',
                                prevEl: '.swiper-button-prev-custom'
                            }
                        }
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Navigation]}
                        className='testimonial-swiper md:mb-12'>

                        {
                            testimonials.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div className='bg-white p-8 rounded-lg shadow-md h-full text-center'>
                                        <div className='w-24 h-24 mx-auto mb-4'>
                                            <img src={testimonial.image} alt={'image'} className='w-full h-full object-cover rounded-full' />
                                        </div>
                                        <div className='flex flex-row justify-center'>
                                            {[...Array(5)].map((_, starIndex) => (
                                                <span className=''><BsFillStarFill className='text-amber-300' /></span>
                                            ))}
                                        </div>
                                        <h3 className='text-xl font-semibold mb-3 text-gray-600'>{testimonial.name}</h3>
                                        <p className='text-gray-600'>{testimonial.text}</p>
                                    </div>
                                </SwiperSlide>


                            ))
                        }

                    </Swiper>


                    {/**navigational button */}
                    <div className='flex justify-center gap-4 mt-8'>
                        <button className='swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-lime-100 hover:text-gray-700 transition-all duration-200'>
                            <BsChevronLeft className='size-5' />
                        </button>
                        <button className='swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-lime-100 hover:text-gray-700 transition-all duration-200'>
                            <BsChevronRight className='size-5' />
                        </button>

                    </div>

                </div>


            </div>
        </section >
    )
}

export default TestimonialSection