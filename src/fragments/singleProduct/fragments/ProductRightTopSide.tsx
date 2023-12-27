import Price from '@/fragments/price/Price'
import ShowRatings from '@/fragments/ratings/ShowRatings'
import React from 'react'

function ProductRightTopSide() {
  return (
    <>
        <h1 className='text-[1.5rem] leading-[1.2] mb-[1rem] font-bold'>
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
                price: 400
            }}
            horizontal={ true }
            className='text-[1.2rem] my-[1rem]'
        />
        <p className='text-[1rem] border-b border-[var(--borderColor)] pb-[1rem] mb-[1rem] leading-[1.4] font-light tracking-[0.01]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        </p>
    </>
  )
}

export default ProductRightTopSide