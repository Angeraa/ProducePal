import React, { useContext, useEffect, useState } from 'react';
import './CartItem.css';
import { ShoppingCartContext } from './ShoppingCartContext.jsx';

const CartItem = ({item, setMadeChange}) => {
    const {shoppingCart, removeItem} = useContext(ShoppingCartContext);
    const [number, setNumber] = useState(parseInt(item.number));
    const HandleDecrease = () => {
        if (number > 1) {
            setNumber(number - 1);
            setMadeChange(true);
        } else {
            setMadeChange(true);
            removeItem(item);
        }
    }

    const HandleIncrease = () => {
        setNumber(number + 1);
        setMadeChange(true);
    }

    useEffect(() => {
        shoppingCart.find((i) => i === item).number = number;
        console.log("Internal State = " + number);
        console.log("External State = " + shoppingCart.find((i) => i === item).number);
    }, [number]);
    
    return (
        <div className='cart-items-wrapper'>
            <div className='cart-item'>
                <div className='item-info'>{item.name}</div>
                <div className='item-info'>{item.price}</div>
                <div className='item-info'>{item.quantity * number}</div>
                <div className='item-info'>{item.merchant}</div>
            </div>
            <div className='cart-item-buttons'>
                <button className='item-increase-button' 
                onClick={() => HandleIncrease()}>
                    {">"}
                </button>
                <button className='item-decrease-button' 
                onClick={() => HandleDecrease()}>
                    {"<"}
                </button>
            </div>
        </div>
    )
}

export default CartItem;