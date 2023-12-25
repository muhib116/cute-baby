import React from 'react'


function Category(props: {
  params: any
}) {
    const { params } = props
    console.log(params)
  return (
    <div>Category wise product: { params.categorySlug }</div>
  )
}

export default Category