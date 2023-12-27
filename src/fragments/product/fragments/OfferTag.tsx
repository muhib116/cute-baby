import React from 'react'
import { twMerge } from 'tailwind-merge'

function OfferTag(props:{
  text: string,
  className?: string
}) {
  const { text, className } = props
  return (
    <div 
      className={
        twMerge([
          "bg-red-500 text-white px-4 pr-10 py-1 relative", 
          className
        ].filter(Boolean).join(' '))
      }
      style={{ clipPath: 'polygon(100% 0, 92% 50%, 100% 100%, 0 100%, 0 0)' }}
    >
      { text }
    </div>
  )
}

export default OfferTag