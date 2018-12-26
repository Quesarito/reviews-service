import React from 'react';
import App from '../client/components/App.jsx';

import { shallow, mount, render } from 'enzyme';

describe('<App />', () => {
    test('handles styled components', () => {
        const wrapper = shallow(<App />);
        const target = wrapper.find('Review');
        console.log(target);
        expect(target.length).toBeGreaterThan(0);
    });
});