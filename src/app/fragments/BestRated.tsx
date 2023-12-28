import React from 'react'
import HorizontalCardList from '@/fragments/horizontalCardList/HorizontalCardList'
import { bestRated } from '@/placeholderData/data'
import Product from '@/fragments/product/Product'

function BestRated() {
  return (
    <HorizontalCardList
        itemsWrapperClassName='grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
        title="Best Rated"
        href={{ pathname: '/' }}
        key={ Math.random() }
        data={ bestRated }
        itemProps={{
          horizontal: true,
          placeholderItem: 6
        }}
        renderItem={ Product }
    />
  )
}

export default BestRated