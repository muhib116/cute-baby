import { Minus, Plus } from '@phosphor-icons/react'
import React from 'react'

const QuantityInput = (props: {
    quantity: number;
    setQuantity: Function
}) => {
    const { quantity, setQuantity } = props
  return (
    <div className='flex flex-col items-center'>
        <button
            className='text-[var(--cartColor)] bg-gray-100 hover:bg-gray-200 py-[2px] px-1 rounded w-fit text-white'
            onClick={
                () => setQuantity(1)
            }
        >
            <Plus size={16} weight='bold' color="#666" />
        </button>
        <input
            className='border-0 bg-transparent font-medium p-0 text-center w-12'
            disabled
            value={ quantity }
        />
        <button
            className='text-[var(--cartColor)] bg-gray-100 hover:bg-gray-200 py-[2px] px-1 rounded w-fit text-white'
            onClick={
                () => setQuantity(- 1)
            }
        >
            <Minus size={16} weight='bold' color="#666" />
        </button>
    </div>
  )
}

export default QuantityInput