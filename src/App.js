import React, { useEffect } from 'react';
import './style.scss';
import { Dice } from './components/Dice/'
import Score from './components/Score/'
import { connect } from 'react-redux'

const App = (props) => {
  const size = 375
  useEffect(() => {
    function handleResize () {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      document.querySelectorAll(".container").forEach(element => {
        if (size > (windowWidth / 2) || size > (windowHeight / 2)) {
          const scale = Math.min(
            (windowWidth / 2) / size,
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
      <Dice player={props.state.player} />
      <Dice player={props.state.computer} />
      <Score />
    </div>
  );
}

export default connect(state => ({ state }))(App)