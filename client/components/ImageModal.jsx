import React from 'react';
import styled from 'styled-components';
import CustomerImage from './CustomerImage.jsx';
const Header = styled.div`
    background: linear-gradient(#f4f4f4, #e0e0e0);
    box-shadow: inset 0px -1px 1px 0px rgb(0,0,0,0.2);
    height:40px;
`;

const StyledImageModal = styled.div`
    background-color: #fff;
    border-radius: 2px;
    display: flex;
    width: 600px;
    position: fixed;
    margin: auto;
    z-index: 10;

    .gallery a {
        height: 88px;
        width: auto;
    }
`;

const LargeImage = styled(CustomerImage)`
    height:auto;
    width:200px;
    border: solid 1px blue;
`;

const StyledDim = styled.div`
    background-color: rgb(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left:0;
`;

const ImageModal = ({toggleModal, displayImageInModal, mediaIndex, reviewIndex, productReview}) => {
    return (
        <>
        <StyledImageModal>
            <Header>
                X
            </Header>
            <div>View image gallery</div>
            <div className="big-img">
                {
                    <LargeImage src={productReview.media[mediaIndex]} />
                }
            </div>
            <div className="review">{productReview.body}</div>
            <div className="gallery">
                <div>Images in this review</div>
                {productReview.media.map((url, i) => 
                <CustomerImage 
                    src={url} 
                    reviewIndex={reviewIndex}
                    mediaIndex={i}
                    displayImageInModal={displayImageInModal}
                />)}
            </div>
        </StyledImageModal>
        <StyledDim onClick={toggleModal}/>
        </>
    );
};

export default ImageModal;