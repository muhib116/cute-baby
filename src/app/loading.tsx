import Container from '@/fragments/Container'
import React from 'react'
import PopularCatLoader from './fragments/PopularCategories/Loader'
import FourPartBannerLoader from './fragments/FourPartBanner/Loader'
import ProductPreLoader from '@/fragments/horizontalCardList/Loader'
import ThreePartBannerLoader from './fragments/ThreePartBanner/Loader'
import OnePartBannerLoader from './fragments/OnePartBanner/Loader'

const loading = () => {
  return (
    <div>
        <Container>
            <FourPartBannerLoader />
        </Container>
        <Container>
            <PopularCatLoader />
        </Container>
        <Container>
            <ProductPreLoader
                itemsWrapperClassName='grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
                itemProps={{ horizontal: false }}
                placeholderItem={ 5 }
            />
        </Container>
        <Container>
            <ThreePartBannerLoader />
        </Container>
        <Container>
            <ProductPreLoader
                itemsWrapperClassName='grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                itemProps={{ horizontal: true }}
                placeholderItem={ 6 }
            />
        </Container>
        <Container>
            <OnePartBannerLoader />
        </Container>
        <Container>
            <ProductPreLoader
                itemsWrapperClassName='grid-cols-1  sm:grid-cols-2'
                itemProps={{ horizontal: true }}
                placeholderItem={ 4 }
            />
        </Container>
        <Container>
            <FourPartBannerLoader />
        </Container>
    </div>
  )
}

export default loading