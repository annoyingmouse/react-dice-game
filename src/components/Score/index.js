import React from 'react';
import './style.scss'
import { connect } from 'react-redux'
import { rollDice, enableButton } from '../../actions'

const Score = props => {
  const roll = () => {
    props.dispatch(rollDice())
    setTimeout(() => {
      props.dispatch(enableButton())
    }, 1000);
  }
  return (
    <section className="score">
      <div className="container">
        <h1>Let's go!</h1>
        <button
          onClick={roll}
          disabled={props.state.disabled}
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