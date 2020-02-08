// import React, { Component } from 'react';
// import './style.scss';
// import { Dice } from './components/Dice/'
// import { Score } from './components/Score/'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       disabled: false,
//       games: 0,
//       player: {
//         name: 'You',
//         score: 0,
//         decorator: 'player',
//         value: 1
//       },
//       computer: {
//         name: 'Computer',
//         score: 0,
//         decorator: 'computer',
//         value: 1
//       },
//       dice: 375
//     }
//     this.rollDice = this.rollDice.bind(this)
//     this.updateDimensions = this.updateDimensions.bind(this);
//   }
//   componentDidUpdate (prevProps, prevState) {
//     if (this.state.disabled) {
//       this.enableButton = setTimeout(() => {
//         this.setState((state) => {
//           const original = { ...state }
//           original.disabled = false
//           return original
//         })
//       }, 1000)
//     }
//   }
//   componentWillUnmount () {
//     clearTimeout(this.enableButton);
//     window.removeEventListener("resize", this.updateDimensions);
//   }
//   updateDimensions () {
//     const windowWidth = window.innerWidth
//     const windowHeight = window.innerHeight
//     document.querySelectorAll(".container").forEach(element => {
//       if (this.state.dice > (windowWidth / 2) || this.state.dice > (windowHeight / 2)) {
//         const scale = Math.min(
//           (windowHeight / 2) / this.state.dice,
//           (windowHeight / 2) / this.state.dice
//         );
//         element.style.transform = `translate(-50%, -50%) scale(${scale})`
//       }
//     })
//   }
//   componentDidMount () {
//     this.updateDimensions()
//     window.addEventListener("resize", this.updateDimensions);
//   }
//   rollDice () {
//     if (!this.state.disabled) {
//       this.setState(state => {
//         const original = { ...state }
//         original.player.value = Math.floor(Math.random() * 6) + 1
//         original.computer.value = Math.floor(Math.random() * 6) + 1
//         original.disabled = true;
//         if (original.player.value < original.computer.value) {
//           original.computer.score = state.computer.score + 1
//         }
//         if (original.player.value > original.computer.value) {
//           original.player.score = state.player.score + 1
//         }
//         original.games = state.games + 1;
//         return original
//       });
//     }
//   }
//   render () {
//     return (
//       <div className="app">
//         <Dice player={this.state.player} />
//         <Dice player={this.state.computer} />
//         <Score disabled={this.state.disabled} roll={this.rollDice} />
//       </div>
//     );
//   }
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './style.scss';
import { Dice } from './components/Dice/'
import { Score } from './components/Score/'

export const App = () => {
  const [disabled, setDisabled] = useState(false)
  const [games, setGames] = useState(0)
  const [player, setPlayer] = useState({
    name: 'You',
    score: 0,
    decorator: 'player',
    value: 1
  })
  const [computer, setComputer] = useState({
    name: 'Computer',
    score: 0,
    decorator: 'computer',
    value: 1
  })
  const size = 375
  const [message, setMessage] = useState(`Games: 0`)
  const rollDice = () => {
    if (!disabled) {
      const game = games + 1
      let newMessage = `Games ${game}. `
      const p = { ...player }
      p.value = Math.floor(Math.random() * 6) + 1
      const c = { ...computer }
      c.value = Math.floor(Math.random() * 6) + 1
      const samePlayer = player.value === p.value
      const sameComputer = computer.value === c.value
      if (samePlayer && sameComputer) {
        newMessage += `No change, `
      }
      if (samePlayer && !sameComputer) {
        newMessage += `No change for you, `
      }
      if (!samePlayer && sameComputer) {
        newMessage += `No change for the computer, `
      }
      if (p.value < c.value) {
        c.score = c.score + 1
        newMessage += `Computer wins! `
      }
      if (p.value > c.value) {
        p.score = p.score + 1
        newMessage += `Player wins! `
      }
      if (p.value === c.value) {
        newMessage += `a draw! `
      }
      setGames(game)
      setMessage(newMessage)
      setPlayer(p)
      setComputer(c)
      setDisabled(true)
    }
  }
  useEffect(() => {
    function handleResize () {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      document.querySelectorAll(".container").forEach(element => {
        if (size > (windowWidth / 2) || size > (windowHeight / 2)) {
          const scale = Math.min(
            (windowHeight / 2) / size,
            (windowHeight / 2) / size
          );
          element.style.transform = `translate(-50%, -50%) scale(${scale})`
        }
      })
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    const enableButton = setTimeout(() => {
      setDisabled(false)
    }, 1000);
    return () => {
      clearTimeout(enableButton);
      window.removeEventListener("resize", handleResize);
    }
  })
  return (
    <div className="app">
      <Dice player={player} />
      <Dice player={computer} />
      <Score
        disabled={disabled}
        roll={rollDice}
        message={message} />
    </div>
  );
}