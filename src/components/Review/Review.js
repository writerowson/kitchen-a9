import React from 'react';
import useReview from '../Hooks/useReview'

const Review = () => {
    const [allReviews, setAllReview] = useReview([])
    return (
        <div>
            <h5>THis is review</h5>

        </div>
    );
};

export default Review;