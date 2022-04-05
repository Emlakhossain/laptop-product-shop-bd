import React from 'react';
import './CustomerReview.css';

const CustomerReview = ({ review }) => {
    const { name, price, rating, img, customerName, comments } = review;
    return (
        <div>

            <div className='customer-review'>
                <img src={img} alt="" />
                <h4>Name:{name}</h4>
                <p>Price:{price}</p>
                <p>Customer Name:{customerName}</p>
                <p><small>Clients Feedback:{comments}</small></p>
                <p><small>Rating:{rating}</small></p>

            </div>

        </div>
    );
};

export default CustomerReview;