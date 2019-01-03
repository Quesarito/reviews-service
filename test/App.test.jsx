import React from 'react';
import mockFetchData from './mockFetchData.js';
import { shallow, mount, render } from 'enzyme';
import App from '../client/components/App.jsx';
import Review from '../client/components/Review.jsx';
import CustomerImageList from '../client/components/CustomerImageList';
import {buildMediaList} from '../client/helpers';

describe('<App />', () => {
    let spy;
    beforeEach(() => {
        fetch.resetMocks();
        fetch.mockResponseOnce(JSON.stringify(
            mockFetchData
        ));
    });

    afterEach(() => {
        spy.mockClear();
    });

    test('does mount successfully', () => {
        spy = jest.spyOn(App.prototype, 'componentDidMount');
        mount(<App />);
        expect(spy).toHaveBeenCalled();
    });

    test('renders the basic app view', () => {
        const mounted = mount(<App />);
        expect(mounted.find('StyledApp').length).toBe(1);
    });
});

// describe('<CustomerImageList />', () => {
//     let reviewData = mockFetchData.reviewData;
//     let mockToggleModal = () => {
//         return 'called toggleModal';
//     }
//     let mockDisplayImageInModal = () => {
//         return 'called displayImageInModal';
//     }
//     let mediaList = buildMediaList(reviewData);
//     const imgList = shallow(
//         <CustomerImageList 
//             mediaList={mediaList}
//             toggleModal={mockToggleModal}
//             displayImageInModal={mockDisplayImageInModal}/>);
    
//     // test('renders basic container', () => {  
//     //     // console.log('USING PROP', imgList.prop('mediaList')); needs more than shallow rendering
//     //     // console.log('children', imgList.children().find('h3').length);
//     //     // console.log('getting', imgList.children().get(1));
//     //     expect(imgList.find('StyledGallery').length).toBe(1);
//     // });

//     test('renders available customer images (up to 4)', () => {
//         // console.log('children', imgList.childAt(1).children().get(0));
//         expect(imgList.find('StyledGallery').find('Styled(CustomerThumbnail)').length).toBe(3);
//     });
    
//     test('renders customer images in order', () => {
//         let urls = [
//             'wu-yi-152057-unsplash.jpg', 
//             'kevin-hou-40208-unsplash.jpg',
//             'priscilla-du-preez-228220-unsplash (1).jpg'
//         ];
//         // console.log('childrennnnnn%N%%%%%%%', imgList.childAt(1).find('Styled(CustomerThumbnail)').length);
//         // console.log(thumbnails);
//         let thumbnails = imgList.find('StyledGallery').find('Styled(CustomerThumbnail)');
//         for (let i = 0; i < 3; i++) {
//             // console.log(`child at ${i}`, thumbnails.get(i).props.mediaNode.url);
//             expect(thumbnails.get(i).props.mediaNode.url).toBe(urls[i]);
//         }
//     });
// });