import React from 'react';
import styles from './stylesComponents.css';
import {setStars} from '../../helpers';

const Icon = () => {
  return (
    <div className={styles.iconWrapper}>
      <div className={styles.icon}></div>
    </div>
  );
};

const FiveStars = ({rating}) => {
  let backgroundX = {
    'backgroundPositionX': -setStars(rating, 'large')
  };
  return (
    <div className={styles.fiveStarWrapper}>
      <div className={styles.fiveStar} style={backgroundX}></div>
    </div>
  );
};

const FiveStarsSmall = ({rating}) => {
  let backgroundX = {
    'backgroundPositionX': -setStars(rating)
  };
  return (
    <div className={styles.fiveStarWrapper}>
      <div className={styles.fiveStarSmall} style={backgroundX}></div>
    </div>
  );
};

export {FiveStars, FiveStarsSmall};