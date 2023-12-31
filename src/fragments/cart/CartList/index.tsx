import React from 'react'
import CartItem from './fragments/CartItem'
import { cartData } from '@/placeholderData/data'

const CartList = () => {
  return (
    <div className='p-6'>
        <div className='flex justify-between'>
            <p className='font-bold'>My Cart</p>
            <button
                className='text-[var(--primaryColor)]'
            >Add more</button>
        </div>

        <div className='grid gap-6 mt-4'>
            {
                cartData.map((item, index) => (
                    <CartItem
                        key={index}
                        data={item}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default CartList