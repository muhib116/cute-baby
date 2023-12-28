import React from 'react'
import HorizontalCardList from '@/fragments/horizontalCardList/HorizontalCardList'
import { limitedTimeOffer } from '@/placeholderData/data'
import Product from '@/fragments/product/Product'
import Banner from '@/fragments/banner/Banner'
import img1 from '@/assets/images/1.webp'

function BestSelling() {
  return (
    <HorizontalCardList
        itemsWrapperClassName='grid-cols-1  sm:grid-cols-2'
        title="Best Selling"
        key={ Math.random() }
        href={{
            pathname: '/'
        }}
        data={ limitedTimeOffer }
        itemProps={{
          horizontal: true
        }}
          placeholderItem={ 4 }
          renderItem={ Product }
    />
  )
}

export default BestSelling