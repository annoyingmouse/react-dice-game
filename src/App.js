import React, { useEffect } from 'react';
import './style.scss';
import { Dice } from './components/Dice/'
import Score from './components/Score/'
import { connect } from 'react-redux'

const App = (props) => {
  const size = 500
  const player = props.state.player
  const computer = props.state.computer
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
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  })
  return (
    <div className="app">
      <Dice player={player} />
      <Dice player={computer} />
      <Score />
    </div>
  );
}

export default connect(state => ({ state }))(App)