import React from 'react'
import styled from 'styled-components';
import HeaderAdmin from '../components/adminComponents/header/HeaderAdmin';
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    var(--color-primary), rgba(255,255,255,255)
  ), center;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content:center;
`;



const Header = styled.header`
position:absolute;
top:0px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const URI = 'https://backendu601.herokuapp.com/api/usuarios/'

const UserList = () =>{
    const [usuarios, setUsuarios] = useState([])
    useEffect( ()  => {
        getUsuarios()
    },[])


// mostrar todas los usuarios
const getUsuarios = async () => {
    const res= await axios.get(URI)
    setUsuarios(res.data);
}

// eliminar usuarios
const deleteUsuarios = async (id) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    try {
        const response = await axios.delete(`${URI}${id}`,config)
            
        Swal.fire({
            title: 'Borrado!',
            text: response.data,
            icon: 'success',
        })
        getUsuarios()
    } catch (error) {
        Swal.fire({
            title: 'Error!',
            text: error.response.data,
            icon: 'error',
        })
    }

    
}

const delUsuComp = (id) => {

    Swal.fire({
        title: 'Esta usted Seguro?',
        text: "Despues de borrado, no puede recuperar la informacion.!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borralo.'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteUsuarios(id);
        }
      })
    }


return (
  <Container>
  <Header>
  <HeaderAdmin page="Logout" ruta="/"/>
  </Header>
      <div className='row'>
            <div className='col'>
            <Link to = "/usuarios/crear" className='btn btn-info mt-2 mb-2'><i className="fa-solid fa-user-plus"></i></Link>
                <table className="table table-striped">
                    <thead className='tableTheadBg'>
                        <tr>
                            <th>Email  </th>
                            <th>Nombre  </th>
                            <th>Apellido  </th>
                            <th>Celular  </th>
                            <th>Direccion </th>
                            <th>Pais </th>
                            <th>Departamento </th>
                            <th>Ciudad </th>
                            <th>Rol </th>
                            <th>Activo</th>
                            <th>Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map  ((usuario, index) => (
                            <tr key= {index}>
                                <td>{usuario.email}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.celular}</td>
                                <td>{usuario.direccion}</td>
                                <td>{usuario.pais}</td>
                                <td>{usuario.departamento}</td>
                                <td>{usuario.ciudad}</td>
                                <td>{usuario.role}</td>
                                <td>{usuario.activo}</td>

                                <td>
                                    <Link to = {`editar/${usuario._id}`} className= 'btn btn-info mt-2 mb-2'><i className="fa-solid fa-user-pen"></i></Link>
                                    <button onClick={ ()=>delUsuComp(usuario._id)} className= 'btn btn-danger mt-2 mb-2'><i className="fa-solid fa-user-xmark"></i></button>
                                </td>
                            </tr>
                        ))}    
                    </tbody>
                </table>
            </div>
        </div>
  </Container>           
)

}
export default UserList;