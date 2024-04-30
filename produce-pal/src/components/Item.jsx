import React, { useContext } from 'react';
import './Item.css';
import { ShoppingCartContext } from './ShoppingCartContext';

const Item = ({item}) => {
  const {shoppingCart, addItem, removeItem} = useContext(ShoppingCartContext);
  const buttonHandler = (item) => {
    shoppingCart.includes(item) ? removeItem(item) : addItem(item);
  }

  return (
    <div className='wrapper'>
        <div className='item-header'>
            <img src={item.merchant_logo} className='merchant-logo'/>
            <b className='merchant'>{item.merchant}</b>
            <button className='add-button' 
                    onClick={() => buttonHandler(item)}>
              {shoppingCart.includes(item) ? "Remove from cart" : "Add to cart"}
            </button>
        </div>
        <div className='item-container'>
            <img src={item.item_image} className='item-image'/>
            <div className='description'>
                <div className='name'>{item.name}</div>
                <div className='price'>{item.quantity}/{item.price}</div>
                <div className='valid-date'>Valid Date: {item.valid_date}</div>
            </div>
        </div>
    </div>
  );
};

export default Item;
