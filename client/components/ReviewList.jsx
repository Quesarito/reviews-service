import React from 'react';
import styled from 'styled-components';
import Review from './Review.jsx';
import {StyledButton, StyledLink} from './StyledComponents.jsx';

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

const StyledSelect = styled(StyledButton)`
  option {
    color: limegreen;
    background-color: blue;
    :checked {
      border:solid 1px pink;
      background-color: orange;
    }
  }

  div {
    font-weight: bold;
  }
`;

const ReviewList = ({reviews, filter, displayImageInModal, changeDisplayedReviews}) => {
  return (
    <StyledReviewList>
      <span>
        Showing {1}-{reviews.length} of {reviews.length} reviews
        {
          (!filter) ? ''
            : <>
              {` with "${filter}". `}
              <StyledLink
                data-value="reset"
                onClick={changeDisplayedReviews}>
                Clear filter
              </StyledLink>
            </>
        }
      </span>
      <StyledSelect as="select" id="showReviewsBy"
        onChange={changeDisplayedReviews}>
        <option value="top">Top Reviews</option>
        <option value="recent">Most recent</option>
      </StyledSelect>
      {
        reviews.map(review => 
          <Review 
            productReview={review}
            displayImageInModal={displayImageInModal}/>
        )
      }
    </StyledReviewList>
  );
};

StyledReviewList.displayName = 'StyledReviewList';
export default ReviewList;