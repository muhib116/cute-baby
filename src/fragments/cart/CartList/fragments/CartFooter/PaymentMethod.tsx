import { Handshake } from '@phosphor-icons/react'
import React from 'react'

const PaymentMethod = () => {
  return (
    <div
        className='bg-red-50 text-red-500 text-xl mt-6 px-6 py-2 rounded flex items-center justify-between whitespace-nowrap font-bold'
    >
        Cash On Delivery
        <Handshake
            size={40}
            className='w-[52px]'
        />
    </div>
  )
}

export default PaymentMethod