import { pricePrint } from '@/helper'
import React from 'react'

const CalculationSummary = () => {
  return (
    <>
        <div className='capitalize space-y-1 border-b pb-3'>
            <div
                className='flex gap-4'
            >
                <p
                    className='w-1/2 text-sm opacity-80'
                >
                    items:
                </p>
                <p
                    className='font-medium text-right w-1/2 opacity-80'
                >
                    { 6 }
                </p>
            </div>
            <div
                className='flex gap-4'
            >
                <p
                    className='w-1/2 text-sm opacity-80'
                >
                    delivery charge:
                </p>
                <p
                    className='font-medium text-right w-1/2 opacity-80'
                >
                    { pricePrint(29) }
                </p>
            </div>
            <div
                className='flex gap-4'
            >
                <p
                    className='w-1/2 text-sm opacity-80'
                >
                    sub total:
                </p>
                <p
                    className='font-medium text-right w-1/2 opacity-80'
                >
                    { pricePrint(60) }
                </p>
            </div>
        </div>

        <div
            className='flex gap-4 mt-3 text-xl font-medium'
        >
            <p
                className='w-1/2'
            >
                Total:
            </p>
            <p
                className='text-right w-1/2'
            >
                { pricePrint(89) }
            </p>
        </div>
    </>
  )
}

export default CalculationSummary