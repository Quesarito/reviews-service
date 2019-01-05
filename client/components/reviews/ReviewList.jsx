import React from 'react';
import Review from './Review.jsx';
import styles from './stylesReviews.css';

const ReviewList = ({reviews, filter, displayImageInModal, changeDisplayedReviews}) => {
  return (
    <div className={styles.reviewList}>
      <span className={styles.showing}>
        Showing {1}-{reviews.length} of {reviews.length} reviews
        {
          (!filter) ? ''
            : <>
              {` with "${filter}". `}
              <a className={styles.clearFilter}
                data-value="reset"
                onClick={changeDisplayedReviews}>
                Clear filter
              </a>
            </>
        }
      </span>

      <select id="showReviewsBy"
        onChange={changeDisplayedReviews}>
        <option value="top">Top Reviews</option>
        <option value="recent">Most recent</option>
      </select>

      {
        reviews.map(review => 
          <Review 
            key={review.id}
            productReview={review}
            displayImageInModal={displayImageInModal}/>
        )
      }
    </div>
  );
};

export default ReviewList;