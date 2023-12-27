'use client'

import Img from '@/app/components/Img'
import React from 'react'

const images = [
  'https://shop.activeitzone.com/public/uploads/all/dHPxFFKzg1Wfa1VnR29LmLTAzAtog3Y13FPZu9Ko.webp',
  'https://shop.activeitzone.com/public/uploads/all/WoQDLrxn7JdjoVGwHSUWZH8D1TVHHTPeoCrX1UAm.webp',
  'https://shop.activeitzone.com/public/uploads/all/HHq0vJ89L8EzTDlwymcNVfbOhfjYQetQt0R4G8rk.webp',
  'https://shop.activeitzone.com/public/uploads/all/dHPxFFKzg1Wfa1VnR29LmLTAzAtog3Y13FPZu9Ko.webp',
  'https://shop.activeitzone.com/public/uploads/all/HHq0vJ89L8EzTDlwymcNVfbOhfjYQetQt0R4G8rk.webp',
  'https://shop.activeitzone.com/public/uploads/all/dHPxFFKzg1Wfa1VnR29LmLTAzAtog3Y13FPZu9Ko.webp',
  'https://shop.activeitzone.com/public/uploads/all/WoQDLrxn7JdjoVGwHSUWZH8D1TVHHTPeoCrX1UAm.webp',
  'https://shop.activeitzone.com/public/uploads/all/HHq0vJ89L8EzTDlwymcNVfbOhfjYQetQt0R4G8rk.webp',
  'https://shop.activeitzone.com/public/uploads/all/dHPxFFKzg1Wfa1VnR29LmLTAzAtog3Y13FPZu9Ko.webp',
  'https://shop.activeitzone.com/public/uploads/all/WoQDLrxn7JdjoVGwHSUWZH8D1TVHHTPeoCrX1UAm.webp',
  'https://shop.activeitzone.com/public/uploads/all/HHq0vJ89L8EzTDlwymcNVfbOhfjYQetQt0R4G8rk.webp',
]

function Image() {
  return (
    <div>
      <Img
        src='https://shop.activeitzone.com/public/uploads/all/WoQDLrxn7JdjoVGwHSUWZH8D1TVHHTPeoCrX1UAm.webp'
        width={ 400 }
        height={ 400 }
        alt="Product Title"
      />
      <div className='flex gap-2 py-1 overflow-auto snap-x snap-mandatory no-scrollbar'>
        {
          images.map((image, index) => (
            <Img
              className='w-[67px] aspect-square flex-shrink-0 flex-grow-0 snap-center rounded shadow cursor-pointer'
              key={ index }
              src={image}
              width={67}
              height={67}
              alt='Product image'
            />
          ))
        }
      </div>
    </div>
  )
}

export default Image