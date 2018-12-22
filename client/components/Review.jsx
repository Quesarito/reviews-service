import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: mediumspringgreen;
  border: solid 1px black;
`;

let Review = ({productReview}) => {
  // console.log('REVEVRVEVEVEVVRVRVRVE', productReviews);
  return (
    <StyledDiv className="Review">
      {/* {(productReview === undefined) ? '' : productReview[0].headline} */}
      {JSON.stringify(productReview)}
    </StyledDiv>
  );
};

export default Review;
