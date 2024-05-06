import React, { useContext, useState, useEffect } from 'react';
import './ShoppingCart.css'
import { ShoppingCartContext } from './ShoppingCartContext.jsx';
import CartItem from './CartItem.jsx';

const ShoppingCart = () => {
    const {shoppingCart, clearCart} = useContext(ShoppingCartContext);
    const [total, setTotal] = useState(0);
    const [madeChange, setMadeChange] = useState(false);

    useEffect(() => {
        let total = 0;
        shoppingCart.forEach((item) => {
            total += parseFloat(item.price) * parseInt(item.quantity) * parseInt(item.number);
        });
        setTotal(total.toFixed(2));
        setMadeChange(false);
    }, [madeChange]);

    useEffect(() => {
        var cartItems = document.getElementsByClassName('cart-item-list');
        var titles = document.getElementsByClassName('shopping-list-titles');
        if (cartItems.length !== 0 && titles.length !== 0) {
            var scrollBarWidth = cartItems[0].offsetWidth - cartItems[0].clientWidth;
            titles[0].style.paddingRight = scrollBarWidth + 'px';
        }  
    }, [shoppingCart]);

    if (shoppingCart !== undefined && shoppingCart.length !== 0) {
        console.log("Displaying Shopping Cart\n");
        return (
            <div className='shopping-list-wrapper'>
                <div className='shopping-list-titles'>
                    <div className='title-wrapper'>
                        <div className='shopping-list-title'>Item</div>
                        <div className='shopping-list-title'>Price</div>
                        <div className='shopping-list-title'>Quantity</div>
                        <div className='shopping-list-title'>Merchant</div>
                    </div>
                    <div className='spacer'></div>
                </div>
                <div className='cart-item-list'>
                    {shoppingCart.map((item) => (
                        <CartItem key={item.name} item={item} setMadeChange={setMadeChange}/>
                    ))}
                </div>
                <div className='shopping-list-footer'>
                    <div className='total-price'>Total Price: {total}</div>
                    <button className='clear-button' onClick={() => clearCart()}>Clear Cart</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='shopping-list-wrapper'>
                <div>Shopping List is Empty.</div>
            </div>
        )
    };
};

export default ShoppingCart;