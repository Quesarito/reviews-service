import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.div`
background-color: #8ef2ef;
width: 100px;
height: 100px;
margin-right:10px;
`;

const StyledGallery = styled.div`
  display: flex;
`;

const CustomerImage = () => {
  return (
    <StyledImage></StyledImage>
  );
};

const CustomerImages = () => {
  return (
    <div>
      <h3>Customer images</h3>
      <StyledGallery>
        <CustomerImage />
        <CustomerImage />
      </StyledGallery>
      <a href="#">See all customer images</a>
    </div>
  );
};

export default CustomerImages;