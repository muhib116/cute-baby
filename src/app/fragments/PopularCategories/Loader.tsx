import { ImageSquare } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const Loader = () => {
  return (
    <div className="animate-pulse">
        <div className='grid gap-[0.8rem] grid-cols-2 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8'>
            {
                Array(8).fill('').map((item, index) => (
                    <div 
                        key={ index }
                        className='p-4 border rounded'
                    >
                        <div className='bg-slate-200 aspect-square'></div>
                        <div className='bg-slate-400 p-1 mt-2'></div>
                        <div className='bg-slate-300 p-1 mt-2 w-1/2'></div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Loader