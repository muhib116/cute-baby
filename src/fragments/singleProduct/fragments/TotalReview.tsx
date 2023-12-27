import ShowRatings from '@/fragments/ratings/ShowRatings'
import React from 'react'
import RatingBar from './RatingBar'

const TotalReview = () => {
  return (
    <div className='bg-white p-8 shadow rounded grid grid-cols-2'>
        <div className='text-center border-r border-r-[var(--borderColor)]'>
            <div className='mb-6'>
                <p className='text-[3rem] font-semibold'>3.67</p>
                <p className='text-[0.9rem]'>Out Of 5.00</p>
            </div>
            <ShowRatings
                className='my-3 w-[120px] mx-auto'
                rating={ 4.5 }
            />
            <p className='text-[0.8rem] text-[#aaa]'>
                3 Ratings
            </p>
        </div>

        <div>
            <div className='flex flex-col justify-center gap-3 max-w-[220px] mx-auto'>
                <RatingBar
                    rating={ 5 }
                    totalRating={ 49 }
                    ratingProgress='60%'
                />
                <RatingBar
                    rating={ 4 }
                    totalRating={ 50}
                    ratingProgress='30%'
                />
                <RatingBar
                    rating={ 3 }
                    totalRating={ 10 }
                    ratingProgress='10%'
                />
                <RatingBar
                    rating={ 2 }
                    totalRating={ 0 }
                    ratingProgress='0%'
                />
                <RatingBar
                    rating={ 1 }
                    totalRating={ 0 }
                    ratingProgress='0%'
                />
            </div>
        </div>
    </div>
  )
}

export default TotalReview