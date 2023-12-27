import FourPartBanner from '@/app/fragments/FourPartBanner'
import TodaysDeal from '@/app/fragments/TodaysDeal'
import Container from '@/fragments/Container'
import SingleProduct from '@/fragments/singleProduct/SingleProduct'
import Specification from '@/fragments/singleProduct/Specification'
import React from 'react'

function page() {
  return (
    <>
      <Container>
        <SingleProduct />
      </Container>
      <Container
        className='bg-[#fff8ea] py-10'
      >
        <Specification />
      </Container>

      <Container>
          <FourPartBanner />
      </Container>
      <Container>
          <TodaysDeal />
      </Container>
    </>
  )
}

export default page