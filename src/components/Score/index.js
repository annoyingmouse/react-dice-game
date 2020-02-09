import React from 'react';
import './style.scss'
import { connect } from 'react-redux'

const Score = props => {
  return (
    <section className="score">
      <div className="container">
        <h1>Let's go!</h1>
        <button
          onClick={props.roll}
          disabled={props.disabled}
          id="roll">
          Roll Dice!
        </button>
        <h3>{props.state.message}</h3>
      </div>
    </section>
  )
}

export default connect(state => ({
  state
}))(Score)