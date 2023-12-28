import { ImageSquare } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const Loader = () => {
  return (
    <div className="animate-pulse">
        <div className='block lg:flex gap-[0.8rem] h-[369px]'>
            <div className='flex-1 flex gap-[0.8rem] max-w-[510px]'>
                <div className='flex-1 grid gap-[0.8rem]'>
                    <div className='p-4 border rounded'>
                        <div className='bg-slate-200 h-full rounded flex items-center justify-center'>
                            <ImageSquare size={52} weight="light" />
                        </div>
                    </div>
                    <div className='p-4 border rounded'>
                        <div className='bg-slate-200 h-full rounded flex items-center justify-center'>
                            <ImageSquare size={52} weight="light" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 p-4 border rounded'>
                <div className='bg-slate-200 mb-[0.8rem] lg:mb-0 h-full flex items-center justify-center'>
                    <ImageSquare size={52} weight="light" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loader