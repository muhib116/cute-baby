import React from 'react'

function Card(props: {
  children: React.ReactNode
}) {
  return (
    <div className='border border-[var(--borderColor)] p-3 relative'>
      { props.children }
    </div>
  )
}

export default Card