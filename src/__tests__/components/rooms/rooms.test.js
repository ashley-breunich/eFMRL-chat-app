import React from 'react';
import renderer from 'react-test-renderer';
import Rooms from 'components/rooms/rooms.js';

describe('<Room />', () => {
  it('Room is alive at application start - h2', () => {
    let app = shallow(<Rooms />);
    expect(app.find('h2').exists()).toBeTruthy();
  });

  it('Room is alive at application start - div', () => {
    let app = shallow(<Rooms />);
    expect(app.find('div').exists()).toBeTruthy();
  });

  it('Room is alive at application start - button', () => {
    let app = shallow(<Rooms />);
    expect(app.find('button').exists()).toBeTruthy();
  });

  it('Header renders correctly', () => {
    const header = renderer.create(<Rooms />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
