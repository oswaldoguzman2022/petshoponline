import React from 'react'
import './categories.css'
import {BsFillCaretRightFill} from 'react-icons/bs'
import {BsFillCaretLeftFill} from 'react-icons/bs'

const Categories = () => {
  return (
    <div className="container category__container">
        <div className="mascota">
            {/* <input type="button" value="atras"> <BsFillCaretRightFill/> </input> */}
            <a className='btn-mascota' href="#izquierda"> <BsFillCaretLeftFill/> </a>
            <span className='tipo-mascota'>PERRO</span>
            <a className='btn-mascota' href="#derecha"> <BsFillCaretRightFill/> </a>
        </div>
        <div className="category-list">
          <br/>
          Categorias
          <br/>
          <br/>
          Alimentos
          <br/>
          Medicina
          <br/>
          Accesorio
        </div>
    </div>
  )
}

export default Categories
