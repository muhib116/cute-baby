import React from 'react'
import HorizontalCardList from '@/fragments/horizontalCardList/HorizontalCardList'
import { popularCategoriesData } from '@/placeholderData/data'
import CategoryCard from './CategoryCard'
import axios from '@/axiosConfig'

const getData = async () => {
  const { data } = await axios(process.env.API_URL+'categories/list')
  return data.data
}
async function PopularCategories() {
  const data = await getData()
  return (
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