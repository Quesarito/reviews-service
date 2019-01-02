import React from 'react';
import styled from 'styled-components';
import {GlobalStyles} from './StyledComponents.jsx';
import StarRatings from './StarRatings.jsx';
import CustomerImageList from './CustomerImageList.jsx';
import ImageModal from './ImageModal.jsx';
import Keywords from './Keywords.jsx';
import ReviewList from './ReviewList.jsx';
import {buildMediaList, reorderReviews} from '../helpers';

const StyledApp = styled.div`
  display: flex;
  overflow: ${props => (props.scrollable) ? 'scroll' : 'hidden'};
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      reviewData: [],
      displayedReviews: [],
      starData: {},
      featureData: {},
      mediaList: null,
      keywords: [],
      productId: 99,
      modal: {
        display: false,
        mediaIndex: -1,
        reviewIndex: -1
      }
    };
  } 

  componentDidMount() {
    this.fetchReviews(this.state.productId);
  }

  fetchReviews(productId) {
    fetch(`/reviews/${productId}`, {
      method: 'GET'
    })
      .then(res => {
        return res.json();
      })
      .then(reviews => {
        this.processReviews(reviews);
      })
      .catch(err => {
        console.log('ERROR FETCHING REVIEWS****************', err);
      });
  }

  processReviews({reviewData, starData, featureData, keywords}) {
    let mediaList = buildMediaList(reviewData);
    this.setState({
      reviewData,
      starData,
      featureData,
      mediaList,
      keywords,
      displayedReviews: reviewData
    }, err => {
      if (err) {
        console.log('Error in setState');
        throw err;
      }
    });
  }

  displayImageInModal(e) {
    e.preventDefault();
    let data = e.currentTarget.dataset;
    document.documentElement.style.overflow = 'hidden';
    this.setState({
        modal: {
          display: true,
          mediaIndex: parseInt(data.mediaIndex),
          reviewIndex: parseInt(data.reviewIndex)
        }
    }, err => {
      if (err) throw err;
    });
  }

  toggleModal() {
    return (e) => {
      e.preventDefault();
      this.setState({
        modal: {
          display: !this.state.modal.display,
          mediaIndex: -1,
          reviewIndex: -1
        }
      }, err => {
        if (err) throw err;
        document.documentElement.style.overflow = (this.state.modal.display) ? 'hidden' : 'scroll';
      });
    }
  }

  changeDisplayedReviews(e) {
    e.preventDefault();
    let newDisplay = reorderReviews(this.state.reviewData, e.target.value);
    console.log('CHANGING DISPLAYED REVIEWS', newDisplay);
    this.setState({
      displayedReviews: newDisplay
    });
  }

  render() {
    return (
      <StyledApp scrollable={!this.state.modal.display}>
        <GlobalStyles />
        {
          (!this.state.modal.display) ? '' :
            <ImageModal 
              mediaIndex={this.state.modal.mediaIndex}
              productReview={this.state.reviewData[this.state.modal.reviewIndex]}
              mediaList={this.state.mediaList}
              toggleModal={this.toggleModal()}
              displayImageInModal={this.displayImageInModal.bind(this)}/>
        }
        {
          (!this.state.starData.hasOwnProperty('total')) ? '' : 
            <StarRatings 
              starData={this.state.starData} 
              featureData={this.state.featureData}/>
        }
        <div className="review-wrapper">
          {
            (!this.state.reviewData.length > 0) ? '' : 
            <>
              <CustomerImageList 
                mediaList={this.state.mediaList}
                toggleModal={this.toggleModal()}
                displayImageInModal={this.displayImageInModal.bind(this)}/>
              <Keywords keywords={this.state.keywords}/>
              <ReviewList reviews={this.state.displayedReviews} 
                displayImageInModal={this.displayImageInModal.bind(this)}
                changeDisplayedReviews={this.changeDisplayedReviews.bind(this)}/>
            </>
          }
        </div>
      </StyledApp>
    );
  }  
}

StyledApp.displayName = 'StyledApp';
export default App;