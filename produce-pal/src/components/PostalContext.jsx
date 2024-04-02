import React, { createContext, useState } from 'react';

// Create a new context
export const PostalContext = createContext({
    postalCode: '',
    setPostalCode: () => {}
});

// Create a provider component
export const PostalContextProvider = ({ children }) => {
    const [postalCode, setPostalCode] = useState('M9V2Z6');

    return (
        <PostalContext.Provider value={{ postalCode, setPostalCode }}>
            {children}
        </PostalContext.Provider>
    );
};
