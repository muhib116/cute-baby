import React from 'react'
import CartOuterButton from './fragments/cartOuterButton'

const Cart = () => {
  return (
    <div className='fixed right-0 top-0 w-[400px] z-50 h-full bg-white shadow-xl border-l'>
        <CartOuterButton
            className='absolute right-full top-1/2 -translate-y-1/2 bg-white'
        />
        <div className="flex flex-col justify-between">
        Cart
        </div>
    </div>
  )
}

export default Cart