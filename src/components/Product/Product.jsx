import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const {img, name, seller,ratings, price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
          <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>price :{price}</p>
                <p>Manufacturer : {seller}</p>
                <p>ratings :{ratings}</p>
          </div>
          <button className='btn-card'>Add to Card</button>
        </div>
    );
};

export default Product;