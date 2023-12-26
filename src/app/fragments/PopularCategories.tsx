import React from 'react'
import HorizontalCardList from '@/fragments/horizontalCardList/HorizontalCardList'
import { popularCategoriesData } from '@/placeholderData/data'
import CategoryCard from './CategoryCard'

function PopularCategories() {
  return (
    <HorizontalCardList
        itemsWrapperClassName='grid-cols-8'
        title="Popular Categories"
        href={{ pathname: '/' }}
        key={ Math.random() }
        data={ popularCategoriesData }
        renderItem={ CategoryCard }
    />
  )
}

export default PopularCategories