import React from 'react';
import renderer from 'react-test-renderer';
import MonikerLS from 'components/moniker/monikerLS.js';

describe('<Header />', () => {
  it('is alive at application start', () => {
    let app = shallow(<MonikerLS />);
    expect(app.find('div').exists()).toBeTruthy();
  });

  it('is alive at application start', () => {
    let app = shallow(<MonikerLS />);
    expect(app.find('h2').exists()).toBeTruthy();
  });

  it('renders correctly', () => {
    const header = renderer.create(<MonikerLS />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
