'use client'

import Img from '@/app/components/Img'
import React, { useEffect, useState } from 'react'

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

function ProductImage() {
  const [ currentImage, setCurrentImage ] = useState<string>(images[0])

  return (
    <div className='grid gap-2'>
      <Img
        src={ currentImage }
        width={ 400 }
        height={ 400 }
        alt="Product Title"
      />
      <div className='flex gap-2 py-1 overflow-auto snap-x snap-mandatory no-scrollbar'>
        {
          images.map((image, index) => (
            <div
              key={ index }
              className='w-[67px] aspect-square flex-shrink-0 flex-grow-0 snap-center rounded shadow cursor-pointer'
              onClick={
                () => {
                  setCurrentImage(images[index])
                }
              }
            >
              <Img
                src={image}
                width={67}
                height={67}
                alt='Product image'
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductImage