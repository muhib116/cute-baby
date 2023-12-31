import React from 'react'
import HorizontalCardList from '@/fragments/horizontalCardList/HorizontalCardList'
import { popularCategoriesData } from '@/placeholderData/data'
import CategoryCard from './CategoryCard'
import { fetchData } from '@/apiConfig'
import Loader from './Loader'

const getData = async () => {
  const { data } = await fetchData('categories/list')
  return data
}
async function PopularCategories() {
  const data = await getData()
  return (
    !data.length ?
    <Loader />
    :
    <HorizontalCardList
      itemsWrapperClassName='grid-cols-2 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8'
      title="Popular Categories"
      href={{ pathname: '/' }}
      key={ Math.random() }
      data={ data }
      renderItem={ CategoryCard }
    />
  )
}

export default PopularCategories