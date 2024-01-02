import React from 'react'
import CartItem from './fragments/CartItem'
import { cartData } from '@/placeholderData/data'
import CartFooter from './fragments/CartFooter/Index'
import CartHeader from './fragments/CartHeader'

const CartList = () => {
  return (
    <div className='p-6 pb-0 h-full flex flex-col'>
        <div className='flex-1 h-[50%]'>
            <CartHeader />

            <div className='grid gap-4 mt-4 h-[84%] overflow-y-auto'>
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

        <CartFooter
            className='flex-1'
        />
    </div>
  )
}

export default CartList