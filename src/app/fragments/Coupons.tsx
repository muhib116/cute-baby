import React from 'react'
import HorizontalCardList from '@/fragments/horizontalCardList/HorizontalCardList'
import { couponsData } from '@/placeholderData/data'
import CouponCard from './CouponCard'

function Coupons() {
  return (
    <HorizontalCardList
        itemsWrapperClassName='grid-cols-2 sm:grid-cols-4'
        title="Coupons"
        key={ Math.random() }
        data={ couponsData }
        renderItem={ CouponCard }
    />
  )
}

export default Coupons