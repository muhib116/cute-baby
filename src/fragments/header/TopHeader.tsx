'use client'
import React from 'react'
import { AndroidLogo, AppStoreLogo, Phone, Heart, PushPinSimple } from "@phosphor-icons/react"

const TopHeader = () => {
  return (
    <div className="text-[0.8rem] bg-[var(--topBarBg)] border-b border-b-color-[var(--bottomColor)] py-2 text-[var(--topBarTextColor)] hidden lg:block px-10">
        <div className="container mx-auto py-0 flex space-between">
            <div className="flex flex-wrap gap-[0.6rem] items-center flex-shrink-0 flex-1">
                <a href="#" className='flex gap-1 items-center whitespace-nowrap hover:text-[var(--topBarTextHoverColor)]'>
                    <AndroidLogo size={16} weight="light" />
                    play Store
                </a>

                <a href="#" className='flex gap-1 items-center whitespace-nowrap hover:text-[var(--topBarTextHoverColor)]'>
                    <AppStoreLogo size={16} weight="light" />
                    App Store
                </a>
            </div>
            
            <div className="flex flex-wrap gap-[0.6rem] items-center flex-shrink-0 flex-1 justify-end">

                <a href="#" className='flex gap-1 items-center whitespace-nowrap hover:text-[var(--topBarTextHoverColor)]'> 
                    <PushPinSimple size={16} weight="light" />
                    Track Order
                </a>

                <a href="#" className='flex gap-1 items-center whitespace-nowrap hover:text-[var(--topBarTextHoverColor)]'> 
                    <Phone size={16} weight="light" />
                    Help Line +01xxx-xxxxxx
                </a>

                <a href="#" className='flex gap-1 items-center whitespace-nowrap hover:text-[var(--topBarTextHoverColor)]'> 
                    <Heart size={16} weight="fill" />
                    Wishlist (0)
                </a>
            </div>
        </div>
    </div>
  )
}

export default TopHeader