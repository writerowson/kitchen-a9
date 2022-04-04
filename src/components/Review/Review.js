import React from 'react';
import UseReview from '../../Hooks/UseReview';
import './Review.css'

const Review = ({ review }) => {
    const [allReview, setAllReview] = UseReview([])

    const { reviewerImg, name, about } = review
    return (
        <div>
            <div className="">
                <div>
                    <img style={{ height: ' 150px', width: '155px' }} src={reviewerImg} alt="" />
                    <h4>{name}</h4>
                    <p>{about}</p>
                </div>


            </div>


        </div>
    );
};

export default Review;