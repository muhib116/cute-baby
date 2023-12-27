'use client'
import React from 'react'
import AddMoreToCart from '../../../app/components/AddMoreToCart'
import AddButton from './AddButton'

function AddToCartButton(props: {
    data: object,
    className?: string
}) {
    const { data, className } = props
  return (
    <div className={ className }>
      {
        false ?
        <AddMoreToCart
          data={data}
        />
        :
        <AddButton
          data={data}
        />
      }
    </div>
  )
}

export default AddToCartButton