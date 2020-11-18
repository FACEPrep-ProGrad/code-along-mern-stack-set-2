import React from 'react'
import Rating from '../../components/Rating/Rating';

function Product(props) {
    const { product } = props;
    // console.log(product);
    // console.log(product._id);
    // console.log(product.name);
    // console.log(product.numReviews);
    return (
        <div key={product._id} className="card">
            <a href={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.name}/>
            </a>
            <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                <Rating rating = {product.rating} numReviews = {product.numReviews}></Rating>
               <div className="price">${product.price}</div>
            </div>
        </div>
    )
}

export default Product
