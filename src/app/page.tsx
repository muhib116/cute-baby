import HeaderBanner from './fragments/HeaderBanner'
import TodaysDeal from './fragments/TodaysDeal'
import BestRated from './fragments/BestRated'
import LimitedTimeOffer from './fragments/LimitedTimeOffer'
import Container from '@/fragments/Container'
import FourPartBanner from './fragments/FourPartBanner'
import Coupons from './fragments/Coupons'
import BestSelling from './fragments/BestSelling'
import OnePartBanner from './fragments/OnePartBanner'
import ThreePartBanner from './fragments/ThreePartBanner'
import PopularCategories from './fragments/PopularCategories'

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
        <Container>
          <Coupons />
        </Container>
        <Container>
          <BestSelling />
        </Container>
      </div>
    </main>
  )
}
