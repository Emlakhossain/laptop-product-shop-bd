import React, { useEffect, useState } from 'react';
import useReview from '../../hooks/useReview';
import ReviewContainer from '../ReviewContainer/ReviewContainer';
import './ReviewPage.css';

const ReviewPage = (props) => {
    const [reviewPages, setReviewPages] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviewPages(data))
    }, [])
    return (
        <div className='review-Container'>

            {
                reviewPages.map(reviewPage => <ReviewContainer
                    key={reviewPage.id}
                    reviewPage={reviewPage}
                ></ReviewContainer>)
            }
        </div>
    );
};

export default ReviewPage;