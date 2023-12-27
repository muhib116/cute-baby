import React from 'react'
import TotalReview from './fragments/TotalReview'

const Specification = () => {
  return (
    <>
        <div className='flex gap-4 mb-[2rem]'>
            <button
                className='rounded-full px-5 py-2'
            >
                Ratings & Review
            </button>
            <button
                className='rounded-full bg-[var(--primaryColor)] shadow text-white px-5 py-2'
            >
                Description
            </button>
            <button
                className='rounded-full px-5 py-2'
            >
                Specification
            </button>
        </div>
        <TotalReview />
    </>
  )
}

export default Specification