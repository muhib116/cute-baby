import Img from '@/app/components/Img'
import Link from 'next/link'
import React from 'react'

function Banner(props: {
    image: {
      src: string,
      width: number,
      height: number,
      alt: string,
    },
    href: object,
}) {
  const { href, image:img } = props
  return (
    <div className="relative group overflow-hidden">
      <Link
        href={href}
        className='absolute inset-0'
      ></Link>
      <Img
        className='group-hover:scale-[1.1] group-hover:rotate-2 duration-300'
        src={ img.src }
        width={ img.width }
        height={ img.height }
        alt={ img.alt }
      />
    </div>
  )
}

export default Banner