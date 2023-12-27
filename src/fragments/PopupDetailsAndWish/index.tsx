'use client'

import Popup from '@/app/components/Popup'
import { ArrowSquareOut } from '@phosphor-icons/react'
import React, { useState } from 'react'
import SingleProduct from '../singleProduct/SingleProduct'
import Specification from '../singleProduct/Specification'

const Index = () => {
    const [popupToggle, setPopupToggle] = useState<boolean>(false)
  return (
    <>
        <div className='absolute hidden group-hover:flex items-center justify-center gap-2 z-20 right-0 top-0'>
            <div className='flex items-center justify-center gap-2'>
                <button
                    className='p-2 bg-gray-700 text-white'
                    onClick={ () => setPopupToggle(true)}
                >
                    <ArrowSquareOut size={20} weight="light" />
                </button>
                {/* <button
                    className='p-2 bg-red-400 text-white'
                >
                    <HeartStraight size={20} weight="light" />
                </button> */}
            </div>
        </div>

        <Popup
            toggle={ popupToggle }
            onClose={ (value: boolean) => setPopupToggle(value) }
        >
            <>
                <SingleProduct />
                <div className='bg-red-50 mt-6 p-6'>
                    <Specification />
                </div>
            </>
        </Popup>
    </>
  )
}

export default Index