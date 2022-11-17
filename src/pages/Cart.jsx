import { Add, Remove } from '@mui/icons-material';
import { useState, useEffect } from "react";
import React from 'react'
import styled from 'styled-components';
import HeaderUser from '../components/adminComponents/header/HeaderUser'
import { Link } from 'react-router-dom';
import { eliminarCarrito } from '../components/ProductsCart';



const Container = styled.div`
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align:center;
`;

const TopContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content:space-between;
/*   border: 1px solid black; */
  margin-bottom:10px;
`;


const TopButton = styled.button`
  padding: 10px;
  font-weight:600;
  cursor:pointer;
  border-radius: 10px;
  border: ${props => props.type === "filled" ? "none" : "1px solid var(--color-primary)"};
  background-color : ${props => 
    props.type === "filled" ? "var(--color-primary)" : "transparent"};
  color: ${props => props.type === "filled" ? "white" : "var(--color-primary)"};
`;

const TopTexts = styled.div`

`;

const TopText = styled.span`
  text-decoration: underline;
  cursor:pointer;
  margin: 0px 10px;
`;

  const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
/*   border: 1px solid black; */
  `;

const Info = styled.div`
  flex: 3;
`;


const ProductCont =styled.div`
  display: flex;
  justify-content:space-between;
/*     border: 2px solid blue; */
  `;
const DetalleProducto =styled.div`
  flex:2;
  display: flex;
  /*   border: 1px solid red; */
  `;
const Image =styled.img`
  width:200px;
/*   border: 2px solid blue; */
  margin: 5px 5px;
  `;
const Detalles = styled.div`
  padding: 20px;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  /*   border: 1px solid black; */
  `;
const ProductName =styled.span``;
const ProductId =styled.span``;
const ProductCategory =styled.span``;
const DetallesPrecio =styled.div`
  flex:1;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  /*   border: 1px solid black; */
  `;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  /*   border: 1px solid red; */
  /* padding: 0px 10px; */
  `;
const ProductAmount = styled.div`
  font-size: 24px;
  margin:5px;
  
  `;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  /*   border: 1px solid black; */
  `;

const Hr = styled.hr`
  background-color: #eeee;
  border: none;
  height: 1px;
`;  

const Resumen = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius:  10px;
    padding: 20px;
    height: 50vh;
  `;

const ResumenTitle = styled.h1`
  font-weight: 200;
`;
const ResumenItem = styled.div`
  margin: 30px 0px; 
  display: flex;
  justify-content:space-between;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};
`;
const ResumenItemText = styled.span``;
const ResumenItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 10px;
  font-weight: 600;
`;

const Eliminar = styled.button`
  background-color: #e74c3c ;
  border-radius:10px;
  padding: 8px 5px;
  color: white;
  cursor: pointer;
  transition: all 0.1s ease;


  &:hover{
    background-color: white;
    border: 2px solid #e74c3c ;
    color:#e74c3c; 

  }
`;

const Cart = () => {

  const [productsCart, setProductsCart] = useState(JSON.parse(localStorage.getItem("productsCart")));

  useEffect(() => {
    let data = localStorage.getItem("productsCart");
    if (data) {
      setProductsCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productsCart", JSON.stringify(productsCart));
  }, [productsCart]);

  
  return (
    <Container>
      <HeaderUser page="Login" ruta="/login"/>
      <Wrapper>
        <Title>TU CARRITO</Title>
        <TopContainer>
        <Link to= "/productos">
          <TopButton>Seguir comprando</TopButton>
          </Link>
          <TopTexts>
            <TopText>Bolsa de compra({productsCart.length})</TopText>
            <TopText>Tu lista de deseos</TopText>
          </TopTexts>
          <TopButton type="filled">Pagar</TopButton>
        </TopContainer>

        <BottomContainer>
          <Info>
              {productsCart.map((item, index) => (
              <>{/* Product item={item} key={item._id} */} 
              <ProductCont>
              <DetalleProducto>
              <Image src={item.imagen.secure_url}/>
                  <Detalles>
                    <ProductName><b>Producto: </b>{item.nombre}</ProductName>
                    <ProductId><b>ID: </b>{item._id}</ProductId>
                    <ProductCategory><b>Categoria: </b>{item.categoria}</ProductCategory>
                  </Detalles>
                </DetalleProducto>
                <DetallesPrecio>
                    <ProductAmountContainer>
                      <Add/>
                      <ProductAmount>{item.cantvent}</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice>$ {item.precio}</ProductPrice>
                    <ProductPrice>Subtotal: $ {item.precio*item.cantvent}</ProductPrice>
                    <Eliminar onClick={() => eliminarCarrito(item._id)}>Quitar del Carrito</Eliminar>
                  </DetallesPrecio>
                  </ProductCont>
                  <Hr/>
                  </>
                          
                    ))}
                  </Info>
          <Resumen>
            <ResumenTitle>Resumen de Orden</ResumenTitle>
              <ResumenItem>
                <ResumenItemText>Subtotal</ResumenItemText>
                <ResumenItemPrice>$80</ResumenItemPrice>
              </ResumenItem>

              <ResumenItem type="total">
                <ResumenItemText>Total</ResumenItemText>
                <ResumenItemText>$80</ResumenItemText>
              </ResumenItem>
              <Button>Comprar ahora</Button>
          </Resumen>
        </BottomContainer>
      </Wrapper>
    </Container>
  )
}

export default Cart