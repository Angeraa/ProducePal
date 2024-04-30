import React from 'react';
import "./Header.css";
import { CiShoppingCart } from "react-icons/ci";
import Popup from "reactjs-popup";
import PostalCode from './PostalCode.jsx';
import ShoppingCart from './ShoppingCart.jsx';

const Header = () => {
  //issue is with ShoppingCart, try and figure it out, might be a map issue again or with Cart Item
  return (
    <div className='header-container'>
      <div className='produce-pal-logo-container'>
        Produce Pal
      </div>
      <Popup trigger={<button className='cart-button'><CiShoppingCart className='cart-logo'/></button>} position="left top">
        <ShoppingCart />
      </Popup>
      <div className='postal-code'>
        <PostalCode />
      </div>
    </div>
  );
};

export default Header;
