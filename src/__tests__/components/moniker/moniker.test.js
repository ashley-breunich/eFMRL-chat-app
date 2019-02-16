import React from 'react';
import renderer from 'react-test-renderer';
import Moniker from 'components/moniker/moniker.js';

describe('<Moniker />', () => {
  it('Moniker is alive at application start - form', () => {
    let app = shallow(<Moniker />);
    expect(app.find('form').exists()).toBeTruthy();
  });

  it('Moniker is alive at application start - input', () => {
    let app = shallow(<Moniker />);
    expect(app.find('input').exists()).toBeTruthy();
  });

  it('Moniker is alive at application start - p', () => {
    let app = shallow(<Moniker />);
    expect(app.find('p').exists()).toBeTruthy();
  });

  it('Moniker renders correctly', () => {
    const header = renderer.create(<Moniker />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
