'use client'

import React from 'react'
import { HeartStraight } from '@phosphor-icons/react'

function WishButton() {
  return (
    <button
        className='p-2 shadow bg-red-400 rounded text-white'
    >
        <HeartStraight size={20} weight="fill" />
    </button>
  )
}

export default WishButton