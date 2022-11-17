import React from 'react'
import './products.css'
import {BsPlusLg} from 'react-icons/bs'
import IndiProducto from '../products/IndiProducto'
import CompMostrarproductos from '../products/compProducto'

import imagen from "../../../assets/HOSPITAL ANIMAL CON FONDOS/1.svg"


const products = () => {
  return (
    <div className='container products__container'>
      <button className='btn newProduct__btn'>
        <BsPlusLg/>
      </button>
      <span className='span titulo__productos'>ALIMENTOS</span>
      <div className='container individual__container'>


        <CompMostrarproductos/>

        <IndiProducto 
        imgProduct={imagen}
        nombre="HOLA" />
        <IndiProducto 
        imgProduct={imagen}
        nombre="HOLA" />
        <IndiProducto 
        imgProduct={imagen}
        nombre="HOLA" />
        <IndiProducto 
        imgProduct={imagen}
        nombre="HOLA" />

      </div>
    </div>
  )
}

export default products
