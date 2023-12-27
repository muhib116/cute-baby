import React from 'react'
import { twMerge } from 'tailwind-merge'

function Card(props: {
  children: React.ReactNode,
  className?: string
}) {
  const { children, className } = props
  return (
    <article className={ twMerge(['overflow-hidden border border-[var(--borderColor)] p-3 relative hover:shadow-lg rounded duration-300 ease-in-out hover:-mt-2', className].filter(Boolean).join(' ')) }>
      { children }
    </article>
  )
}

export default Card