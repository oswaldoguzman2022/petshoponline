import React from 'react'
import '../botones/botones.css'


const Cargar = props => {
  return (
    <button className='boton-tipo1'>
        Cargar {props.msg}
    </button>
  )
}


export default Cargar
