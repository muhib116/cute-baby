import Image from 'next/image'
import { popularCategoriesData } from '@/placeholderData/data'
import HeaderBanner from './fragments/HeaderBanner'
import PopularCategories from './fragments/PopularCategories'
import TodaysDeal from './fragments/TodaysDeal'
import BestRated from './fragments/BestRated'
import LimitedTimeOffer from './fragments/LimitedTimeOffer'
import ThreePartBanner from './fragments/ThreePartBanner'
import OnePartBanner from './fragments/OnePartBanner'
import Container from '@/fragments/Container'
import FourPartBanner from './fragments/FourPartBanner'

export default function Home() {
  return (
    <main>
      <div className=''>
        <Container>
          <HeaderBanner />
        </Container>

        <Container>
          <PopularCategories />
        </Container>

        <Container>
          <TodaysDeal />
        </Container>

        <Container>
          <ThreePartBanner />
        </Container>

        <Container>
          <BestRated />
        </Container>
        
        <Container>
          <OnePartBanner />
        </Container>

        <Container>
          <LimitedTimeOffer />
        </Container>
        <Container>
          <FourPartBanner />
        </Container>
      </div>
    </main>
  )
}
