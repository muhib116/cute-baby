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
        <div className='container mx-auto flex justify-center'>
            {
                navigation.map(item => (
                    <Link
                        className={[
                            "py-2 px-2 block font-light capitalize",
                            pathName == item.href?.pathname && 'text-[var(--primaryColor)]'
                        ].filter(Boolean).join(' ')}
                        key={item.title}
                        href={ {...item.href} }
                    >
                        { item.title }
                    </Link>
                ))
            }
        </div>
    </nav>
  )
}

export default Navigation