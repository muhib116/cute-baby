'use client'
import React, { useState } from 'react'
import CartOuterButton from './fragments/CartOuterButton'
import EmptyCart from './EmptyCart'
import { twMerge } from 'tailwind-merge'
import CartList from './CartList'


const Cart = () => {
  const [ toggleCart, setToggleCart ] = useState(false)
  return (
    <div 
      className={
          twMerge([
          'fixed top-0 w-[400px] z-50 h-full bg-slate-100 shadow-xl border-l duration-300 ease-in',
          toggleCart ? 'right-0' : '-right-[400px]'
        ].filter(Boolean).join(' '))
      }
    >
      <CartOuterButton
        isOpen={ toggleCart }
        setToggleCart={ setToggleCart }
        className='absolute right-full bottom-1/2 bg-white'
      />
      
      {/* <EmptyCart /> */}
      <CartList />
    </div>
  )
}

export default Cart