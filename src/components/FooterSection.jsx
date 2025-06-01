import React from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { LiaFaxSolid } from "react-icons/lia";
import { MdOutlineEmail, MdCopyright } from "react-icons/md";

const FooterSection = () => {

  const footerLinks = {
    company: [
      { name: 'About', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'How it Works', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
    getHelp: [
      { name: 'Support Carrer', href: '#' },
      { name: '24h Service', href: '#' },
      { name: 'Quick Chat', href: '#' },
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Policy', href: '#' },
      { name: 'Business', href: '#' },
    ],
    contact: [
      { name: 'WhatsApp', href: '#' },
      { name: 'Support 24', href: '#' },
    ],
  }

  return (
    <section className='bg-gray-300'>
      <div className='container mx-auto py-20 px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12'>
          <div className='col-span-1 md:col-span-3'>
            {/** * Logo */}
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-10 h-10 bg-gray-800 text-white rounded-full opacity-75 hover:opacity-100 transition-opacity flex justify-around">
                <div className="my-auto from-neutral-500 text-2xl">S</div>
              </div>
              <div className="w-10 h-10 bg-gray-400 text-white -ml-4 rounded-full opacity-100 hover:opacity-75 flex justify-around">
                <div className="my-auto from-neutral-500 text-2xl">a</div>
              </div>
            </div>
            <div className='mt-3'>
              <h2 className='text-3xl font-bold text-gray-800'>Lorem ipsum dolor sit amet consectetur.</h2>
              <div className='mt-3'>
                <p className=''>127 North Stt</p>
                <p className=''>Suite 420</p>
                <p className=''>Carrington NC 27601</p>
                <p className='mt-3 flex items-center'><IoIosPhonePortrait className='mr-2 text-2xl text-gray-800' /> 919-555-3333</p>
                <p className='flex items-center'><LiaFaxSolid className='mr-2 text-2xl text-gray-800' /> 919-555-3344</p>
                <p className='flex items-center'><MdOutlineEmail className='mr-2 text-2xl text-gray-800' /> shopname@ourbrand.com</p>
              </div>
            </div>
          </div>

          <div className='col-span-1 md:col-span-9'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className='text-lg font-medium mb-4 uppercase'>{category}</h3>
                  <ul className='space-y-2'>
                    {
                      links.map((link, index) => (
                        <li key={index}>
                          <a href="#" className='text-gray-700 hover:text-gray-900'> {link.name}</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/** Footer bottom section*/}
        <div>
          <div >
            <hr className='mt-24 border-gray-200' />
            <p className='flex flex-col md:flex-row justify-center items-center gap-2 mt-3 text-gray-600' >Copyright <MdCopyright /> {new Date().getFullYear()} <a href="https://samath.com.au" target="_blank">Samath IT Solutions</a></p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default FooterSection