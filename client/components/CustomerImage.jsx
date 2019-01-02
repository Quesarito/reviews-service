import React from 'react';
import styled from 'styled-components';
import {prefaceURL} from '../helpers';

const StyledImage = styled.img`
  content: url('${props => props.src}');
`;
const StyledThumbnail = styled.div`
  background: url('${props => props.src}') center/cover; 
  height: 100px;
  width: 100px;
  display: inline-block;
`;

const CustomerImage = ({className, mediaNode, displayImageInModal}) => {
  return (
    <StyledImage as="a" href="#" 
      className={className}
      src={prefaceURL(mediaNode.url)} 
      data-review-index={mediaNode.reviewIndex}
      data-media-index={mediaNode.index}
      onClick={displayImageInModal}/>
  );
};

const CustomerThumbnail = ({className, mediaNode, displayImageInModal}) => {
  return (
    <StyledThumbnail as="a" href="#" 
      className={className}
      src={prefaceURL(mediaNode.url)} 
      data-review-index={mediaNode.reviewIndex}
      data-media-index={mediaNode.index}
      onClick={displayImageInModal}/>
  );
};

export {CustomerImage, CustomerThumbnail};