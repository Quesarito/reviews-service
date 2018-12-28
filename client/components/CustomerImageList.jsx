import React from 'react';
import styled from 'styled-components';
import CustomerImage from './CustomerImage.jsx';

const StyledImage = styled.div`
background-color: #8ef2ef;
width: 100px;
height: 100px;
margin-right:10px;
`;

const StyledGallery = styled.div`
  display: flex;
`;

const CustomerImageList = ({displayImageInModal}) => {
  return (
    <div>
      <h3>Customer images</h3>
      <StyledGallery>
        <CustomerImage displayImageInModal={displayImageInModal}/>
      </StyledGallery>
      <a href="#">See all customer images</a>
    </div>
  );
};

export default CustomerImageList;