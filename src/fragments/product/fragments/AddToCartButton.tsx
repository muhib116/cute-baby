'use client'
import React from 'react'
import AddMoreToCart from './AddMoreToCart'
import AddButton from './AddButton'

function AddToCartButton(props: {
    data: object
}) {
    const { data } = props
  return (
    true ?
    <AddMoreToCart
        data={data}
    />
    :
    <AddButton
        data={data}
    />
  )
}

export default AddToCartButton