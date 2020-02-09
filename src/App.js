import React, { useState, useEffect } from 'react';
import './style.scss';
import { Dice } from './components/Dice/'
import { Score } from './components/Score/'
import { connect } from 'react-redux'
import { incrementCount, undisableButton } from './actions'

const App = (store) => {
  const [disabled, setDisabled] = useState(false)
  //const [games, setGames] = useState(0)
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
  const rollDice = (e) => {
    if (!disabled) {
      console.log(store)
      store.dispatch(incrementCount())
      let newMessage = `Games ${store.state.games}, `
      const p = { ...player }
      p.value = Math.floor(Math.random() * 6) + 1
      const c = { ...computer }
      c.value = Math.floor(Math.random() * 6) + 1
      const samePlayer = player.value === p.value
      const sameComputer = computer.value === c.value
      if (samePlayer && sameComputer) {
        newMessage += `no change, `
      }
      if (samePlayer && !sameComputer) {
        newMessage += `no change for you, `
      }
      if (!samePlayer && sameComputer) {
        newMessage += `no change for the computer, `
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
      store.dispatch(undisableButton())
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

export default connect(state => ({ state }))(App)