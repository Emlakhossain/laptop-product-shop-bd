import React from 'react';
import ReviewPage from '../ReviewPage/ReviewPage';
import './CustomerReview.css';

const CustomerReview = ({ review }) => {
    const { name, price, rating, img } = review;
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