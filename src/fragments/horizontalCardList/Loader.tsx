import { ImageSquare } from '@phosphor-icons/react/dist/ssr';
import React from 'react'

const Loader = (props: {
    itemsWrapperClassName: string;
    placeholderItem: number;
    itemProps: {
        horizontal?: boolean
    }
}) => {
    const { itemsWrapperClassName, placeholderItem, itemProps: {horizontal} } = props
  return (
    <div className='animate-pulse w-full'>
      <div className="flex items-center justify-between gap-1 my-3">
        <div className='bg-slate-200 w-[200px] h-6'></div>
        <div className='bg-slate-200 w-[80px] h-6'></div>
      </div>

      <div 
        className={[
            'grid gap-[0.8rem]', 
            itemsWrapperClassName
        ].filter(Boolean).join(' ')}
        >
        {
            Array(placeholderItem).fill('').map((item, index) => (
                horizontal ?
                <div
                    className='w-full bg-white border rounded p-4 flex h-[204px] gap-4  '
                    key={index}
                >
                    <div className='bg-slate-100 aspect-square flex items-center justify-center'>
                        <ImageSquare size={ 40 } color='#666' />
                    </div>
                    <div className='w-full'>
                        <div className='bg-slate-200 h-3 mt-3 w-[40%]'></div>
                        <div className='bg-slate-200 h-4 mt-4 mx-auto'></div>
                        <div className='bg-slate-200 h-4 mt-3 w-[70%]'></div>
                        <div className='bg-slate-300 h-4 mt-4 w-[40%]'></div>
                        <div className='bg-slate-300 h-8 mt-5'></div>
                    </div>
                </div>
                :
                <div
                    className='w-full bg-white border rounded p-4 h-[420px]'
                    key={index}
                >
                    <div className='bg-slate-100 h-1/2 flex items-center justify-center'>
                        <ImageSquare size={ 40 } color='#666' />
                    </div>
                    <div className='bg-slate-200 h-3 mt-4 w-[40%] mx-auto'></div>
                    <div className='bg-slate-200 h-4 mt-5 mx-auto'></div>
                    <div className='bg-slate-200 h-4 mt-3 w-[70%] mx-auto'></div>
                    <div className='bg-slate-300 h-5 mt-4 w-[40%] mx-auto'></div>
                    <div className='bg-slate-300 h-10 mt-5'></div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Loader