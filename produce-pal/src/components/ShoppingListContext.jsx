import React, { createContext, useState } from 'react';

export const ShoppingListContext = createContext({
        shoppingList: [],
        addItem: () => {},
        removeItem: () => {},
        clearList: () => {},
});

export const ShoppingListProvider = ({ children }) => {
    const [shoppingList, setShoppingList] = useState([]);

    // Add an item to the shopping list
    const addItem = (item) => {
        setShoppingList([...shoppingList, item]);
    };

    // Remove an item from the shopping list
    const removeItem = (item) => {
        setShoppingList(shoppingList.filter((i) => i !== item));
    };

    // Clear the shopping list
    const clearList = () => {
        setShoppingList([]);
    };

    // Value object to be provided by the context
    const value = {
        shoppingList,
        addItem,
        removeItem,
        clearList,
    };

    // Return the provider component with the value object
    return (
        <ShoppingListContext.Provider value={value}>
            {children}
        </ShoppingListContext.Provider>
    );
};