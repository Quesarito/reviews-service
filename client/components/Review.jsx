import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: black;
  font-family:
  border: solid 1px black;
`;

const Avatar = styled.div`
  border-radius: 50%;
  height:40px;
  width:40px;
`;

const SpanHeadline = styled.span`
  font-weight:bold;
`;

//The verified color is the same for links
const Verified = styled.span`
  font-weight:bold;
  font-size:11px;
  color:#c45500;
`;

//Need to calculate background image position via props
const StarBar = styled.span`
  background-color:#efefef;
`;

const StyledFooter = styled.div`
  .helped {
    color: #767676;
  }  
`;

const monthByNumber = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const formatDate = date => {
  date = new Date(date);
  let year = date.getFullYear();
  let month = monthByNumber[date.getMonth()];
  let day = date.getDate();
  return `${month} ${day}, ${year}`;
};

const Review = ({productReview}) => {
  return (
    <StyledDiv className="Review">
      <Avatar 
        as="img"
        src={productReview.avatar}
      />
      {productReview.username}<br />
      <StarBar>★★★★☆</StarBar> <SpanHeadline>{productReview.headline}</SpanHeadline>
      <div>{formatDate(productReview.posted)}</div>
      <Verified>{(productReview.verified) ? 'Verified' : ''}</Verified>
      <div>{productReview.body}</div>
      <StyledFooter>
        <div className='helped'>{productReview.helpful} people found this helpful</div>
        <button>Helpful</button> | Contact | Report abuse
      </StyledFooter>
    </StyledDiv>
  );
};

export default Review;
