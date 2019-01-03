import React from 'react';
import styled from 'styled-components';

const StyledKeyword = styled.div`
  background-color: #D7E8EA;
  border-bottom: solid 1px #969696;
  padding: 5px;
  margin-right: 10px;
`;

const StyledSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  margin-bottom: 20px;

  .selected {
    background-color:#00464F;
    color: #fff;
  }
`;

const Keyword = ({word, changeDisplayedReviews, className}) => {
  return (
    <StyledKeyword
      className={className}
      data-value="keyword"
      data-filter={word}
      onClick={changeDisplayedReviews}>
      {word}
    </StyledKeyword>
  );
};
const Keywords = ({keywords, filter, changeDisplayedReviews}) => {
  console.log('KEYWORD FILTERSSS', filter);
  return (
    <>
      <h3>Read reviews that mention</h3>
      <StyledSection>
        {
          keywords.map(kw => {
            let className = (kw === filter) ? 'selected' : '';
            return <Keyword as="a" href="#"
              word={kw}
              className={className}
              changeDisplayedReviews={changeDisplayedReviews}
            />
          })
        }
      </StyledSection>
    </>
  );
};

export default Keywords;