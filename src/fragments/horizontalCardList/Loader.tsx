import React from 'react'

const Loader = (props: {
    itemsWrapperClassName: string;
}) => {
    const { itemsWrapperClassName } = props
  return (
    <div className='animate-pulse border rounded p-4'>
      <div className="flex items-center justify-between gap-1 my-3">
        <div className='bg-slate-200 w-[200px] h-6'></div>
        <div className='bg-slate-200 w-[80px] h-6'></div>
      </div>

      <div 
        className={['grid gap-[0.8rem]', itemsWrapperClassName].filter(Boolean).join(' ')}
      >
        {/* {data.map((item, index) => (
          renderItem ? (
            <div key={index}>
              {
                renderItem({key: String(index), data: item, ...itemProps })
              }
            </div>
          ) : null
        ))} */}
      </div>
    </div>
  )
}

export default Loader