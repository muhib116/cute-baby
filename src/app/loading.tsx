import Container from '@/fragments/Container'
import React from 'react'
import PopularCatLoader from './fragments/PopularCategories/Loader'
import FourPartBannerLoader from './fragments/FourPartBanner/Loader'

const loading = () => {
  return (
    <div>
        <Container>
            <FourPartBannerLoader />
        </Container>
        <Container>
            <PopularCatLoader />
        </Container>
    </div>
  )
}

export default loading