import React from 'react'

function Container(props: {
    children: React.ReactNode
}) {
    const { children } = props
  return (
    
    <div className='px-4 py-10'>
        <div className='container mx-auto'>
            { children }
        </div>
    </div>
  )
}

export default Container