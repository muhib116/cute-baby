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
      bannerKey='fullBanner.fullBanner'
      width={ 1200 }
      height={ 400 }
    />
  )
}

export default OnePartBanner