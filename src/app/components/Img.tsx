// 'use client'
import Image from 'next/image'
import React from 'react'

function Img(props: {
  src: string,
  width: number,
  height: number,
  alt: string,
  className?: string,
}) {
  const { src, width, height, alt, className } = props
  return (
    <Image
      className={ [className, 'object-cover object-center'].filter(Boolean).join(' ') }
      src={ src }
      width={ width }
      height={ height }
      placeholder='blur'
      alt={ alt }
      blurDataURL={ src }
    />
  )
}

export default Img