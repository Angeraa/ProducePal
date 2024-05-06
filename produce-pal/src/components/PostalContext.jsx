import React, { createContext, useState } from 'react';

// Create a new context
export const PostalContext = createContext({
    postalCode: '',
    setPostalCode: () => {}
});

// Create a provider component
export const PostalContextProvider = ({ children }) => {
    const [postalCode, setPostalCode] = useState('Enter Postal Code');

    return (
        <PostalContext.Provider value={{ postalCode, setPostalCode }}>
            {children}
        </PostalContext.Provider>
    );
};
