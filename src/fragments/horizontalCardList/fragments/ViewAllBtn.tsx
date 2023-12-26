'use client'

import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

function ViewAllBtn(props: {
    href: object
}) {
    const { href } = props
  return (
    <Link href={ href } className='flex gap-1 items-center whitespace-nowrap'>
        View All 
        <CaretRight size={20} weight="light" />
    </Link>
  )
}

export default ViewAllBtn