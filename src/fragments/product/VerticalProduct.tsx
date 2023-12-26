import React from 'react'
import Card from '../horizontalCardList/fragments/Card'
import Img from '@/app/components/Img';
import ShowRatings from '../ratings/ShowRatings';
import { pricePrint } from '@/helper';
import AddToCartButton from './fragments/AddToCartButton';

function VerticalProduct(props: {
    data: {
        id: number;
        src: string;
        title: string;
        offerPrice: number;
        price: number;
        rating: number;
    }
}) {
    const { data } = props
  return (
    <Card>
        <div className='border-b border-[var(--borderColor)] -ml-3 -mr-3 -mt-3'>
            
            <Img
                src={ data.src }
                width={ 215 }
                height={ 215 }
                alt={ data.title }
            />
        </div>
        <div>
            <ShowRatings
                className='w-[120px] mx-auto mt-3'
                rating={ data.rating }
            />
            <h3 
                className='text-center text-sm mt-2 line-clamp-2'
                title={ data.title }
            >
                { data.title }
            </h3>
            <div className='p-3'>
                {
                    data.offerPrice ? 
                    <div className='flex gap-2 items-center text-[0.8rem] font-semibold justify-center'>
                        <p className='text-center text-lg font-medium text-[var(--priceColor)]'>
                            { pricePrint(data.offerPrice) }
                        </p>
                        <p className='text-center text-xs '>
                            <del>{ pricePrint(data.price) }</del>
                        </p>
                    </div>
                    :<p className='text-center font-medium text-lg text-[var(--priceColor)]'>
                        { pricePrint(data.price) }
                    </p>
                }
            </div>
            <AddToCartButton
                data={ data }
            />
        </div>
    </Card>
  )
}

export default VerticalProduct