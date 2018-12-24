import React from 'react';
import styled from 'styled-components';
import {FiveStarSmall} from './FiveStar.jsx';

const StyledFeatureRating = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;

    span {
      margin-left: 5px;
    }
  }
`;

const FeatureRating = ({feature, rating}) => {
  return (
    <StyledFeatureRating>
      <div>{feature}</div> 
      <div>
        <FiveStarSmall rating={rating}/> 
        <span className="lightgray">{rating}</span>
      </div>
    </StyledFeatureRating>
  );
};

export default FeatureRating;