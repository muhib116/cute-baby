'use client'
import React, { useState } from 'react'
import CartOuterButton from './fragments/CartOuterButton'
import EmptyCart from './EmptyCart'
import { twMerge } from 'tailwind-merge'


const Cart = () => {
  const [ toggleCart, setToggleCart ] = useState(false)
  return (
    <div 
      className={
          twMerge([
          'fixed top-0 w-[400px] z-50 h-full bg-white shadow-xl border-l duration-300 ease-in',
          toggleCart ? 'right-0' : '-right-[400px]'
        ].filter(Boolean).join(' '))
      }
    >
      { toggleCart ? 'open' : 'closed' }
      <CartOuterButton
        isOpen={ toggleCart }
        setToggleCart={ setToggleCart }
        className='absolute right-full bottom-1/2 bg-white'
      />
      
      <EmptyCart />
    </div>
  )
}

export default Cart