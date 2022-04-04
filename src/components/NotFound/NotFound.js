import React from 'react';
import img from '../../img/not-found (2).png';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='page-not-found'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;