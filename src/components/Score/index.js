import React from 'react'
import './style.scss'

export const Score = props => {
  return (
    <div className="score">
      <h1>Let's go!</h1>
      <button onClick={props.roll} disabled={props.disabled} id="roll">Roll Dice!</button>
    </div>
  )
}