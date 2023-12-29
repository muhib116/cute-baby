import Img from '@/app/components/Img'
import React from 'react'
import cartIcon from '../cart.png'
import { pricePrint } from '@/helper'
import { twMerge } from 'tailwind-merge'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
const cartOuterButton = (props: {
    className: string
}) => {
    const { className } = props
  return (
    true ?
    <button className={twMerge([
        'text-center  font-bold rounded-l w-[100px] shadow-lg border border-r-0 px-2 overflow-hidden',
        className
    ].filter(Boolean).join(' '))}>
        <CaretRight color='#000' size={25} />
    </button>
    :
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

export default cartOuterButton