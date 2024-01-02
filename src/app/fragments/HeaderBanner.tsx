import React from 'react'
import GlobalBanner from '@/fragments/banner/Banner'

function HeaderBanner() {
  return (
    <div className='block lg:flex gap-[0.8rem]'>
        <div className='flex-1 mb-[0.8rem] lg:mb-0'>
            <GlobalBanner
                key="bannerImageOne"
                bannerKey='headerBanner.headerBanner'
                width={ 697.6 }
                height={ 348.8 }
            />
        </div>
        <div className='flex-1 flex gap-[0.8rem]'>
            <div className='flex-1 '>
                <div className='pb-[0.4rem]'>
                    <GlobalBanner
                        key="bannerImageTwo"
                        bannerKey='headerBanner.headerHorizontalBanner1'
                        width={ 341.41 }
                        height={ 168 }
                    />
                </div>
                <div className='pt-[0.4rem]'>
                    <GlobalBanner
                        key="bannerImageThree"
                        bannerKey='headerBanner.headerHorizontalBanner2'
                        width={ 341.41 }
                        height={ 168 }
                    />
                </div>
            </div>
            <div className='flex-1'>
                <GlobalBanner
                    key="bannerImageFour"
                    bannerKey='headerBanner.headerSquireBanner'
                    width={ 341.41 }
                    height={ 346.8 }
                />
            </div>
        </div>
    </div>
  )
}

export default HeaderBanner