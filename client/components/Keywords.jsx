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
`;

const Keyword = ({word}) => {
  return (
    <StyledKeyword>
      {word}
    </StyledKeyword>
  );
};
const Keywords = (keywords) => {
  keywords = ['some test', 'words', 'here'];
  return (
    <>
      <h3>Read reviews that mention</h3>
      <StyledSection>
        {
          keywords.map(kw => <Keyword word={kw}/>)
        }
      </StyledSection>
    </>
  );
};

export default Keywords;