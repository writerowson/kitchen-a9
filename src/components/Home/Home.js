
import React from 'react';
import { Link } from 'react-router-dom';
import UseReview from '../../Hooks/UseReview';
import img from '../image/heading-img.png'
import Review from '../Review/Review';


const Home = () => {
    const [reviews, setReview] = UseReview([])
    return (
        <div className='container-fluid'>
            <div className='row d-flex  mb-5'>
                <div className='col-lg-6 col-12 '>
                    <img src={img} alt="" />
                </div>
                <div className='col-lg-6 col-12 text-start'>
                    <h1>Get Your Kitchen Appliances</h1>
                    <h1 >Set Your <span style={{ color: 'RGB(220,77,1)' }}>  Cooking Express</span></h1>
                    <p className='mt-3'> In this modern life  all busy in 24/7. For this busy life kitchen is the most untouchable part of every house. However, it's not any healthy solution. Modern kitchen accessories can be a healthy solution of time management and healthy food, That's why we are here </p>
                    <button style={{ backgroundColor: 'RGB(220,77,1)' }} type="button" class="btn text-light fw-bold mt-3">For More Details</button>

                </div>
            </div >
            <div>
                <h2>Our GoodWill</h2>
                {
                    <Review></Review>
                }
            </div>
        </div >
    );
};

export default Home;