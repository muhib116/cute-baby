import { MagnifyingGlass } from '@phosphor-icons/react'
import React from 'react'

function SearchBox({
  className
}: {
  className?: string
}) {
  return (
    <form action="#" method="get" className={['relative', className].filter(Boolean).join(' ')}>
        <input 
          type="search" 
          placeholder="Search..." 
          className='pr-[2rem]'
        />
        <button 
          type="submit"
          className='bg-[var(--primaryColor)] absolute h-[80%] px-3 block top-1/2 -right-3 -translate-y-1/2 rounded'
        >
          <MagnifyingGlass size={20} weight="bold" color='white' />
        </button>
    </form>
  )
}

export default SearchBox