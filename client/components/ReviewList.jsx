import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';

const StyledReviewList = styled.div`
  width: 600px;

  &>span {
    font-size: 13px;
    font-weight:700;
  }
  select {
    display: block;
    margin: 10px 0;
  }
`;

const ReviewList = ({reviews, displayImageInModal}) => {
  return (
    <StyledReviewList>
      <span>Showing X-Y of Z reviews</span>
      <select id="showReviewsBy">
        <option value="top">Top Reviews</option>
        <option value="recent">Most recent</option>
      </select>
      {
        reviews.map(review => 
          <Review productReview={review} displayImageInModal={displayImageInModal}/>
        )
      }
    </StyledReviewList>
  );
};

StyledReviewList.displayName = 'StyledReviewList';
export default ReviewList;