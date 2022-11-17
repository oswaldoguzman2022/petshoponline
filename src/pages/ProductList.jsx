import React, { useState } from 'react'
import styled from 'styled-components';
import HeaderUser from '../components/adminComponents/header/HeaderUser'
import Products from '../components/Products'


const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {

        /*ESTO FUNCIONA PERFECTO, SI LE PONES UN CONSOLE LOG TE VA A DAR LA RESPUESTA DEL FILTRO EN LA CONSOLA*/
    const [filters, setFilters] = useState("");
    const [sort, setSort] = useState("");
    
  

   
    /*const [sort, setSort] = useState("nuevo");

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };*/

    return (
        <Container>
            <HeaderUser page="Login" ruta="/login"/>
            <Title>Juguetes</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filtro de productos:</FilterText>
                    <Select name = "categoria" onChange = {(u) => setFilters(u.target.value)} value={filters}>
                        <Option>Juguete</Option>
                        <Option>Medicamentos</Option>
                        <Option>Belleza</Option>
                        <Option>Alimento</Option>
                        <Option>Higiene</Option>
                        <Option>Arnés y collares</Option>
                        <Option>Accesorios</Option>
                        <Option>Descanso</Option>
                        <Option>Ropa</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Organizar:</FilterText>
                    <Select onChange={(e)=>setSort(e.target.value)}>
                        <Option value="nuevo">Nuevo</Option>
                        <Option value="asc">Precio (asc)</Option>
                        <Option value="desc">Precio (des)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products filters={filters} sort={sort}/>
        </Container>
    )
}

export default ProductList