import React, { useRef } from 'react'
import styled from 'styled-components';
import HeaderUser from '../components/adminComponents/header/HeaderUser';
import emailjs from '@emailjs/browser';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
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

const Titulo = styled.h1`
    margin: 20px;
    font-size: 35px;
    font-weight: 300;
    text-align: center;
`;

const Formulario = styled.div`
  flex:1;
  height:100%;
  padding: 20px;
  background-color:white;
  border-radius:25px ;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index:2;
`;

const Form = styled.form`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    /* background-color:blue; */
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
  background-color:var(--color-primary);
  color:white;
  cursor:pointer;
  margin-top:20px;
  border-radius:10px;
  transition: all 0.3s ease ;

  &:hover{
    background-color:white;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
  }

`;

const Textarea = styled.textarea`
  flex:1;
  min-width:60%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border:1px solid gray;
`;

const Header = styled.header`
position:absolute;
top:0px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Contactanos = () => {

    const form = useRef()

    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wjyp9ff', 'template_tffargp', form.current, 'n_BdS2QLL2JFNICiG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset();
    };


    
  return (
<Container>
    <Header>
    <HeaderUser page="Login" ruta="/login"/>
    </Header>
    <Wrapper>
        <Formulario>
            <Titulo>Contactanos</Titulo>    
            <Form ref={form} onSubmit={enviarEmail}>
            <Input type="Text" placeholder="Nombre Completo" name="nombre_usuario" required></Input>
            <Input type="email" placeholder="Email" name="email_usuario" required></Input>
            <Input type="Text" placeholder="Asunto" name="asunto" required></Input>
            <Textarea placeholder="Mensaje" name="mensaje" cols="30" rows="6" ></Textarea>
           
            <Button type='submit'>ENVIAR</Button>
          </Form>
        </Formulario>
    </Wrapper>
</Container>
  )
}

export default Contactanos
