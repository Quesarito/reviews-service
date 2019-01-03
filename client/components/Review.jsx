import React from 'react';
import styled from 'styled-components';
import {FiveStarSmall} from './FiveStar.jsx';
import {formatDate} from '../helpers';
import {CustomerImage} from './CustomerImage.jsx';
import {StyledButton, StyledLink, Sprite} from './StyledComponents.jsx';

const StyledReview = styled.div`
  color: black;
  font-size: 13px;
  margin: 10px 0;
  padding: 10px;

  a {
    color: black;
  }

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

const ReviewHeadline = styled(StyledLink)`
  font-weight:700;
`;

const StyledHeader = styled.div`
  margin: 10px 0;

  div {
    margin: 0 10px 0 0;
  }
`;

const ReviewBody = styled.div`
  max-height: 200px;
  overflow: hidden;
  margin: 10px 0;

  p {
    margin-top: 0;
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


//Toggle read more/less display
const toggleRead = (e) => {
  let read = e.target;
  let body = e.target.parentNode.parentNode;
  console.log(read);
  console.log(body);
  // if (read.dataset.open) {
  //   body.style('height', 200);
  //   read.text = 'Read more';
  // } else {
  //   body.style('height', 'auto');
  //   read.innerHTML = 'Read less';
  // }
}

const StyledReadLess = styled(Sprite)`
  position: absolute;
  background-color: red;
  height:50px;
  width:100%;
  bottom: 0;
`;

const ReadMore = () => {
  <div>
    <div>gradient</div>
    <StyledLink 
      data-open="false"
      onClick={toggleRead}>
      Read more
    </StyledLink>
  </div>
}

const ReadLess = () => 
  <StyledReadLess>
    <div></div>
    <StyledLink 
      data-open="true"
      onClick={toggleRead}>
      Read less
    </StyledLink>
  </StyledReadLess>;

const Review = ({productReview, displayImageInModal}) => {
  return (
    <StyledReview className="Review">
      {/* HEADER: AUTHOR INFO */}
      <div className="flex-left-center">
        <Avatar as="img"
          src={productReview.avatar}
        />
        {productReview.username}
      </div>

      {/* HEADER: REVIEW INFO */}
      <StyledHeader>
        <div className="flex-left-center">
          <FiveStarSmall rating={productReview.stars}/> 
          <ReviewHeadline as="a" href="#">{productReview.headline}</ReviewHeadline>
        </div>  
        <div className="gray">{formatDate(productReview.posted)}</div>
        <div className="orange verified">{(productReview.verified) ? 'Verified Purchase' : ''}</div>
      </StyledHeader>

      {/* REVIEW BODY -- add read more tag */}
      <ReviewBody dangerouslySetInnerHTML={{__html: productReview.body}}>
        {/* <ReadLess /> */}
        {/* {productReview.body} */}
      </ReviewBody>

      {/* IMAGE THUMBNAILS */}
      <StyledImageList>
        {productReview.media.map((mediaNode) => 
          <CustomerImage 
            mediaNode={mediaNode}
            displayImageInModal={displayImageInModal}
          />)}
      </StyledImageList>
      
      {/* FOOTER: HELPFUL, CONTACT, REPORT */}
      <StyledFooter>
        <div className="helpful">{productReview.helpful} people found this helpful</div>
        <div>
          <HelpfulButton>Helpful</HelpfulButton> 
          <span className="gray">| <StyledLink href="#">Comment</StyledLink> | <StyledLink href="#">Report abuse</StyledLink></span>
        </div>
      </StyledFooter>
    </StyledReview>
  );
};

Review.displayName = 'Review';
export default Review;
