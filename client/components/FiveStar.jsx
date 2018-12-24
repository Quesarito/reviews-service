import React from 'react';
import styled from 'styled-components';
import stars from '../styles/sprites.png';
import {setStars} from '../helpers';

const StyledStars = styled.div`
  background-image: url(${stars});
  background-repeat: no-repeat;
  background-position: -${({starRating}) => starRating}px top;
  background-size: 780px;
  display: inline-block;
  width: 160px;
  height:30px;
`;

const StyledStarsSmall = styled(StyledStars)`
  background-position: -${({starRating}) => (starRating / 2)}px top;
  background-size: 390px;
  width: 80px;
  height: 15px;
`;

const FiveStar = ({rating}) => {
  return (
    <StyledStars starRating={setStars(rating)}/>
  );
};

const FiveStarSmall = ({rating}) => {
  return (
    <StyledStarsSmall starRating={setStars(rating)}/>
  );
};

export {FiveStar, FiveStarSmall};