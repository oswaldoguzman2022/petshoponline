import React from 'react'
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';
import { useState, useEffect } from 'react';


const Container = styled.div`
    background: white;
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-between;
`;

const URI = 'https://backendu601.herokuapp.com/api/productos/'

const Products = (filters) => {
  
 
  const [productos, setProductos] = useState([])
      /*useEffect( ()  => {
        getProductos()
    },[]);*/

//const URI = URI2+JSON.stringify(filters.filters);
    //PRIMERA PARTE DEL FILTRO
     useEffect(()=>{
      const getProductos = async()=>{
        try{
          const res = await axios.get(URI);
          setProductos(res.data)
        }catch(err){}
      };
      getProductos()  
    },[]);
    
  
    // mostrar todas los productos

/*const getProductos = async () => {
    
    const res = await axios.get(URI,{params:{categoria:"Belleza"}});
    setProductos(res.data);
}*/


//SEGUNDA PARTE DEL FILTRO QUE NO FUNCIONO
/*const [filteredProductos, setFilteredProdutos] = useState([]);

useEffect(()=>{
  setFilteredProdutos(
    productos.filter((item)=> 
      Object.entries(filters).every(([key,value])=>
      item[key].includes(value)
      )
    )
  );
}, [productos, filters]);
*/

  return (
    <Container>
      {/*SE SUPONE QUE ESTE SERIA EL QUE DEVUELVA*/}
  {/*}    {filteredProductos.map(item=>(
            <Product item = {item} key={item._id}/>
  ))} */}

        {productos.map(item=>(
            <Product item = {item} key={item._id}/>
      ))} 
    </Container>
  )
};

export default Products;