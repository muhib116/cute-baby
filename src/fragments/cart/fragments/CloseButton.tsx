import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import React from 'react'
import { twMerge } from 'tailwind-merge';

const CloseButton = (props: {
    className: string;
    setToggleCart: Function
}) => {
    const { className, setToggleCart } = props
  return (
    <button className={
            twMerge([
                'text-center w-8 py-6 rounded-l !bg-[var(--cartColor)] text-white shadow-lg border border-r-0 border-white overflow-hidden',
                className
            ].filter(Boolean).join(' '))
        }
        onClick={ () => setToggleCart(false) }
    >
        <CaretRight
            size={30}
            weight='bold'
        />
    </button>
  )
}

export default CloseButton