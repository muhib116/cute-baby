import React from 'react'
import GlobalBanner from '@/fragments/banner/Banner'
import img1 from '@/assets/images/1.webp'
import Loader from './Loader'

function OnePartBanner() {
  return (
    false ?
    <Loader />
    :
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