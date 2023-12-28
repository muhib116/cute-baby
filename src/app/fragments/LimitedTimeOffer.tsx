import React from 'react'
import HorizontalCardList from '@/fragments/horizontalCardList/HorizontalCardList'
import { limitedTimeOffer } from '@/placeholderData/data'
import Product from '@/fragments/product/Product'
import Banner from '@/fragments/banner/Banner'
import img1 from '@/assets/images/1.webp'

function LimitedTimeOffer() {
  return (
    <div className='flex gap-[1rem]'>
        <Banner
          key="bannerImageOne"
          image={{ 
              src: 'https://images.unsplash.com/photo-1703533140744-bb66f9390245?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
              width: 200,
              height: 200,
              alt: ''
          }}
          href={{ 
              pathname: '/'
          }}
        />
        <HorizontalCardList
          itemsWrapperClassName='grid-cols-1  sm:grid-cols-2'
          title="Limited Time Offer"
          key={ Math.random() }
          href={{
            pathname: '/'
          }}
          data={ limitedTimeOffer }
          itemProps={{
            horizontal: true,
            placeholderItem: 4
          }}
          renderItem={ Product }
        />
    </div>
  )
}

export default LimitedTimeOffer