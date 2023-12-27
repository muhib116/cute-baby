import { pricePrint } from '@/helper';
import React from 'react'

function Price(props: {
    data: {
        offerPrice: number;
        price: number;
    },
    horizontal: boolean;
}) {
    const { horizontal, data } = props
  return (
    data.offerPrice ? 
    <div 
        className={[
            'flex gap-2 items-center text-[0.8rem] font-semibold',
            horizontal ? '' : 'justify-center'
        ].filter(Boolean).join(' ')}
    >
        <p className='text-lg font-medium text-[var(--priceColor)]'>
            { pricePrint(data.offerPrice) }
        </p>
        <p className='text-xs '>
            <del>{ pricePrint(data.price) }</del>
        </p>
    </div>
    :<p 
        className={[
            'font-medium text-lg text-[var(--priceColor)]',
            horizontal ? '' : 'text-center'
        ].filter(Boolean).join(' ')}
    >
        { pricePrint(data.price) }
    </p>
  )
}

export default Price