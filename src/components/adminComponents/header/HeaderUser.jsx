import React from 'react'
import './headeruser.css'
import Salir from './Salir'
import logo from '../../../assets/HOSPITAL ANIMAL/8.svg'
import Search from '@mui/icons-material/Search';
import { Badge, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { productsCart } from '../../ProductsCart';

const HeaderUser = (props) => {



  return (
    <header>
      <div className='container header__container'>
        <div className="Wrapper">
          {/*===================LEFT SIDE======================*/}
          <div className="left">
            <img className='logo'src={logo} alt="Logo" />
          </div>
          {/*===================CENTER SIDE======================*/}
          <div className="center">
            <div className="cart__container">
              
            </div>
            <div className="search__container">
              <input className='input search__input'></input>
              <Search/>
            </div>

                <Link to = '/cart'>
              <div className="cart__icon">
                <IconButton>
                  <Badge badgeContent={productsCart.length} color="secondary">
                    <ShoppingCartOutlinedIcon/>
                  </Badge>
                </IconButton>
              </div>
                </Link>
          </div>
          
            {/*===================RIGTH SIDE======================*/}
          <div className="rigth">
            <a href ="/">Inicio</a>
            <a href ="/productos">Productos</a>
            <a href ="/contactanos">Contactanos</a>
            
            <Link to = {props.ruta}>
              <Salir BottonTitle = {props.page}/>
            </Link>
            
          </div>
          


        </div>
      </div>
    </header>
  )
}

export default HeaderUser
