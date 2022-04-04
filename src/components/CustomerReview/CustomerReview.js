import React from 'react';
import './CustomerReview.css';

const CustomerReview = (props) => {
    const { name, price, rating, img } = props.review;
    return (
        <div>

            <div className='customer-review'>
                <img src={img} alt="" />
                <h4>Name:{name}</h4>
                <p>Price:{price}</p>
                <p><small>Rating:{rating}</small></p>
                <button>Add to cart</button>

            </div>
        </div>
    );
};

export default CustomerReview;