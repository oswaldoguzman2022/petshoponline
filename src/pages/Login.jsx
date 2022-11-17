
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from "axios";
import styled from 'styled-components';
import HeaderUser from '../components/adminComponents/header/HeaderUser';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
/*   background: linear-gradient(
    var(--color-primary), rgba(255,255,255,0.5)
  ), center; */
  background-color: white;
  display: flex;
 /*  flex:1; */
  flex-direction:column;
  align-items: center;
  justify-content:center;
  justify-items:flex-start;
`;

const Wrapper = styled.div`
  width: 60%;
  height:55%;
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
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
   /*  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
    z-index:2;
  `;

  const LoginContainer = styled.div`
    flex:1;  
    padding: 20px;
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
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
`;

const Input = styled.input`
  flex:1;
  min-width:60%;
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

const URI = "https://backendu601.herokuapp.com/api/auth/login";


const Login = () => {

    //para redireccionar de un componente a otro
    const navigate = useNavigate();

    //definimos el estado inicial de las variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const iniciarSesion = async () => {
        if (password.length < 6) {
            const msg = "La contraseña debe ser al menos de 6 caracteres.";
            Swal.fire({
                title: 'Error',
                text: msg,
                icon: 'error',
            });
        } else {

            try{
            const response = await axios.post(URI, {
              email: email,
              password: password,
            });
                

              //obtenemos el token de acceso jwt
                const jwt = response.data.token;
                //alert(jwt);
                //guardamos el token en el localstorage
                localStorage.setItem('token', jwt);
                
                //redireccionamos al home la pagina principal
                navigate("/cart");
                
            }catch(error){
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
        iniciarSesion();
    }

  return (
    <Container>
      <Header>
      <HeaderUser page="Volver" ruta="/"/>
      </Header>
      <Wrapper>
        <RegisterForm>
        <div>
          <Title> INICIAR SESIÓN </Title>
          <Form onSubmit={onSubmit}>
            <Input placeholder="email" type="email" value={email} onChange={(u) => setEmail(u.target.value)} required/>
            <Input placeholder="contraseña" type="password" value={password} onChange={(u) => setPassword(u.target.value)} required/>
            <Text> Al crear mi cuenta, acepto los terminos y condiciones con respecto a procesar mis datos personales</Text>
            <Button>INICIAR</Button>
          </Form>
        </div>
        </RegisterForm>
        <LoginContainer>
          <div>
            <Title>¿NO TIENES UNA CUENTA?</Title>
            <Text>Da click para registrarte</Text>
            <Link to = {'/register'}>
              <Button>REGISTRATE</Button>
            </Link>
          </div>
        </LoginContainer>
      </Wrapper>
    </Container>
  )
}

export default Login