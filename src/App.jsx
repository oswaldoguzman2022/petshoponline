import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Contactanos from './pages/Contactanos';



const App = () => {
  return (    
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/productos" element={<ProductList/>}/>
          <Route path="/productos/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contactanos" element={<Contactanos/>}/>
        </Routes>
      </Router> 
    </>
  )
}

export default App



