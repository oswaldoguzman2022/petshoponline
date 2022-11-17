import React from 'react'
import styled from 'styled-components';
import HeaderUser from '../components/adminComponents/header/HeaderUser';
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
/*   background: linear-gradient(
    var(--color-primary), rgba(255,255,255,0.5)
  ), center; */
  background-color:white;
  display: flex;
  align-items: center;
  justify-content:center;
`;

const Wrapper = styled.div`
  width: 60%;
  height:70%;
  /* padding: 20px; */
  background-color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  `;

const RegisterForm = styled.div`
  flex:1;
  height:100%;
  padding: 20px;
  background-color:white;
  border-radius:25px 0px 0px 25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index:2;
  `;

  const LoginContainer = styled.div`
    flex:1;  
    padding: 40px;
    height:100%;
    text-align: center;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:var(--color-primary);
    border-radius:0px 25px 25px 0px;
    color:white;
  `;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;

`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex:1;
  min-width:40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border:1px solid gray;
`;

const Text = styled.span`
  font-size: 12px;
  margin: 20px;
`;

const Button = styled.button`
  width: 40%;
  border:none;
  padding: 15px 20px;
  background-color:teal;
  color:white;
  cursor:pointer;
`;

const Header = styled.header`
position:absolute;
top:0px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const URI = "https://backendu601.herokuapp.com/api/usuarios/signup";

const Register = () => {

  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [celular, setCelular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [pais, setPais] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const navigate = useNavigate();


      // funcion guardar

  const GuardarU = async (u) => {
    if (password !== confirmar) {
      const msg = "Las contraseñas son diferentes.";
      Swal.fire({
        title: 'Error',
        text: msg,
        icon: 'error',
    });
    }else{

    try{
    const response = await axios.post(URI, {
      email: email,
      nombre: nombre,
      apellido: apellido,
      celular: celular,
      direccion: direccion,
      pais: pais,
      departamento: departamento,
      ciudad: ciudad,
      password: password,
    });
    
    //obtenemos el token de acceso jwt
    const jwt = response.data.token;

    //guardamos el token en el localstorage
    localStorage.setItem('token', jwt);
    

    //redireccionamos al home la pagina principal
    navigate("/");

  
  } catch(error){
    Swal.fire({
      title: 'Error',
      text: error.response.data,
      icon: 'error',
  });
      
    }
  }
}

const onSubmit = (u) => {
  u.preventDefault();
  GuardarU();
}

  return (
    <Container>
      <Header>
      <HeaderUser page="Volver" ruta="/"/>
      </Header>
      <Wrapper>
        <RegisterForm>
          <Title> CREA UNA CUENTA NUEVA </Title>
          <Form onSubmit={onSubmit}>
            <Input placeholder="nombre" value={nombre} onChange={(u) => setNombre(u.target.value)} type="text" required/>
            <Input placeholder="apellidos" value={apellido} onChange={(u) => setApellido(u.target.value)} type="text" required/>
            <Input placeholder="email" value={email} onChange={(u) => setEmail(u.target.value)} type="string" required/>
            <Input placeholder="Celular" value={celular} onChange={(u) => setCelular(u.target.value)} type="number" required/>
            <Input placeholder="Direccion Usuario" value={direccion} onChange={(u) => setDireccion(u.target.value)} type="string" required/>
            <Input placeholder="Departamento" value={departamento} onChange={(u) => setDepartamento(u.target.value)} type="text" required/>
            <Input placeholder="Ciudad" value={ciudad} onChange={(u) => setCiudad(u.target.value)} type="text" required/>
            <Input placeholder="País" value={pais} onChange={(u) => setPais(u.target.value)} type="text" required/>
            <Input placeholder="contraseña" type="password" value={password} onChange={(u) => setPassword(u.target.value)} required/>
            <Input placeholder="confirmar contraseña" type="password" value={confirmar} onChange={(u) => setConfirmar(u.target.value)} required/>
            <Text> Al crear mi cuenta, acepto los terminos y condiciones con respecto a procesar mis datos personales</Text>
            <Button>CREA MI CUENTA</Button>
          </Form>
        </RegisterForm>
        <LoginContainer>
          <div>
            <Title>¿YA TIENES UNA CUENTA?</Title>
            <Text>Da click para iniciar sesión desde tu cuenta</Text>
            <Link to = {'/login'}>
              <Button>INICIAR SESIÓN</Button>
            </Link>
          </div>
        </LoginContainer>
      </Wrapper>
    </Container>
  )
}

export default Register