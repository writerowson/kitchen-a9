import React from 'react';
import './DisplayREview.css'
import { AiFillStar } from "react-icons/ai"
import { RiStarHalfFill } from "react-icons/ri"
const DisplayReview = ({ review }) => {
    const { reviewerImg, name, about, } = review
    return (
        <div className="">
            <div>
                <img style={{ height: ' 150px', width: '155px' }} src={reviewerImg} alt="" />
                <h4>{name}</h4>
                <p>{about}</p>

                <p style={{ color: 'RGB(220,77,1)' }}><AiFillStar ></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><RiStarHalfFill></RiStarHalfFill> </p>
            </div>

        </div >
    );
};

export default DisplayReview;