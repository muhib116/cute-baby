import React from 'react'
import GlobalBanner from '@/fragments/banner/Banner'
import img1 from '@/assets/images/1.webp'
import img2 from '@/assets/images/2.webp'
import img3 from '@/assets/images/3.webp'
import img4 from '@/assets/images/4.webp'
import Loader from './Loader'

function ThreePartBanner() {
  return (
    <div className='block lg:flex gap-[0.8rem]'>
        <div className='flex-1 mb-[0.8rem] lg:mb-0'>
            <GlobalBanner
                key="bannerImageOne"
                bannerKey='fourPartBanner.fourPartBanner'
                width={ 844.81 }
                height={ 420.41 }
            />
        </div>
        <div className='flex-1 flex gap-[0.8rem]'>
            <div className='flex-1'>
                <GlobalBanner
                    key="bannerImageFour"
                    bannerKey='fourPartBanner.fourPartSquireBanner'
                    width={ 844.81 }
                    height={ 420.41 }
                />
            </div>
            <div className='flex-1 '>
                <div className='pb-[0.4rem]'>
                    <GlobalBanner
                        key="bannerImageTwo"
                        bannerKey='fourPartBanner.fourPartHorizontalBanner1'
                        width={ 844.81 }
                        height={ 420.41 }
                    />
                </div>
                <div className='pt-[0.4rem]'>
                    <GlobalBanner
                        key="bannerImageThree"
                        bannerKey='fourPartBanner.fourPartHorizontalBanner2'
                        width={ 844.81 }
                        height={ 420.41 }
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThreePartBanner