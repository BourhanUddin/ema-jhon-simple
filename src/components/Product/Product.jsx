import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const {img, name, seller,ratings, price} = props.product;
     const manageAddToCart = props.manageAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>price :{price}</p>
                <p>Manufacturer : {seller}</p>
                <p>ratings :{ratings}</p>
          </div>
          <button onClick={() => manageAddToCart(props.product)} className='btn-card'>Add to Card 
          <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
    );
};

export default Product;