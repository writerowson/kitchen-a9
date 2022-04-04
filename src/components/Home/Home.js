
import React from 'react';
import { Link } from 'react-router-dom';
import UseReview from '../../Hooks/UseReview';
import Footer from '../Footer/Footer';
import img from '../image/heading-img.png'
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReview] = UseReview([])
    return (
        <div className='container-fluid'>
            <div className='row d-flex  mb-5'>
                <div className='col-lg-6 col-12 mb-5'>
                    <img src={img} alt="" />
                </div>
                <div className='col-lg-6 col-12 text-start mt-3'>
                    <h1>Get Your Kitchen Appliances</h1>
                    <h1 >Set Your <span style={{ color: 'RGB(220,77,1)' }}>  Cooking Express</span></h1>
                    <p className='mt-3'> In this modern life  all busy in 24/7. For this busy life kitchen is the most untouchable part of every house. However, it's not any healthy solution. Modern kitchen accessories can be a healthy solution of time management and healthy food, That's why we are here </p>
                    <button style={{ backgroundColor: 'RGB(220,77,1)' }} type="button" class="btn text-light fw-bold mt-3">For More Details</button>

                </div>
            </div >
            <div>
                <h1>Our GoodWill</h1>
                <div className="container">
                    <div className='review-container'>
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                            ></Review>)
                        }
                    </div>
                    <button style={{ backgroundColor: 'RGB(220,77,1)' }} type="button" class="btn text-light fw-bold mt-3">See all reviews</button>
                </div>
            </div>

            <Footer></Footer>
        </div >
    );
};

export default Home;