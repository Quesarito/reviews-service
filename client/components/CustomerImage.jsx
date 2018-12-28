import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img`
  border: solid 1px red;
  content: url('${props => props.src}');
  :hover {
    border: solid 1px green;
  }
`;

const CustomerImage = ({src, displayImageInModal}) => {
  return (
    <Thumbnail as="a" href="#" 
      src={src} 
      onClick={displayImageInModal}/>
  );
};

export default CustomerImage;