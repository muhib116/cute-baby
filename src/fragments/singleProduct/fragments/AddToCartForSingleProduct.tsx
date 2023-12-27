import React from 'react'
import AddMoreToCart from '@/app/components/AddMoreToCart'
import WishButton from '@/app/components/WishButton'

function AddToCartForSingleProduct() {
  return (
    <div className='flex items-center gap-3 font-bold'>
        Quantity:
        <AddMoreToCart
          data={{  }}
        />
        <button
            className='px-4 py-2 bg-gray-700 text-white rounded shadow'
        >
            Add To Cart
        </button>
        <WishButton />
    </div>
  )
}

export default AddToCartForSingleProduct