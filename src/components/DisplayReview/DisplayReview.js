import React from 'react';
import './DisplayREview.css'
const DisplayReview = ({ review }) => {
    const { reviewerImg, name, about } = review
    return (
        <div className="">
            <div>
                <img style={{ height: ' 150px', width: '155px' }} src={reviewerImg} alt="" />
                <h4>{name}</h4>
                <p>{about}</p>
            </div>

        </div>
    );
};

export default DisplayReview;