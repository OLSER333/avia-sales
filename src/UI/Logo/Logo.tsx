import React from 'react'
import logo from '../../assets/img/logo.png'
// import logo from '../assets/img/logo.png'

const Logo = () => {
  return (
    <>
      <a href={'/'}>
        <img style={{ width: '60px' }} src={logo} alt='logo' />
      </a>
    </>
  )
}

export default Logo
