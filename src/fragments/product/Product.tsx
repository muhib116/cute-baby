import React from 'react'
import Card from '../horizontalCardList/fragments/Card'
import Img from '@/app/components/Img'
import ShowRatings from '../ratings/ShowRatings'
import { pricePrint } from '@/helper'
import AddToCartButton from './fragments/AddToCartButton'
import OfferTag from './fragments/OfferTag'
import Price from '../price/Price'

function Product(props: {
    data: {
        id: number;
        src: string;
        title: string;
        offerPrice: number;
        price: number;
        rating: number;
    },
    horizontal: boolean
}) {
    const { data, horizontal=false } = props
  return (
    <Card 
        className={[
            'group',
            horizontal ? 'flex items-center' : ''
        ].filter(Boolean).join(' ')}
    >
        <OfferTag
            className='absolute -top-8 left-0 origin-bottom-left rotate-90 z-10'
            text="20% off"
        />

        <div 
            className={[
                'aspect-square overflow-hidden -ml-3 -mt-3',
                horizontal ? 'w-[40%] flex-shrink-0 flex-grow-0 mr-0' : 'border-b border-[var(--borderColor)] -mr-3'
            ].filter(Boolean).join(' ') }
        >
            <Img
                className='group-hover:scale-110 group-hover:rotate-3 duration-300'
                src={ data.src }
                width={ 215 }
                height={ 215 }
                alt={ data.title }
            />
        </div>

        <div className={[
                horizontal ? 'min-w-[60%]' : ''
            ].filter(Boolean).join(' ')}
        >
            <ShowRatings
                className={[
                    'w-[120px] mt-3',
                    horizontal ? '' : 'mx-auto'
                ].filter(Boolean).join(' ')}
                rating={ data.rating }
            />
            <h3 
                className={[
                    'text-sm mt-2 line-clamp-2 h-[40px]',
                    horizontal ? '' : 'text-center'
                ].filter(Boolean).join(' ')}
                title={ data.title }
            >
                { data.title }
            </h3>
            <div 
                className={[
                    'p-3',
                    horizontal ? 'text-left' : 'text-center'
                ].filter(Boolean).join(' ')}
            >
                <Price
                    horizontal={ horizontal }
                    data={{ 
                        offerPrice: data.offerPrice,
                        price: data.price
                     }}
                />
            </div>
            <AddToCartButton
                data={ data }
            />
        </div>
    </Card>
  )
}

export default Product