import React from 'react';
import renderer from 'react-test-renderer';
import Moniker from 'components/moniker/moniker.js';

describe('<Header />', () => {
  it('is alive at application start', () => {
    let app = shallow(<Moniker />);
    expect(app.find('form').exists()).toBeTruthy();
  });

  it('is alive at application start', () => {
    let app = shallow(<Moniker />);
    expect(app.find('input').exists()).toBeTruthy();
  });

  it('is alive at application start', () => {
    let app = shallow(<Moniker />);
    expect(app.find('p').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const header = renderer.create(<Moniker />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
