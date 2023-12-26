'use client'

import Link from 'next/link'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const navigation = [
    {
        title: 'All categories',
        href: {
            pathname: '/all-categories'
        }
    },
    {
        title: 'Offers',
        href: {
            pathname: '/offers'
        }
    },
    {
        title: 'Winter Collections',
        href: {
            pathname: '/category/winter-collections'
        }
    },
]

function Navigation() {
    const pathName = usePathname()

  return (
    <nav className='border-b border-[var(--borderColor)] px-4'>
        <div className='container mx-auto'>
            <ul className='flex justify-center'>
                {
                    navigation.map(item => (
                        <li
                            key={item.title}
                        >
                            <Link
                                className={[
                                    "py-2 px-2 block font-light capitalize",
                                    pathName == item.href?.pathname && 'text-[var(--primaryColor)]'
                                ].filter(Boolean).join(' ')}
                                href={ {...item.href} }
                            >
                                { item.title }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navigation