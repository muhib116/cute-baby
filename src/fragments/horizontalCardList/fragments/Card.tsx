import React from 'react'

function Card(props: {
  children: React.ReactNode,
  className?: string
}) {
  const { children, className } = props
  return (
    <article className={['border border-[var(--borderColor)] p-3 relative hover:shadow-lg rounded duration-300 ease-in-out', className].filter(Boolean).join(' ')}>
      { children }
    </article>
  )
}

export default Card