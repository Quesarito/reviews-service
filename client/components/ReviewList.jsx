import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';

const StyledReviewList = styled.div`
  width: 600px;
`;

const ReviewList = ({reviews}) => {
  return (
    <StyledReviewList>
      {
        reviews.map(review => 
          <Review key={review.id} productReview={review}/>
        )
      }
    </StyledReviewList>
  );
};

export default ReviewList;