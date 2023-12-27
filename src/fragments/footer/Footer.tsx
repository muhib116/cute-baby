"use client"

import { EnvelopeSimple, FacebookLogo, GoogleChromeLogo, InstagramLogo, MapPin, Phone, TwitterLogo, YoutubeLogo } from '@phosphor-icons/react'
import React from 'react'

function Footer() {
  return (
    <div>
      <div className='bg-[#181818]'>
        <div className='py-[60px] grid grid-cols-5 container mx-auto'>
          <div className='px-4'>
            <h5 className='text-white mb-5 font-medium'>Information</h5>
            <div className='font-light text-[0.8rem] text-[#a7a7a7]'>
              <a href="#" className='block mb-2'>About Us</a>
              <a href="#" className='block mb-2'>Delivery Information</a>
              <a href="#" className='block mb-2'>Privacy Policy</a>
              <a href="#" className='block mb-2'>Terms & Conditions</a>
              <a href="#" className='block mb-2'>Site Map</a>
            </div>
          </div>
          <div className='px-4'>
            <h5 className='text-white mb-5 font-medium'>Extras</h5>
            <div className='font-light text-[0.8rem] text-[#a7a7a7]'>
              <a href="#" className='block mb-2'>Brands</a>
              <a href="#" className='block mb-2'>Gift Certificates</a>
              <a href="#" className='block mb-2'>Affiliate</a>
              <a href="#" className='block mb-2'>Specials</a>
              <a href="#" className='block mb-2'>Contact Us</a>
            </div>
          </div>
          <div className='px-4'>
            <h5 className='text-white mb-5 font-medium'>My Account</h5>
            <div className='font-light text-[0.8rem] text-[#a7a7a7]'>
              <a href="#" className='block mb-2'>My Account</a>
              <a href="#" className='block mb-2'>Order History</a>
              <a href="#" className='block mb-2'>Wish List</a>
              <a href="#" className='block mb-2'>Newsletter</a>
              <a href="#" className='block mb-2'>Returns</a>
            </div>
          </div>
          <div className='px-4'>
            <h5 className='text-white mb-5 font-medium'>Quick Links</h5>
            <div className='font-light text-[0.8rem] text-[#a7a7a7]'>
              <a href="#" className='block mb-2'>Seller Login</a>
              <a href="#" className='block mb-2'>Seller Sign Up</a>
              <a href="#" className='block mb-2'>Seller Handbook</a>
              <a href="#" className='block mb-2'>Seller Control Panel</a>
              <a href="#" className='block mb-2'>Seller FAQs</a>
            </div>
          </div>
          <div className='px-4'>
            <h5 className='text-white mb-5 font-medium'>Contact</h5>
            <div className='font-light text-[0.8rem] text-[#a7a7a7]'>
              <a href='#' className='mb-2 items-center flex gap-1'>
                <MapPin size={21} className='w-5'/>
                Mymensingh
              </a>
              <a href='#' className='mb-2 items-center flex gap-1'>
                <Phone size={21} className='w-5'/>
                017 7098-9591
              </a>
              <a href='#' className='mb-2 items-center flex gap-1'>
                <EnvelopeSimple size={21} className='w-5'/>
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