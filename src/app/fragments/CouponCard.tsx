import React from 'react'
import Img from '../components/Img'

function CouponCard(props: {
    data: {
        src: string;
        title: string;
    }
}) {
    const { data } = props
  return (
    <div className='cursor-pointer'>
        <Img
            src={ data.src }
            width={200}
            height={150}
            alt={ data.title }
        />
    </div>
  )
}

export default CouponCard