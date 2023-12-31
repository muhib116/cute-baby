import React from 'react'

const CartHeader = () => {
  return (
    <div className='flex justify-between'>
        <p className='font-bold'>My Cart</p>
        <p
            className='text-[var(--primaryColor)]'
        >
            5 items
        </p>
    </div>
  )
}

export default CartHeader