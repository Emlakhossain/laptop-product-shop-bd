import React from 'react';
import './ReviewContainer.css';
const ReviewContainer = (props) => {
    console.log(props.reviewPage)
    const { img, name, customerName, comments, rating } = props.reviewPage
    return (
        <div>
            <div className='review-details'>
                <img src={img} alt="" />
                <p>Name:{name}</p>
                <p>CustomerName:{customerName}</p>
                <p>Feedback:{comments}</p>
                <p>Rating:{rating}</p>
            </div>
        </div>
    );
};

export default ReviewContainer;