import React from 'react'
import HorizontalCardList from '@/fragments/horizontalCardList/HorizontalCardList'
import { todaysDeal } from '@/placeholderData/data'
import Product from '@/fragments/product/Product'

function TodaysDeal() {
  return (
    <HorizontalCardList
        itemsWrapperClassName='grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
        title="Todays Deal"
        href={{ pathname: '/' }}
        key={ Math.random() }
        data={ todaysDeal }
        itemProps={{
          horizontal: false,
        }}
        placeholderItem={ 5 }
        renderItem={ Product }
    />
  )
}

export default TodaysDeal