import React from 'react';
import renderer from 'react-test-renderer';
import Chat from 'components/chat/chat.js';

describe('<Chat />', () => {
  it('Chat is alive at application start - form', () => {
    let app = shallow(<Chat />);
    expect(app.find('div').exists()).toBeTruthy();
  });

  it('Chat is alive at application start - button', () => {
    let app = shallow(<Chat />);
    expect(app.find('button').exists()).toBeTruthy();
  });

  it('Chat is alive at application start - h2', () => {
    let app = shallow(<Chat />);
    expect(app.find('h2').exists()).toBeTruthy();
  });

  it('Chat is alive at application start - form', () => {
    let app = shallow(<Chat />);
    expect(app.find('form').exists()).toBeTruthy();
  });

  it('Chat is alive at application start - input', () => {
    let app = shallow(<Chat />);
    expect(app.find('input').exists()).toBeTruthy();
  });

  it('Chat is alive at application start - ul', () => {
    let app = shallow(<Chat />);
    expect(app.find('ul').exists()).toBeTruthy();
  });

  it('Moniker renders correctly', () => {
    const header = renderer.create(<Chat />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
