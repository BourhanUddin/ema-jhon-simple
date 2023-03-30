import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {//option = 3
    // const cart = props.cart;//option= 1
    // const {cart}= props; //option = 2
    // console.log(cart);
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping ;
        }

    const tax = total*7/100;
    const totalAmount = total + totalShipping + tax ;
    return (
        <div className='cart-container'>
                <h3>Cart summary </h3>
                <p>Selected Items : {cart.length}</p>
                <p>Total Price : ${total}</p>
                <p>Total Shippig : ${totalShipping}</p>
                <p>Tax : ${tax}</p>
                <p>Toatal Amount : ${totalAmount.toFixed(2)}</p>
        </div>
    );
};

export default Cart;