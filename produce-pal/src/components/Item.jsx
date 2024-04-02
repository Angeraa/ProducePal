import React from 'react';
import './Item.css';

const Item = ({props}) => {
  return (
    <div className='wrapper'>
        <div className='item-header'>
            <img src={props.merchant_logo} className='merchant-logo'/>
            <b className='merchant'>{props.merchant}</b>
            <button className='add-button'>Add To Cart</button>
        </div>
        <div className='item-container'>
            <img src={props.item_image} className='item-image'/>
            <div className='description'>
                <div className='name'>{props.name}</div>
                <div className='price'>{props.quantity}/{props.price}</div>
                <div className='valid-date'>Valid Date: {props.valid_date}</div>
            </div>
        </div>
    </div>
  );
};

export default Item;
