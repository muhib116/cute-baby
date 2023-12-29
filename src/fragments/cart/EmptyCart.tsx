import React from 'react'
import emptyCartImage from './empty-cart.png'
import Img from '@/app/components/Img'
import Link from 'next/link'

const EmptyCart = () => {
  return (
    <div className='py-4 h-full flex items-center justify-center'>
      <div>
        <Img
          className='w-[220px] mx-auto mb-10'
          src={ emptyCartImage.src }
          width={ 220 }
          height={ 220 }
          alt='Empty Cart Image'
          blur_src={ emptyCartImage.blurDataURL }
        />
        <p className='font-bold text-2xl text-center'>
          Your bag is 
          <span className='text-red-500'> Empty!</span>
        </p>

        <Link
          href='/'
          className='px-4 py-2 text-xl font-bold mt-10 block w-fit mx-auto rounded text-opacity-80 text-center'
        >
          Continue to shopping
        </Link>
      </div>
    </div>
  )
}

export default EmptyCart