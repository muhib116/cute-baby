import React from 'react'
import ProductImage from './fragments/ProductImage'
import ProductRightTopSide from './fragments/ProductRightTopSide'
import AddToCartForSingleProduct from './fragments/AddToCartForSingleProduct'

function SingleProduct() {
  return (
    <div className='flex gap-[1.5rem] min-h-[100px]'>
        <div className='w-[400px] aspect-square flex-shrink-0'>
            <ProductImage />
        </div>
        <div className='w-full'>
            <ProductRightTopSide />
            <AddToCartForSingleProduct />
            <div className='grid gap-1 my-[1rem]'>
              <p>
                <strong className='font-semibold'>Category</strong>: Clothing
              </p>
              <p>
                <strong className='font-semibold'>Available</strong>: 180 products in stock
              </p>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct