import React from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Search from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
/* import { Label } from '@mui/icons-material'; */

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width:300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius:50%;
    background-color: white;
    position:absolute;
`;
const Image = styled.img`
    height:75%;
    width:80%;
    z-index:2;
`;


const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    background-color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1)
    }
`;

const Title = styled.h1 `
    font-size:16px;
    position: absolute;
    top: 10px;
    background-color: white;
    padding: 5px 10px;
    border-radius:15px;
`;

const Category = styled.h3 `
    font-size:12px;
    font-weight:500;
    position: absolute;
    bottom: 10px;
    background-color: white;
    padding: 5px 10px;
    border-radius:15px;
`;

const Product = ({item}) => {

/*    const navigate = useNavigate();
    const { id } = useParams();
    
    const selectProduct = () => {
        navigate("/"+id);       
    }*/

  return (
    <Container>
        <Circle/>
          <Image src={item.imagen.secure_url}/>
            
            <Info>
            <Title>{item.nombre}</Title>
            <Icon>                
                <ShoppingCartOutlinedIcon/>
            </Icon>
            
            <Icon>
            <Link to={`/productos/${item._id}`}>
                <Search/>
            </Link>
            </Icon>
            
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
            <Category>Categoria: {item.categoria}</Category>
        </Info>
        
    </Container>
  )
}

export default Product