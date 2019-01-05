import React from 'react';
import styles from './stylesKeywords.css';

const Keyword = ({word, changeDisplayedReviews, className}) => {
  return (
    <div className={`${styles.keyword} ${className}`}
      data-value="keyword"
      data-filter={word}
      onClick={changeDisplayedReviews}>
      {word}
    </div>
  );
};

const Keywords = ({keywords, filter, changeDisplayedReviews}) => {
  return (
    <>
      <h3>Read reviews that mention</h3>
      <div className={styles.keywordList}>
        {
          keywords.map(kw => {
            let className = (kw === filter) ? styles.selected : '';
            return <Keyword
              key={kw}
              word={kw}
              className={className}
              changeDisplayedReviews={changeDisplayedReviews}
            />;
          })
        }
      </div>
    </>
  );
};

export default Keywords;