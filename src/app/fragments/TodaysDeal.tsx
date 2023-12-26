import React from 'react'
import HorizontalCardList from '@/fragments/horizontalCardList/HorizontalCardList'
import { todaysDeal } from '@/placeholderData/data'
import VerticalProduct from '@/fragments/product/VerticalProduct'

function TodaysDeal() {
  return (
    <HorizontalCardList
        itemsWrapperClassName='grid-cols-5'
        title="Todays Deal"
        href={{ pathname: '/' }}
        key={ Math.random() }
        data={ todaysDeal }
        renderItem={ VerticalProduct }
    />
  )
}

export default TodaysDeal