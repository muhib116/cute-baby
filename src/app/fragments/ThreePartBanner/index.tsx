import React from 'react'
import GlobalBanner from '@/fragments/banner/Banner'

function ThreePartBanner() {
  return (
    <div className='flex gap-[0.8rem]'>
        <div className='w-1/3'>
            <div className='pb-[0.4rem]'>
                <GlobalBanner
                    key="bannerImageTwo"
                    bannerKey='threePartBanner.threePartBanner1'
                    width={ 422.4 }
                    height={ 203.1 }
                />
            </div>
            <div className='pt-[0.4rem]'>
                <GlobalBanner
                    key="bannerImageThree"
                    bannerKey='threePartBanner.threePartBanner2'
                    width={ 422.4 }
                    height={ 203.1 }
                />
            </div>
        </div>
        <div className='mb-[0.8rem] lg:mb-0 w-2/3'>
            <GlobalBanner
                key="bannerImageOne"
                bannerKey='threePartBanner.threePartBanner3'
                width={ 844.81 }
                height={ 420.41 }
            />
        </div>
    </div>
  )
}

export default ThreePartBanner