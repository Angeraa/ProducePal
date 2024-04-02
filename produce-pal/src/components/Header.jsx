import React from 'react';
import "./Header.css";
import ShoppingCart from './ShoppingCart.jsx';
import { CiShoppingCart } from "react-icons/ci";
import Popup from "reactjs-popup";
import PostalCode from './PostalCode.jsx';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='produce-pal-logo-container'>
        Produce Pal
      </div>
      <div className='popup-container'>
        <Popup trigger={<button className='cart-button'><CiShoppingCart className='cart-logo'/></button>} position="left">
          <ShoppingCart/>
        </Popup>
      </div>
      <div className='postal-code'>
        <PostalCode />
      </div>
    </div>
  );
};

export default Header;
