import React from 'react'
import HeaderUser from '../components/adminComponents/header/HeaderUser'
import CategoriesUser from '../components/categoriesuser/CategoriesUser'
import Slider from '../components/slider/Slider'



const Home = () => {
  return (
    <div>
        <HeaderUser page="Login" ruta="/login"/>
        <Slider/>
        <CategoriesUser/>
        

    </div>
  )
}

export default Home
