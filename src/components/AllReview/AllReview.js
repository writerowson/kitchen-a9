import React, { useEffect, useState } from 'react';
import UseReview from '../../Hooks/UseReview';
import DisplayReview from '../DisplayReview/DisplayReview';
import './AllReview.css'

const AllReview = () => {
    const [allReview, setAllreview] = UseReview()
    return (
        <div className='container'>
            <h2> Our Customers Opinions</h2>
            <div className="review-container">
                {
                    allReview.map(review => <DisplayReview
                        key={review._id}
                        review={review}

                    ></DisplayReview>)
                }
            </div>
        </div>
    );
};

export default AllReview;