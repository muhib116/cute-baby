import React, { FC } from 'react'
import Card from '@/fragments/horizontalCardList/fragments/Card'
import Img from '../components/Img'
import Link from 'next/link'

interface CategoryCardProps {
    data: {
      src: string;
      title: string;
      href: object;
    };
    key: string;
}
function CategoryCard(props: {
    data: {
        src: string,
        title: string,
        href: object,
    },
    key: string
}){
    const { data: { href, src, title } } = props
  return (
    <Card>
        <div className='hover:-mt-2 duration-300 ease-in-out'>
            <Link href={ href } className='absolute inset-0'/>
            <Img
                className='w-full'
                src={ src }
                width={200}
                height={200}
                alt="Category"
            />
            <h3
                className='block truncate '
            >
                { title }
            </h3>
        </div>
    </Card>
  )
}

export default CategoryCard