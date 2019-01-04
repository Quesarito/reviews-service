import React from 'react';
import styled from 'styled-components';
import {prefaceURL} from '../helpers';
import styles from './stylesCustomerImages.css';

const StyledThumbnail = styled.div`
  background: url('${props => props.src}') center/cover; 
  height: 100px;
  width: 100px;
  display: inline-block;
`;

const CustomerImage = ({mediaNode, displayImageInModal}) => {
  let image = {
    backgroundImage: `url('${prefaceURL(mediaNode.url)}')`
  };
  return (
    <div className={styles.customerImage}
      data-review-index={mediaNode.reviewIndex}
      data-media-index={mediaNode.index}
      onClick={displayImageInModal}
      style={image}>
    </div>
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

CustomerImage.displayName = 'CustomerImage';
CustomerThumbnail.displayName = 'CustomerThumbnail';

export {CustomerImage, CustomerThumbnail};