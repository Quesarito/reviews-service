import React from 'react';
import {FiveStarsSmall} from './StyledComponents.jsx';
import styles from './stylesStars.css';

const FeatureRating = ({feature, rating}) => {
  return (
    <div className={styles.featureWrapper}>
      <div>{feature}</div>
      <div className={styles.featureRating}>
        <FiveStarsSmall rating={rating}/>
        <span>{rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default FeatureRating;