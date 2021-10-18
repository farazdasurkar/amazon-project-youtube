import React from 'react';
import './Product.css';

function Product({id,title, image,price,rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title} </p>
                <p className="Prouct__Price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                        {Array(rating).fill().map((_,i) =>(
                            <p>✡ </p>
                        ))}
                        
                        
                </div>
            </div>
            <img  src ={image} alt="product">
            </img>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product
