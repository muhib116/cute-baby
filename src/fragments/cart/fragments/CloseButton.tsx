import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const CloseButton = (props: {
    className: string;
}) => {
    const { className } = props
  return (
    <button className={twMerge([
        'text-center w-6 py-6 rounded-l shadow-lg border border-r-0 overflow-hidden',
        className
    ].filter(Boolean).join(' '))}>
        <CaretRight 
            color='#000' 
            size={30}
        />
    </button>
  )
}

export default CloseButton