import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  border: solid 1px red;
  content: url('${props => props.src}');
  :hover {
    border: solid 1px green;
  }
`;

const CustomerImage = ({className, mediaNode, displayImageInModal}) => {
  return (
    <StyledImage as="a" href="#" 
      className={className}
      src={mediaNode.url} 
      data-review-index={mediaNode.reviewIndex}
      data-media-index={mediaNode.index}
      onClick={displayImageInModal}/>
  );
};

export default CustomerImage;