import React from 'react'
import './header.css'
import Salir from './Salir'
import logo from '../../../assets/HOSPITAL ANIMAL/8.svg'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <Salir/>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </header>
  )
}

export default Header
