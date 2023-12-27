"use client"
import Container from '@/fragments/Container'
import { EnvelopeSimple, MapTrifold, MessengerLogo, PhoneCall } from '@phosphor-icons/react'
import React from 'react'

const contactUs = () => {
  return (
    <Container>
        <div>
            <div className='grid grid-cols-2 gap-x-8'>
                <div>
                    <h3 className='font-semibold text-2xl mb-2'>Contact us</h3>
                    <p className='max-w-[600px] mb-8 text-black/60'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt autem eligendi error ratione.</p>
                    <div>
                        <form action="">
                            <div className='grid grid-cols-2 gap-4'>
                                <input type="text" placeholder='Full Name' className='w-full px-4 py-2.5 bg-inherit border border-black/20 rounded mb-4 placeholder:text-sm placeholder:text-black/40'/>
                                <input type="email" placeholder='Your email' className='w-full px-4 py-2.5 bg-inherit border border-black/20 rounded mb-4 placeholder:text-sm placeholder:text-black/40'/>
                            </div>
                            <textarea placeholder='Message' className='outline-[var(--topBarBg)] w-full px-4 py-2.5 bg-inherit border border-black/20 rounded mb-4 placeholder:text-sm placeholder:text-black/40 min-h-[200px]'></textarea>
                            <button className='w-full px-4 text-white py-2.5 bg-[var(--topBarBg)] rounded'>SUBMIT</button>
                        </form>
                    </div>
                </div>
                <div className='bg-white p-4 shadow border border-gray-50 rounded'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73463.41801673989!2d90.38825384272918!3d24.736653731498556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564fbe84f6cbe1%3A0x9fdd8aa3d42ccc3e!2sMymensingh%20District!5e0!3m2!1sen!2sbd!4v1703710719513!5m2!1sen!2sbd" className='w-full h-full rounded shadow border'  loading="lazy" ></iframe>
                </div>
            </div>

            <div className='grid grid-cols-4 my-10 gap-4'>
                <div className='shadow bg-white rounded px-4 py-8 text-center'>
                    <MapTrifold size={50}  className='text-[var(--topBarBg)] mb-4'/>
                    <h5>Mymensingh, Bangladesh</h5>
                </div>
                <div className='shadow bg-white rounded px-4 py-8 text-center'>
                    <EnvelopeSimple size={50}  className='text-[var(--topBarBg)] mb-4'/>
                    <h5>shop@gmail.com</h5>
                </div>
                <div className='shadow bg-white rounded px-4 py-8 text-center'>
                    <PhoneCall size={50}  className='text-[var(--topBarBg)] mb-4'/>
                    <h5>016 0328 3901</h5>
                </div>
                <div className='shadow bg-white rounded px-4 py-8 text-center'>
                    <MessengerLogo size={50}  className='text-[var(--topBarBg)] mb-4'/>
                    <h5>The Shop BD</h5>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default contactUs