'use client'

import { MagnifyingGlass, User } from '@phosphor-icons/react'
import Image from 'next/image'
import React from 'react'
import SearchBox from './fragments/SearchBox'
import LoginRegistration from './fragments/LoginRegistration'
import Link from 'next/link'


const MiddlePart = () => {
  return (
    <div className='border-b border-[var(--borderColor)] px-4'>
        <div className="container mx-auto flex gap-10 justify-between py-4">
            <Link 
                href="/" 
                className="lg:w-[200px] flex-shrink-0 flex items-center"
            >
                <Image
                    src='https://shop.activeitzone.com/public/uploads/all/CZOY12JMJOU8D73wMnx25x9eMXFGPdHgRdxi4zuh.png'
                    alt='Brand Name'
                    width={150}
                    height={34.5}
                    className='w-[110px] md:w-[150px]'
                />
            </Link>

            <div
                className='w-full mx-auto flex justify-center'
            >
                <SearchBox
                    className='lg:w-[400px] hidden lg:block'
                />
            </div>

            <LoginRegistration
                className='flex-1 lg:w-[200px]'
            />
        </div>
    </div>
  )
}

export default MiddlePart