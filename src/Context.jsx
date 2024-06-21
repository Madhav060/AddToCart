import React, { createContext, useState } from 'react';

export const CartContext = createContext(null);

function Context(props) {
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default Context;
