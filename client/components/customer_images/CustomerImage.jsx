import React from 'react';
import {prefaceURL} from '../../helpers';
import styles from './stylesCustomerImages.css';

const CustomerImage = ({mediaNode, className, displayImageInModal}) => {
  let image = {
    backgroundImage: `url('${prefaceURL(mediaNode.url)}')`
  };
  return (
    <div className={`${styles.customerImage} ${className}`}
      data-review-index={mediaNode.reviewIndex}
      data-media-index={mediaNode.index}
      onClick={displayImageInModal}
      style={image}>
    </div>
  );
};

CustomerImage.displayName = 'CustomerImage';

export {CustomerImage};