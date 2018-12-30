import React from 'react';
import styled from 'styled-components';
import {FiveStarSmall} from './FiveStar.jsx';
import {formatDate} from '../helpers';
import CustomerImage from './CustomerImage.jsx';
import {StyledButton} from './StyledComponents.jsx';

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

  .review-body {
    margin: 10px 0;
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

const StyledImageList = styled.div`

  a {
    height: 88px;
    width: auto;
    margin-right: 1px;
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

const HelpfulButton = styled(StyledButton)`
  width:auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 10px;
`;


const Review = ({productReview, displayImageInModal}) => {
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

      <div className="review-body">{productReview.body}</div>
      {/* READ MORE TAG HERE */}

      {/* IMAGE THUMBNAILS HERE */}
      <StyledImageList>
        {productReview.media.map((mediaNode) => 
          <CustomerImage 
            src={mediaNode.url}
            mediaIndex={mediaNode.index}
            reviewIndex={mediaNode.reviewIndex}
            displayImageInModal={displayImageInModal}
          />)}
      </StyledImageList>
      
      <StyledFooter>
        <div className="helpful">{productReview.helpful} people found this helpful</div>
        <div>
          <HelpfulButton>Helpful</HelpfulButton> 
          <span className="gray">| Contact | Report abuse</span>
        </div>
      </StyledFooter>
    </StyledDiv>
  );
};

Review.displayName = 'Review';
export default Review;
