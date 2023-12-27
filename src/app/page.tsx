import Image from 'next/image'
import { popularCategoriesData } from '@/placeholderData/data'
import HeaderBanner from './fragments/HeaderBanner'
import PopularCategories from './fragments/PopularCategories'
import TodaysDeal from './fragments/TodaysDeal'
import BestRated from './fragments/BestRated'
import ThreePartBanner from './fragments/ThreePartBanner'
import OnePartBanner from './fragments/OnePartBanner'

export default function Home() {
  return (
    <main>
      <div className=''>
        <HeaderBanner />
        <PopularCategories />
        <TodaysDeal />
        <ThreePartBanner />
        <BestRated />
        <OnePartBanner />
      </div>
    </main>
  )
}
