import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductReview } from '../../action/productActions';
import StarRating from '../StarRating';

export default function Review({ product }) {
  const [comment, setComment] = useState('');
  const [selectedStar, setSelectedStar] = useState(0);
  const [reviews, setReviews] = useState(product.reviews);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setComment(e.target.value);
  }

  const handleSubmitReview = () => {
    setComment("");
    setSelectedStar(0);

    // checking wheter id and review has same
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    let alreadyViewed;

    for(let i = 0; i < product.reviews.length; i++) {
      if(product.reviews[i].user === currentUser._id) {
        alreadyViewed = true;
      }
    }

    if(alreadyViewed) {
      alert('You have already reviewed this product') 
    } else {
        const review = {
            rating: selectedStar,
            comment: comment,
            name: currentUser.name,
        }
        dispatch(addProductReview(review, product._id))

        const newReviews = [...reviews, review];
        setReviews(newReviews);
    }
  }

  return (
    <div>
         <h2>Give Your Review</h2>
         <StarRating style={{ cursor: 'pointer' }} selectedStarByUser={selectedStar} starClicked={setSelectedStar}/>
         <textarea className='form-control mt-2' rows="5" cols="33" value={comment} onChange={handleChange} style={{ resize: 'none' }} />
         <button className='btn mt-3 text-white bg-dark' type='submit' onClick={handleSubmitReview}>Submit Review</button>

        <h2>Latest Review</h2>

        {
          reviews ? (
            reviews.map(review => (
              <div className='text-left'>
                <StarRating selectedStars={review.rating}/>
                <p>{review.comment}</p>
                <p>By : {review.name}</p>
                <hr/>
              </div>
            ))
          ): null
        }
        
    </div>
  )
}
