import ShowRatings from '@/fragments/ratings/ShowRatings'
import React from 'react'

const RatingBar = (props: {
    rating: number;
    totalRating: number;
    ratingProgress: string;
}) => {
    const {
        rating,
        totalRating,
        ratingProgress,
    } = props
  return (
    <div className='flex gap-4 items-center justify-center'>
        <ShowRatings 
            className='w-1/2'
            rating={ rating }
        />
        <div className="bg-gray-200 rounded h-[5px] relative w-1/2">
            <span 
                className='absolute left-0 h-full bg-[var(--ratingColor)] rounded'
                style={{ 
                        width: ratingProgress
                    }}
            ></span>
            <span className="absolute left-full top-1/2 -translate-y-1/2 text-sm ml-1">
                { totalRating }
            </span>
        </div>
    </div>
  )
}

export default RatingBar