import React from 'react';
import UseReview from '../../Hooks/UseReview';
import img from '../image/heading-img.png'
import './Home.css'
import DisplayReview from '../DisplayReview/DisplayReview';
import CustomLink from '../CustomLimk/CustomLink';

const Home = () => {
    const [reviews, setReview] = UseReview([])
    return (
        <div className='container-fluid'>
            <div className='row d-flex  mb-5'>
                <div className='col-lg-5 col-12 mb-5'>
                    <img src={img} width="400PX" alt="" />
                </div>
                <div className='col-lg-7 col-12 text-start mt-1'>
                    <h1>Get Your Kitchen Appliances</h1>
                    <h1 >Set Your <span style={{ color: 'RGB(220,77,1)' }}>  Cooking Express</span></h1>
                    <p className='mt-3'> In this modern life  all busy in 24/7. For this busy life kitchen is the most untouchable part of every house. However, it's not any healthy solution. Modern kitchen accessories can be a healthy solution of time management and healthy food, That's why we are here </p>
                    <button style={{ backgroundColor: 'RGB(220,77,1)' }} type="button" className="btn text-light fw-bold">For More Details</button>

                </div>
            </div >
            <div>
                <h1>Our GoodWill</h1>
                <div className=" container ">
                    <div className='review-container '>
                        {
                            reviews?.slice(0, 3)?.map(review => <div className=''> <DisplayReview
                                key={review._id}
                                review={review}
                            >  </DisplayReview></div>)

                        }
                    </div>
                    <button style={{ backgroundColor: 'RGB(220,77,1)' }} type="button" className="btn  fw-bold mt-3"> <CustomLink className='text-light' to='/review' >See all reviews</CustomLink> </button>
                </div>
            </div>


        </div >
    );
};

export default Home;