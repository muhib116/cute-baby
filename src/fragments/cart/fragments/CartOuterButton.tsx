import React from 'react'
import OpenButton from './OpenButton'
import CloseButton from './CloseButton'

const cartOuterButton = (props: {
    className: string
}) => {
    const { className } = props
  return (
    true ?
    <CloseButton
        className={className}
    />
    :
    <OpenButton
        className={className}
    />
  )
}

export default cartOuterButton