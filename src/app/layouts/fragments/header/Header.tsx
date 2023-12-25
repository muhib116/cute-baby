import React from 'react'
import TopHeader from './TopHeader'
import MiddlePart from './MiddlePart'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header>
      <TopHeader />
      <MiddlePart />
      <Navigation />
    </header>
  )
}

export default Header