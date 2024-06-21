import React, { useContext } from 'react';
import Cart from './Cart';
import { CartContext } from './Context';

const items = [
    {
        "Name": "MacBook Pro",
        "Price": 2000
    },
    {
        "Name": "Iphone 15 Pro Max",
        "Price": 1500
    },
    {
        "Name": "Nothing 2a",
        "Price": 399
    }
];

function Items() {
    const cart = useContext(CartContext);

    return (
        <div>
            {items.map((item) => (
                <div key={item.Name}>
                    <h3>{item.Name}</h3>
                    <h4>{item.Price}</h4>
                    <button onClick={() => { cart.setCart([...cart.cart, { Name: item.Name, Price: item.Price }]) }}>
                        Add To Cart
                    </button>
                </div>
            ))}
            <Cart value={cart.cart} />
        </div>
    );
}

export default Items;
