import { Button } from 'bootstrap';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import img from '../../img/header-img.png';
import CustomerReview from '../CustomerReview/CustomerReview';
import ReviewPage from '../ReviewPage/ReviewPage';
import './Home.css';


const Home = () => {
    const [reviews, setReviews] = useReview();
    const navegate = useNavigate()

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data.slice(0, 3)))
    }, [])



    return (
        <div>
            <div className='my-5'>
                <div className='home-container row'>
                    <div className=' col-md-6 text-start p-5'>
                        <h1 className='heading'>WELCOME TO LAPTOP <span className='orange'>ANALYSIS WEBSITE</span></h1>
                        <p><small>Welcome to my laptop analysis website. This will be helping to laptop lover people.because we are discuss more about laptop information. So that we can help you about your usecase and more knowledge. please stay with us ....</small></p>
                        <button className='btn'>DETAILE INFORMATIN</button>
                    </div>
                    <div className='col-md-6'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h2 className='customer-review-heading'>Customer Review:</h2>
                <div className='rewiew-container'>
                    {
                        reviews.map(review => <CustomerReview
                            key={review.id}
                            review={review}
                        ></CustomerReview>)

                    }

                </div>
                <button className='detail-btn' onClick={() => navegate('/reviewpage')}>Detail Review</button>
            </div>
        </div>
    );
};

export default Home;