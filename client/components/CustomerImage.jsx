import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  content: url('${props => props.src}');
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