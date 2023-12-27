import React from 'react'
import ProductImage from './fragments/ProductImage'
import ProductRightTopSide from './fragments/ProductRightTopSide'

function SingleProduct() {
  return (
    <div className='flex min-h-[100px]'>
        <div className='w-[400px] aspect-square flex-shrink-0'>
            <ProductImage />
        </div>
        <div className='w-full'>
            <ProductRightTopSide />
        </div>
    </div>
  )
}

export default SingleProduct