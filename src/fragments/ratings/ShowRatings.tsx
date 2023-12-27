import React from 'react'
import ratingImage from '@/assets/images/rating.png'
import Img from '@/app/components/Img'
import img1 from '@/assets/images/1.webp'

function ShowRatings(props: {
    rating: number,
    className?: string
}) {
    const { rating, className } = props
  return (
    <div 
        className={['relative', className].filter(Boolean).join(' ')}
        title={ `Rating is ${rating}` }
    >
        <span
            className='bg-[var(--ratingDefaultColor)] absolute inset-0 block'
        ></span>
        <span
            className='bg-[var(--ratingColor)] absolute left-0 top-0 h-full block'
            style={{
                width: '20%'
            }}
        ></span>
        <Img
            className='z-10 relative'
            src={ ratingImage.src }
            width={ 100 }
            height={ 30 }
            alt={ `Rating is ${rating}` }
        />
    </div>
  )
}

export default ShowRatings