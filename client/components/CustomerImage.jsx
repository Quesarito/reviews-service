import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  border: solid 1px red;
  content: url('${props => props.src}');
  content: attr(data-review-id)
  :hover {
    border: solid 1px green;
  }
`;

const CustomerImage = ({src, reviewId, mediaIndex, displayImageInModal}) => {
  return (
    <Thumbnail as="a" href="#" 
      src={src} 
      data-review-id={reviewId}
      data-media-index={mediaIndex}
      onClick={displayImageInModal}/>
  );
};

export default CustomerImage;