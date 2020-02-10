import React from 'react'
import { shallow, mount, render } from 'enzyme';
import App from './App'
import { Dice } from './components/Dice/'


describe('React component test with Enzyme', () => {
  // TODO fix tests now we've moved over from state to Redux
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('should render correctly', () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
  it('click event on button', () => {
    const component = mount(<App />);
    component.find('#roll').simulate('click');
    expect(component).toMatchSnapshot();
    component.unmount();
  });
  it('Check state of disabled after mounting', () => {
    const component = mount(<App />);
    expect(component.instance().state.disabled).toBe(false);
    component.unmount();
  });
  it('Check state of disabled after clicking the button', () => {
    const component = mount(<App />);
    component.find('#roll').simulate('click');
    expect(component.instance().state.disabled).toBe(true);
    component.unmount();
  });
  it('Check state of disabled after clicking the button', () => {
    const component = mount(<App />);
    expect(component.instance().state.games).toBe(0);
    component.unmount();
  });
  it('Check state of disabled after clicking the button', () => {
    const component = mount(<App />);
    component.find('#roll').simulate('click');
    expect(component.instance().state.games).toBe(1);
    component.unmount();
  });
});

// describe('Check Dice', () => {
//   it('check there are two dice', () => {
//     const component = mount(<App />);
//     expect(component.find('.dice').length).toBe(2);
//   });
//   it('check there is one', () => {
//     const computer = {
//       name: 'Computer',
//       score: 0,
//       decorator: 'computer',
//       value: 1
//     }
//     const component = shallow(<Dice player={computer} />);
//     console.log("component", component);
//     expect(component.find('.dice[data-value=1]').first()).toBe(1);
//   });
// });