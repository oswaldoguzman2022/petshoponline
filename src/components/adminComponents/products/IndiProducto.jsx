import React from 'react'
import './indi_producto.css'

const IndiProducto = ({precio, nombre}) => {

  return (
    <div className='product__container'>
      <section className='section__IndiProducto imgProduct__section'>
        <img className='img img__product' src={precio} alt='img-logo'/>
      </section>


 {/*      <section className='section__IndiProducto idProduct__section'>
        <label className='label label__IndiProducto idProduct__label'>{precio}</label>
      </section> */}


      <section className='section__IndiProducto nombreProduct__section'>
        <label className='label label__IndiProducto nombreProduct__label'>{nombre}</label>
      </section>
    </div>
  )
}

export default IndiProducto
