import React from 'react'

function Container(props: {
    children: React.ReactNode,
    className?: string
}) {
    const { children, className } = props
  return (
    
    <div className={[
      'px-4 my-10',
      className
    ].filter(Boolean).join(' ')}>
        <div className='container mx-auto'>
          { children }
        </div>
    </div>
  )
}

export default Container