import React from 'react'
import './forms.css'
import Cargar from '../botones/Cargar'
import Submit from '../botones/Submit'
import img_producto from '../../../assets/HOSPITAL ANIMAL CON FONDOS/1.svg'

const Forms = () => {
  return (
    <div className="container container__forms">
      <section className='section section__img'>
        <img className='img img__pro' src={img_producto} alt='img-logo' />
        <Cargar msg="imagen"/>
      </section>

      <section className='section section__forms'>
        <div className="row">
          <div className="colA">
            <label className='titulo'>Producto ID</label>
          </div>
          <div className="colB">
            <input type="text" id="productID" name="productID" placeholder="Escribe el ID del producto"/>
          </div>
        </div>
        <div className="row">
          <div className="colA">
            <label className='titulo'>Nombre</label>
          </div>
          <div className="colB">
            <input type="text" id="productName" name="productName" placeholder="Escribe el nombre del producto"/>
          </div>
        </div>
        <div className="row">
          <div className="colA">
            <label className='titulo'>Categoria</label>
          </div>
          <div className="colB">
            <select id="productCategory" name="productCategory">
              <option value="accesorio">Accesorio</option>
              <option value="medicamentos">Medicamento</option>
              <option value="arnesycollares">Arnes y Collares</option>
              <option value="juguete">Juguetes</option>
              <option value="alimento">Alimento</option>
              <option value="higiene">Higiene</option>
              <option value="ropa">Ropa</option>
              <option value="descanso">Descanso</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="colA">
            <label className='titulo'>Precio</label>
          </div>
          <div className="colB">
            <input type="number" id="productPrecio" name="productPrecio" placeholder="Ingrese el precio del producto"/>
          </div>
        </div>
        <div className="row">
          <div className="colA">
            <label className='titulo'>Descripción</label>
          </div>
          <div className="colB">
            <textarea id="productDescription" name="productDescription" placeholder="Write something.."></textarea>
          </div>
        </div>
        <div className="row">
          <div className="colA">
            <label className='titulo'>Disponible</label>
          </div>
          <div className="colB">
            <input type="number" id="productDisponible" name="productDisponible" placeholder="Insertar la cantidad disponible"/>
          </div>
        </div>
        <div className="row">
          <div className="colA">
            <label className='titulo'>Cantidad vendida</label>
          </div>
          <div className="colB">
            <input type="number" id="productVendido" name="productVendido" />
          </div>
        </div>
        <div className="row">
          <div className="colA">
            <label className='titulo'>Estado</label>
          </div>
          <div className="colB">
            <label class="toggler-wrapper style-3">
              <input type="checkbox" id="productEstado" name="productEstado"/>
              <div class="toggler-slider">
                <div class="toggler-knob"></div>

              </div>
            </label>
          </div>
        </div>
      </section>

      <section className='botones-forms'>
        <Submit/>
        <Cargar msg="Eliminar"/>
      </section>
    </div>
  )
}

export default Forms
