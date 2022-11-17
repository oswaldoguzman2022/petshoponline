import React from 'react'
import './nav.css'
import {RiShoppingBag3Line} from 'react-icons/ri'
import {AiOutlineEdit} from 'react-icons/ai'
import {FaUserFriends} from 'react-icons/fa'


const Nav = () => {
  return (
    <nav>
      <a href="#categories"> <AiOutlineEdit/> </a> {/* OJO ACA TOCA CREAR LA PAGINA DE CATEGORIAS*/}
      <a href="#product" className='icoproduct'> <RiShoppingBag3Line/> </a>{/*ESTE SERIA EL CORRESPONDIENTE AL INDEX QUE SE TIENE QUE CAMBIAR A PRODUCTOS*/}
      <a href="#user"> <FaUserFriends/> </a>{/* OJO ACA TOCA CREAR LA PAGINA DE USUARIOS*/}

    </nav>
  )
}

export default Nav
