import React, { useEffect, useState } from 'react';
import UseReview from '../../Hooks/UseReview';
import './AllReview.css'

const AllReview = ({ review }) => {
    const { reviewerImg, name, about } = review
    // const [allReview, setAllreview] = UseReview[]
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

export default AllReview;