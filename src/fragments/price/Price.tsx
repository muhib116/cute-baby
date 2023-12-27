import { pricePrint } from '@/helper';
import React from 'react'
import { twMerge } from 'tailwind-merge'

function Price(props: {
    data: {
        offerPrice: number;
        price: number;
    },
    horizontal: boolean;
    className?: string;
}) {
    const { horizontal, data, className } = props
  return (
    <div className={[
        'text-[0.8rem] font-medium',
        className
    ].filter(Boolean).join(' ')}
    >
        {
            data.offerPrice ? 
            <div 
                className={[
                    'flex gap-2 items-center',
                    horizontal ? '' : 'justify-center'
                ].filter(Boolean).join(' ')}
            >
                <p className='text-[var(--priceColor)]'>
                    { pricePrint(data.offerPrice) }
                </p>
                <p className='text-sm opacity-70'>
                    <del>{ pricePrint(data.price) }</del>
                </p>
            </div>
            :<p 
                className={[
                    'font-medium text-[var(--priceColor)]',
                    horizontal ? '' : 'text-center'
                ].filter(Boolean).join(' ')}
            >
                { pricePrint(data.price) }
            </p>
        }
    </div>
  )
}

export default Price