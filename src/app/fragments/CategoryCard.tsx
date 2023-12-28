import React, { FC } from 'react'
import Card from '@/fragments/horizontalCardList/fragments/Card'
import Img from '../components/Img'
import Link from 'next/link'

function CategoryCard(props: {
    data: {
        title: string;
        slug: string;
        image: {
            path: string;
            blur_path: string;
        }
    },
    key: string
}){
    const { data } = props
  return (
    <Card>
        <div className='hover:-mt-2 duration-300 ease-in-out'>
            <Link 
                href={ {
                    pathname: `/category/${ data.slug }`
                } } 
                className='absolute inset-0'
            />
            <Img
                className='w-full mb-2'
                src={ data.image.path }
                blur_src={ data.image.blur_path }
                width={200}
                height={200}
                alt="Category"
            />
            <h3
                className='block truncate text-center text-sm'
            >
                { data.title }
            </h3>
        </div>
    </Card>
  )
}

export default CategoryCard