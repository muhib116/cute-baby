import React from 'react'
import OpenButton from './OpenButton'
import CloseButton from './CloseButton'

const cartOuterButton = (props: {
    className: string,
    isOpen: boolean,
    setToggleCart: Function
}) => {
    const { className, isOpen, setToggleCart } = props
  return (
    isOpen ?
    <CloseButton
      className={className}
      setToggleCart={ setToggleCart }
    />
    :
    <OpenButton
      className={className}
      setToggleCart={ setToggleCart }
    />
  )
}

export default cartOuterButton