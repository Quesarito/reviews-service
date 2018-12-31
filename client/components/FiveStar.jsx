import React from 'react';
import styled from 'styled-components';
import stars from '../styles/sprites.png';
import {setStars} from '../helpers';

const StyledStars = styled.div`
  background-image: url(${stars});
  background-repeat: no-repeat;
  background-position: -${({starRating}) => starRating}px -398px;
  background-size: 400px;
  display: inline-block;
  width: 95px;
  height:20px;
`;

const StyledStarsSmall = styled(StyledStars)`
  background-position: -${({starRating}) => (starRating)}px -369px;
  width: 80px;
  height: 15px;
`;

const FiveStar = ({rating}) => {
  return (
    <StyledStars starRating={setStars(rating, 'large')}/>
  );
};

const FiveStarSmall = ({rating}) => {
  return (
    <StyledStarsSmall starRating={setStars(rating)}/>
  );
};

export {FiveStar, FiveStarSmall};