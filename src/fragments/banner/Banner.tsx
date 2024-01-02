import Img from '@/app/components/Img'
import { getBanner } from '@/helper';
import Link from 'next/link'
import React from 'react'

async function Banner(props: {
    bannerKey: string;
    width: number;
    height: number;
    wrapperClass?: string;
})
{
  const { bannerKey, width, height } = props
  const data = await getBanner(bannerKey)
  if(!data) {
    return null
  }

  const { image: { path, blur_path }, link, name} = data

  return (
    <div className="relative h-full group overflow-hidden">
      <Link
        href={ link }
        className='absolute inset-0'
      ></Link>
      <Img
        className='w-full h-full group-hover:scale-[1.1] group-hover:rotate-2 duration-300'
        src={ path }
        blur_src={ blur_path}
        width={ width }
        height={ height }
        alt={ name }
      />
    </div>
  )
}

export default Banner