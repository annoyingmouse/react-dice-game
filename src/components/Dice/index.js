import React from 'react';
import './style.scss';

export const Dice = props => {
  return (
    <section className={props.player.decorator}>
      <div className="container">
        <h2>{props.player.name}</h2>
        <div className="view">
          <div className="dice" data-value={props.player.value}>
            <div className="side front">
              <div className="dot center"></div>
            </div>
            <div className="side front inner"></div>
            <div className="side right">
              <div className="dot dtop dleft"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side top inner"></div>
            <div className="side back">
              <div className="dot dtop dleft"></div>
              <div className="dot dtop dright"></div>
              <div className="dot dbottom dleft"></div>
              <div className="dot dbottom dright"></div>
              <div className="dot center dleft"></div>
              <div className="dot center dright"></div>
            </div>
            <div className="side back inner"></div>
            <div className="side left">
              <div className="dot dtop dleft"></div>
              <div className="dot dtop dright"></div>
              <div className="dot dbottom dleft"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side left inner"></div>
            <div className="side top">
              <div className="dot dtop dleft"></div>
              <div className="dot center"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side top inner"></div>
            <div className="side bottom">
              <div className="dot center"></div>
              <div className="dot dtop dleft"></div>
              <div className="dot dtop dright"></div>
              <div className="dot dbottom dleft"></div>
              <div className="dot dbottom dright"></div>
            </div>
            <div className="side bottom inner"></div>
          </div>
        </div>
        <h3>Wins {props.player.score}</h3>
      </div>
    </section>
  )
}
