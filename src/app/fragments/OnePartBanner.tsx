import React from 'react'
import GlobalBanner from '@/fragments/banner/Banner'
import img1 from '@/assets/images/1.webp'
import img2 from '@/assets/images/2.webp'
import img3 from '@/assets/images/3.webp'

function OnePartBanner() {
  return (
    <GlobalBanner
        key="bannerImageOne"
        image={{ 
            ...img1,
            alt: ''
        }}
        href={{ 
            pathname: '/'
        }}
    />
  )
}

export default OnePartBanner