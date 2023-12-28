import React from 'react'

export default function AddButton(props: {
    data: object
}) {
  return (
    <button 
      onClick={ () => {
          console.log('Add to cart')
      } }
      className='w-full px-4 py-2 font-semibold rounded text-white text-center relative hover:bg-white hover:text-[var(--cartColor)] hover:shadow duration-300 ease-in-out bg-[var(--cartColor)]'
    >
      Add to bag
    </button>
  )
}
