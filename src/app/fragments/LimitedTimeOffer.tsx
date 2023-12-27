import React from 'react'
import HorizontalCardList from '@/fragments/horizontalCardList/HorizontalCardList'
import { limitedTimeOffer } from '@/placeholderData/data'
import Product from '@/fragments/product/Product'
import Banner from '@/fragments/banner/Banner'
import img1 from '@/assets/images/1.webp'

function LimitedTimeOffer() {
  return (
    <div className='flex gap-[1rem]'>
      <div>
        <Banner
          key="bannerImageOne"
          image={{ 
              ...img1,
              alt: ''
          }}
          href={{ 
              pathname: '/'
          }}
        />
      </div>
      <div>
        <HorizontalCardList
          itemsWrapperClassName='grid-cols-1  sm:grid-cols-2'
          title="Limited Time Offer"
          href={{ pathname: '/' }}
          key={ Math.random() }
          data={ limitedTimeOffer }
          itemProps={{
            horizontal: true
          }}
          renderItem={ Product }
        />
      </div>
    </div>
  )
}

export default LimitedTimeOffer