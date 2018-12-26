import React from 'react';
import styled from 'styled-components';
import {FiveStarSmall} from './FiveStar.jsx';
import {formatDate} from '../helpers';
const StyledDiv = styled.div`
  color: black;
  font-size: 13px;
  margin: 10px 0;
  padding: 10px;

  .helpful {
    color: #767676;
  }

  .verified {
    font-weight: bold;
    font-size: 11px;
  }
`;

const Avatar = styled.div`
  border-radius: 50%;
  height:40px;
  width:40px;
  margin-right: 10px;
`;

const SpanHeadline = styled.span`
  font-weight:700;
`;

const StyledHeader = styled.div`
  margin: 10px 0;

  div {
    margin: 2px 10px 0 0;
  }
`;

const StyledFooter = styled.div`
  margin-top: 5px;

  div {
    margin: 10px 0;
  }

  .helped {
    color: #767676;
  }  
`;


const Review = ({productReview}) => {
  return (
    <StyledDiv className="Review">
      {/* HEADER: AUTHOR INFO */}
      <div className="flex-left-center">
        <Avatar 
          as="img"
          src={productReview.avatar}
        />
        {productReview.username}
      </div>

      <StyledHeader>
        <div className="flex-left-center">
          <FiveStarSmall rating={productReview.stars}/> <SpanHeadline>{productReview.headline}</SpanHeadline>
        </div>  
        <div className="gray">{formatDate(productReview.posted)}</div>
        <div className="orange verified">{(productReview.verified) ? 'Verified Purchase' : ''}</div>
      </StyledHeader>

      <div>{productReview.body}</div>

      <StyledFooter>
        <div className="helpful">{productReview.helpful} people found this helpful</div>
        <div>
          <button>Helpful</button> 
          <span className="gray">| Contact | Report abuse</span>
        </div>
      </StyledFooter>
    </StyledDiv>
  );
};

Review.displayName = 'Review';
export default Review;
