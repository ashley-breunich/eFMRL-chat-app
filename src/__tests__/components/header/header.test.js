import React from 'react';
import renderer from 'react-test-renderer';
import Header from 'components/header/header.js';

describe('<Header />', () => {
  it('is alive at application start', () => {
    let app = shallow(<Header />);
    expect(app.find('header').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const header = renderer.create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
