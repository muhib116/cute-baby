import React from 'react'

export default function AddButton(props: {
    data: object
}) {
  return (
    <button 
        onClick={ () => {
            console.log('Add to cart')
        } }
        className='w-full px-4 py-2 font-semibold border-solid border border-[var(--borderColor)] rounded text-[var(--cartColor)] text-center relative hover:text-white hover:bg-[var(--cartColor)] hover:shadow duration-300 ease-in-out'
    >
        Add to bag
    </button>
  )
}
