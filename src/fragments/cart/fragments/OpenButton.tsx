import Img from '@/app/components/Img'
import { pricePrint } from '@/helper'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import cartIcon from '../cart.png'

const OpenButton = (props: {
    className: string
}) => {
    const { className } = props
  return (
    <div className={
        twMerge([
            'text-center w-[100px] font-bold rounded-l shadow-lg border border-r-0 overflow-hidden',
            className
        ].filter(Boolean).join(' '))
    }>
        <Img
            className='p-2 w-[70%] mx-auto'
            src={ cartIcon.src }
            width={ 50 }
            height={ 50 }
            blur_src={ cartIcon.blurDataURL }
            alt="Cart Icon"
        />
        0 Items
        <div 
            className='bg-[var(--cartColor)]  text-white text-lg mt-1 truncate'
            title={ pricePrint(99999999) }
        >
            { pricePrint(99999999) }
        </div>
    </div>
  )
}

export default OpenButton