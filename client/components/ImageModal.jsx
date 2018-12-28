import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    background: linear-gradient(#f4f4f4, #e0e0e0);
    box-shadow: inset 0px -1px 1px 0px rgb(0,0,0,0.2);
    height:40px;
`;

const StyledImageModal = styled.div`
    background-color: #fff;
    border-radius: 2px;
    width: 600px;
    position: fixed;
    margin: auto;
    z-index: 10;
`;

const StyledDim = styled.div`
    background-color: rgb(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
`;

const ImageModal = () => {
    return (
        <>
        <StyledImageModal>
            <Header>
                X
            </Header>
            <div>View image gallery</div>
            <div className="big-img">BIG IMAGE</div>
            <div className="review">Modified review</div>
            <div className="gallery">Images in this review</div>
        </StyledImageModal>
        <StyledDim />
        </>
    );
};

export default ImageModal;