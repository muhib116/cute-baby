import Img from '@/app/components/Img'
import React from 'react'
import ShowRatings from '../ratings/ShowRatings'
import Price from '../price/Price'

function SingleProduct() {
  return (
    <div className='flex min-h-[100px]'>
        <div className='w-[400px] aspect-square flex-shrink-0 bg-gray-200'>
            <Img
                src='https://shop.activeitzone.com/public/uploads/all/WoQDLrxn7JdjoVGwHSUWZH8D1TVHHTPeoCrX1UAm.webp'
                width={ 400 }
                height={ 400 }
                alt="Product Title"
            />
        </div>
        <div className='w-full bg-gray-300'>
            <h1 className='text-[1.5rem] leading-[1.2] mb-1 font-bold'>
                MODELTY Pink Floral Maxi dress
            </h1>

            <div className='flex gap-2 items-center'>
                <ShowRatings
                    className='w-[100px]'
                    rating={ 3.5 }
                />
                <a
                    href='/'
                    className='font-light underline'
                >
                    (102) Review
                </a>
            </div>
            <Price
                data={{
                    offerPrice: 390.36,
                    price: 300
                }}
                horizontal={ true }
            />
        </div>
    </div>
  )
}

export default SingleProduct