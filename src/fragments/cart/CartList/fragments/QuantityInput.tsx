import { MinusCircle, PlusCircle } from '@phosphor-icons/react'
import React from 'react'

const QuantityInput = (props: {
    quantity: number;
    setQuantity: Function
}) => {
    const { quantity, setQuantity } = props
  return (
    <div className='grid gap-1'>
        <button
            className='text-[var(--cartColor)]'
            onClick={
                () => setQuantity(1)
            }
        >
            <PlusCircle size={25} weight='bold' />
        </button>
        <input
            className='border-0 bg-transparent font-medium p-0 text-center w-12'
            disabled
            value={ quantity }
        />
        <button
            className='text-[var(--cartColor)]'
            onClick={
                () => setQuantity(- 1)
            }
        >
            <MinusCircle size={25} weight='bold' />
        </button>
    </div>
  )
}

export default QuantityInput