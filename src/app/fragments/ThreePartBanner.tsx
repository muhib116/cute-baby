import React from 'react'
import GlobalBanner from '@/fragments/banner/Banner'
import img1 from '@/assets/images/1.webp'
import img2 from '@/assets/images/2.webp'
import img3 from '@/assets/images/3.webp'

function ThreePartBanner() {
  return (
    <div className='px-4'>
        <div className='container mx-auto'>
            <div className='flex gap-[0.8rem]'>
                <div className=''>
                    <div className='pb-[0.4rem]'>
                        <GlobalBanner
                            key="bannerImageTwo"
                            image={{ 
                                ...img2,
                                alt: ''
                            }}
                            href={{ 
                                pathname: '/'
                            }}
                        />
                    </div>
                    <div className='pt-[0.4rem]'>
                        <GlobalBanner
                            key="bannerImageThree"
                            image={{ 
                                ...img3,
                                alt: ''
                            }}
                            href={{ 
                                pathname: '/'
                            }}
                        />
                    </div>
                </div>
                <div className='w-[66%] mb-[0.8rem] lg:mb-0'>
                    <GlobalBanner
                        key="bannerImageOne"
                        image={{ 
                            ...img1,
                            alt: ''
                        }}
                        href={{ 
                            pathname: '/'
                        }}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThreePartBanner