import Image from 'next/image'
import { popularCategoriesData } from '@/placeholderData/data'
import HeaderBanner from './fragments/HeaderBanner'
import PopularCategories from './fragments/PopularCategories'
import TodaysDeal from './fragments/TodaysDeal'

export default function Home() {
  return (
    <main>
      <div className=''>
        <HeaderBanner />
        <PopularCategories />
        <TodaysDeal />
      </div>
    </main>
  )
}
