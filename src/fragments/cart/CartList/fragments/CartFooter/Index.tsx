import { pricePrint } from '@/helper'
import React from 'react'
import CalculationSummary from './CalculationSummary'
import PaymentMethod from './PaymentMethod'
import CartImage from '@/fragments/Cart/cart.png'
import Img from '@/app/components/Img'
import { twMerge } from 'tailwind-merge'

const CartFooter = (props: {
  className?: string;
}) => {

  const { className } = props
  return (
    <div
      className={twMerge([
        'h-full',
        className
      ].filter(Boolean).join(' '))}
    >
      <CalculationSummary />

      <div className='mt-6 bg-white h-full -ml-6 -mr-6 px-6 pt-4 rounded-t-[30px]'>
        <PaymentMethod />
        <button className='flex justify-center items-center gap-4 w-full shadow rounded mt-5 font-bold text-2xl bg-[var(--primaryColor)] text-white border border-[var(--cartColor)] py-2 px-4'>
          <Img
            className='w-10'
            src={ CartImage.src }
            width={ 30 }
            height={ 30 }
            blur_src={ CartImage.blurDataURL }
            alt='Place order button icon'
          />
          Place Order
        </button>
      </div>
    </div>
  )
}

export default CartFooter