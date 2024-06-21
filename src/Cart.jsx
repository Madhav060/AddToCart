import React from 'react';

function Cart(props) {
    const cart = props.value;

    return (
        <div>
            <h2>Cart</h2>
            {cart.map((e, index) => (
                <li key={index}>{e.Name} -  ${e.Price}</li>
            ))}
        </div>
    );
}

export default Cart;
