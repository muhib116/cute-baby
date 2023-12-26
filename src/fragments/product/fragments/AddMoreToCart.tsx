import { Minus, Plus } from '@phosphor-icons/react'
import React from 'react'

function AddMoreToCart(props: {
    data: object
}) {
  return (
    <div className='bg-[var(--cartColor)] text-white font-bold shadow flex justify-between items-center rounded overflow-hidden'>
        <button className='px-2.5 py-1.5 border-r border-solid border-[var(--cartColor)] border-r-gray-300/30 hover:bg-white hover:text-[var(--cartColor)] duration-300 ease-in-out rounded-l'>
            +
        </button>
        <button className='w-full'>
            1 in bag
        </button>
        <button className='px-2.5 py-1.5 border-l border-solid border-[var(--cartColor)] border-l-gray-300/30 hover:bg-white hover:text-[var(--cartColor)] duration-300 ease-in-out rounded-r'>
            -
        </button>
    </div>
  )
}

export default AddMoreToCart