import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import HeaderUser from '../components/adminComponents/header/HeaderUser'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, /* useNavigate */  useParams } from "react-router-dom";
import {agregarCarrito} from '../components/ProductsCart';





const URI = "https://backendu601.herokuapp.com/api/productos/";

const Container = styled.div`

`;


const Wrapper =styled.div`
    padding: 50px;
    display: flex;
`;


const ImgContainer =styled.div`
    flex:1;
`;

const Image =styled.img`
    width: 75%;
    height: 90vh;
    object-fit:contain;
`;

const InfoContainer =styled.div`
    flex:1;
    padding:0px 50px;
`;

const Title =styled.h1`
    font-weight: 200;
`;
const Desc =styled.p`
    margin: 20px 0px;
`;
const Price =styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
/*     border: 1px solid blue; */
`;
const CantidadContainer =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
/*     border: 1px solid black; */
`;
const Cantidad = styled.span`
    width: 30px;
    height: 30px;
    border-radius:10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color:white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;



const Product = () => {
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cantdisp, setCantidad_disp] = useState("");
  let [cantvent, setCantidad_vend] = useState(1);
  const [imagen, setImagen] = useState("");
  const [estado, setEstado] = useState("");
/*   const navigate = useNavigate(); */
  const { id } = useParams();


        useEffect( ()=>{
            
            getProductosById();
            //validarCarrito();
            console.log(id);
            
            //eslint-disable-next-line
    },[])

    
    const getProductosById = async () => {

        const res = await axios.get(`${URI}${id}`,)
        setNombre(res.data.nombre);
        setCategoria(res.data.categoria);
        setPrecio(res.data.precio);
        setDescripcion(res.data.descripcion);
        setCantidad_disp(res.data.cantdisp);
        setCantidad_vend(res.data.cantvent);
        setImagen(res.data.imagen);
        setEstado(res.data.estado);
    }

const handleCantidad = (tipo) => {
    
    if (tipo === "dec"){
        cantvent>1 && setCantidad_vend(cantvent-1)
    }else{
        cantvent< cantdisp && setCantidad_vend(cantvent+1)
    }
}

return (
    <Container>
        <HeaderUser page="Login" ruta="/login"/>
        <Wrapper>
            <ImgContainer>
            <Image src={imagen.secure_url}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{nombre}</Title>
                <Desc>{descripcion}</Desc>
                <Price>{precio}</Price>
                <AddContainer>
                    <CantidadContainer>
                        <Remove onClick={() => handleCantidad("dec")}/>
                        <Cantidad>
                            {cantvent}
                        </Cantidad>
                        <Add onClick={() => handleCantidad("inc")}/>
                    </CantidadContainer>
                    <Link to='/Cart'>
                    <Button onClick={() => agregarCarrito(id, nombre, categoria, precio, descripcion, cantdisp, cantvent, imagen, estado)}>Agregar al Carrito</Button>
                    </Link>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
)
}

export default Product;