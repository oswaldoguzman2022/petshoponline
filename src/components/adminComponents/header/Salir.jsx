import React from 'react'


const Salir = (props) => {
  return (
    <div className="salir">
        <a href={props.pageLink} className='btn btn-primary'>{props.BottonTitle}</a>
    </div>
  )
}

export default Salir