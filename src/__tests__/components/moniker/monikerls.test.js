import React from 'react';
import renderer from 'react-test-renderer';
import MonikerLS from 'components/moniker/monikerLS.js';

describe('<MonikerLS />', () => {
  it('Moniker is alive at application start - div', () => {
    let app = shallow(<MonikerLS />);
    expect(app.find('div').exists()).toBeTruthy();
  });

  it('Moniker is alive at application start - h2', () => {
    let app = shallow(<MonikerLS />);
    expect(app.find('h2').exists()).toBeTruthy();
  });

  it('Moniker is alive at application start - h3', () => {
    let app = shallow(<MonikerLS />);
    expect(app.find('h3').exists()).toBeTruthy();
  });

  it('Moniker is alive at application start - button', () => {
    let app = shallow(<MonikerLS />);
    expect(app.find('button').exists()).toBeTruthy();
  });

  it('Moniker renders correctly', () => {
    const header = renderer.create(<MonikerLS />).toJSON();
    expect(header).toMatchSnapshot();
  });

  // it('renders three <Foo /> components', () => {
  //   const wrapper = shallow(<MonikerLS />);
  //   expect(wrapper.find('.loginButton')).to.have.lengthOf(2);
  // });
});