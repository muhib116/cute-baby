"use client"

import { EnvelopeSimple, FacebookLogo, GoogleChromeLogo, InstagramLogo, MapPin, Phone, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react'
  import React from 'react'
const footerMenu = [
  {
    id: 1,
    title: 'Information',
    item1: 'About Us',
    item2: 'Delivery Information',
    item3: 'Privacy Policy',
    item4: 'Terms & Conditions',
    item5: 'Site Map'
  },
  {
    id: 2,
    title: 'Extras',
    item1: 'Brands',
    item2: 'Gift Certificates',
    item3: 'Affiliate',
    item4: 'Specials',
    item5: 'Contact Us'
  },
  {
    id: 3,
    title: 'My Account',
    item1: 'My Account',
    item2: 'Order History',
    item3: 'Wish List',
    item4: 'Newsletter',
    item5: 'Returns'
  },
  {
    id: 4,
    title: 'Quick Links',
    item1: 'Seller Login',
    item2: 'Seller Sign Up',
    item3: 'Seller Handbook',
    item4: 'Seller Control Panel',
    item5: 'Seller FAQs'
  },
]


function Footer() {
  return (
    <div>
      <div className='bg-[#181818]'>
        <div className='py-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 container mx-auto'>
          {
            footerMenu.map(item => (
              <div key={item.id} className='px-4'>
                <h5 className='text-white mb-5 font-medium'>{ item.title }</h5>
                <div className='font-light text-[0.8rem] text-[#a7a7a7]'>
                  <a href="#" className='block mb-2'>{ item.item1 }</a>
                  <a href="#" className='block mb-2'>{ item.item2 }</a>
                  <a href="#" className='block mb-2'>{ item.item3 }</a>
                  <a href="#" className='block mb-2'>{ item.item4 }</a>
                  <a href="#" className='block mb-2'>{ item.item5 }</a>
                </div>
              </div>
            ))
          }

          <div className='px-4'>
            <h5 className='text-white mb-5 font-medium'>Contact</h5>
            <div className='font-light text-[0.8rem] text-[#a7a7a7]'>
              <a href='#' className='mb-2 items-center flex gap-1'>
                <MapPin size={21} className='w-5' />
                Mymensingh
              </a>
              <a href='#' className='mb-2 items-center flex gap-1'>
                <Phone size={21} className='w-5' />
                017 7098-9591
              </a>
              <a href='#' className='mb-2 items-center flex gap-1'>
                <EnvelopeSimple size={21} className='w-5' />
                shop@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#181818] border-t border-[#3a3a3a]'>
        <div className='py-4 px-4 flex justify-between items-center container mx-auto'>
          <div className='text-white flex gap-3'>
            <a href="#">
              <FacebookLogo size={22} />
            </a>
            <a href="#">
              <TwitterLogo size={22} />
            </a>
            <a href="#">
              <YoutubeLogo size={22} />
            </a>
            <a href="#">
              <GoogleChromeLogo size={22} />
            </a>
            <a href="#">
              <InstagramLogo size={22} />
            </a>
          </div>
          <div>
            <span className='text-white text-[12px]'>
              Powered By
              <a href="#"> OpenCart </a>
              Portable - Mega Store © 2023
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer