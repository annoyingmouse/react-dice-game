import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, render } from 'enzyme';
import { Dice } from './components/Dice/'
import { Score } from './components/Score/'
import App from './App'

test('renders without crashing', () => {
  const wrapper = mount(<App />)
  const button = wrapper.find('button').first()
  const app = wrapper.find(".app").first()
  // expect(wrapper.state().games).to.equal(0);
  // const div = document.createElement('div')
  // ReactDOM.render(<App />, div)
  // ReactDOM.unmountComponentAtNode(div)
});

test('player <Dice />', () => {
  const player = {
    name: 'You',
    score: 0,
    decorator: 'player',
    value: 1
  }
  const wrapper = shallow(<Dice player={player} />)
})

// test('computer <Dice />', () => {
//   const computer = {
//     name: 'Computer',
//     score: 0,
//     decorator: 'computer',
//     value: 1
//   }
//   const wrapper = mount(<Dice player={computer} />)
//   expect(wrapper.state().player.name).to.equal('Computer')

// })

// // test('<Score /> initial state', () => {
// //   let disabled = false
// //   const rollDice = () => {
// //     disabled = true
// //   }
// //   const wrapper = shallow(<Score disabled={disabled} roll={rollDice} />)
// //   const button = wrapper.find('button').first()
// //   expect(button).hasOwnProperty('disabled').not.toBeTruthy();
// // })
