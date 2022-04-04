import React from 'react';
import img from '../../img/google.png';
import './About.css';

const About = () => {
    return (

        <div>
            <h2 className='text-content'>CONTACT:</h2>
            <p className='p-text'>Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
            <div className='about'>
                <div className='input-container' >
                    <p><input type="text" placeholder='Name' /></p>
                    <p><input type="email" name="" id="" placeholder='Email' required /></p>
                    <p className='message'><input type="text" placeholder='Message' /></p>
                    <button className='submit-btn'>SUBMIT</button>
                </div>
                <div className='img-container'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;