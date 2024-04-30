import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext({
        shoppingCart: [],
        addItem: () => {},
        removeItem: () => {},
        clearList: () => {},
});

export const ShoppingCartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([]);

    // Add an item to the shopping list
    const addItem = (item) => {
        item.number = "1";
        setShoppingCart([...shoppingCart, item]);
    };

    // Remove an item from the shopping list
    const removeItem = (item) => {
        setShoppingCart(shoppingCart.filter((i) => i !== item));
    };

    // Clear the shopping list
    const clearCart = () => {
        setShoppingCart([]);
    };

    // Value object to be provided by the context
    const value = {
        shoppingCart,
        addItem,
        removeItem,
        clearCart,
    };

    // Return the provider component with the value object
    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    );
};