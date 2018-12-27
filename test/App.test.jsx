import React from 'react';
import mockFetchData from './mockFetchData.js';
import { shallow, mount, render } from 'enzyme';
import App from '../client/components/App.jsx';

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