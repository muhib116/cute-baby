import HeaderBanner from './fragments/HeaderBanner'
import PopularCategories from './fragments/PopularCategories'
import TodaysDeal from './fragments/TodaysDeal'
import BestRated from './fragments/BestRated'
import LimitedTimeOffer from './fragments/LimitedTimeOffer'
import ThreePartBanner from './fragments/ThreePartBanner'
import OnePartBanner from './fragments/OnePartBanner'
import Container from '@/fragments/Container'
import FourPartBanner from './fragments/FourPartBanner'
import Coupons from './fragments/Coupons'
import BestSelling from './fragments/BestSelling'

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
