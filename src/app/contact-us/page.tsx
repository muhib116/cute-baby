"use client"
import Container from '@/fragments/Container'
import { Bag, CaretCircleUp, EnvelopeSimple, Info, MapTrifold, MessengerLogo, PhoneCall } from '@phosphor-icons/react'
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
                                    <input type="text" placeholder='Full Name' className='w-full px-4 py-2.5 bg-inherit border border-black/20 rounded mb-4 placeholder:text-sm placeholder:text-black/40' />
                                    <input type="email" placeholder='Your email' className='w-full px-4 py-2.5 bg-inherit border border-black/20 rounded mb-4 placeholder:text-sm placeholder:text-black/40' />
                                </div>
                                <textarea placeholder='Message' className='outline-[var(--topBarBg)] w-full px-4 py-2.5 bg-inherit border border-black/20 rounded mb-4 placeholder:text-sm placeholder:text-black/40 min-h-[200px]'></textarea>
                                <button className='w-full px-4 text-white py-2.5 bg-[var(--topBarBg)] rounded'>SUBMIT</button>
                            </form>
                        </div>
                    </div>
                    <div className='bg-white p-4 shadow border border-gray-50 rounded'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73463.41801673989!2d90.38825384272918!3d24.736653731498556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564fbe84f6cbe1%3A0x9fdd8aa3d42ccc3e!2sMymensingh%20District!5e0!3m2!1sen!2sbd!4v1703710719513!5m2!1sen!2sbd" className='w-full h-full rounded shadow border' loading="lazy" ></iframe>
                    </div>
                </div>

                <div className='grid grid-cols-4 my-10 gap-4'>
                    <div className='shadow bg-white rounded px-4 py-8 text-center'>
                        <MapTrifold size={50} className='text-[var(--topBarBg)] mb-4' />
                        <h5>Mymensingh, Bangladesh</h5>
                    </div>
                    <div className='shadow bg-white rounded px-4 py-8 text-center'>
                        <EnvelopeSimple size={50} className='text-[var(--topBarBg)] mb-4' />
                        <h5>shop@gmail.com</h5>
                    </div>
                    <div className='shadow bg-white rounded px-4 py-8 text-center'>
                        <PhoneCall size={50} className='text-[var(--topBarBg)] mb-4' />
                        <h5>016 0328 3901</h5>
                    </div>
                    <div className='shadow bg-white rounded px-4 py-8 text-center'>
                        <MessengerLogo size={50} className='text-[var(--topBarBg)] mb-4' />
                        <h5>The Shop BD</h5>
                    </div>
                </div>
            </div>

            <div>
                <div className="w-[320px] fixed right-0 top-0 h-screen bg-white shadow">
                    <div className="flex justify-between px-4 py-1.5 bg-[#e4e0e1] items-center">
                        <div className='text-[#4f4f4f] text-[1rem] gap-2 font-semibold flex items-center'>
                            <Bag size={30} className='w-8' />
                            <span className="">3 ITEMS</span>
                        </div>
                        <div>
                            <button className='px-4 py-1 bg-red-400 hover:bg-red-500 duration-300 text-[0.8rem] text-white rounded'>Close</button>
                        </div>
                    </div>

                    <div className='bg-[#7a7879] font-semibold text-[0.8rem] text-white flex justify-between px-1 py-2'>
                        <div>
                            Shop ৳400 more and save ৳10 fee
                        </div>
                        <div className='flex items-center'>
                            <span>৳49</span>
                            <Info size={18} className='w-6'/>
                        </div>
                    </div>

                    <div className='grid place-content-center  h-[466px] border'>
                        <div>
                            <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-390/Default/components/header/ShoppingCart/images/emptyShoppingBag.png?q=low&webp=1&alpha=1" className='mx-auto w-[230px] h-[230px]' alt="" />
                            <p className='text-[#aaa] text-center mt-2 font-medium'>Your shopping bag is empty. Start shopping</p>
                        </div>
                    </div>

                    <div>
                        <div className='grid justify-center bg-[#f7f7f7] py-1 hover:bg-[#eeeeee] duration-300'>
                            <button className='flex gap-2 items-center text-sm text-black'>
                                <CaretCircleUp size={32} className='w-5' />
                                Have a special code?
                            </button>
                        </div>
                        <div className='px-4 text-black py-3 bg-[#f6f6f6] flex items-center gap-2 text-sm'>
                            <div>
                                <input type="number" placeholder="Referral/Discount Code" className='placeholder:text-sm px-2 placeholder:text-[#aaa] py-2 bg-[#e3e3e3]' />
                            </div>
                            <div>
                                <button className='bg-red-400 hover:bg-red-500 duration-300 text-white px-4 py-1.5 rounded'>Go</button>
                            </div>
                            <div>
                                <button>Close</button>
                            </div>
                        </div>
                    </div>

                    <div className='text-bold text-[#aaa] text-[17px] text-center py-4'>
                        <span>Hotline :</span>
                        <span>16710</span>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default contactUs