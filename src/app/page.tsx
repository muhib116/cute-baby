import Image from 'next/image'
import { popularCategoriesData } from '@/placeholderData/data'
import HeaderBanner from './fragments/HeaderBanner'
import PopularCategories from './fragments/PopularCategories'

export default function Home() {
  return (
    <main>
      <div className=''>
        <HeaderBanner />
        <PopularCategories />
      </div>
    </main>
  )
}
