
import IndiProducto from '../products/IndiProducto'

import axios from "axios";
import { useState, useEffect } from 'react';



const URI = "http://localhost:5000/api/productos/";

const CompMostrarproductos = () =>{
    const [productos, setProductos] = useState([])
    useEffect( ()  => {
        getProductos()
    },[])


//mostrar todos los productos
    const getProductos = async () => {
        const res= await axios.get(URI)
        setProductos(res.data);    
    }


    return (
    
    <div>
        <section>

        {productos.map((producto,index)=>(
            <IndiProducto nombre={producto.nombre}>

            </IndiProducto>

            
        ))}
        </section>
    </div>

    
    )

//cierre de funcion
}

export default CompMostrarproductos;