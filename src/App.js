import React, { Component } from 'react';
import './style.scss';
import { Dice } from './components/Dice/'
import { Score } from './components/Score/'

class App extends Component {
  constructor() {
    super()
    this.state = {
      disabled: false,
      games: 0,
      player: {
        name: 'You',
        score: 0,
        decorator: 'player',
        value: 1
      },
      computer: {
        name: 'Computer',
        score: 0,
        decorator: 'computer',
        value: 1
      }
    }
    this.rollDice = this.rollDice.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.state.disabled) {
      this.enableButton = setTimeout(() => {
        this.setState((state) => {
          const original = { ...state }
          original.disabled = false
          return original
        })
      }, 1000)
    }
  }
  componentWillUnmount () {
    clearTimeout(this.enableButton);
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions () {
    const windowWidth = window.innerWidth / 2
    const windowHeight = window.innerHeight / 2
    document.querySelectorAll(".container").forEach(element => {
      console.log()
      if(400 > windowWidth || 400 > windowHeight){
        const scale = Math.min(
          windowWidth / 400,    
          windowHeight / 400
        );
        element.style.transform = `translate(-50%, -50%) scale(${scale})`
      }
    })
  }
  componentDidMount () {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions);
  }
  rollDice () {
    if (!this.state.disabled) {
      this.setState(state => {
        const original = { ...state }
        original.player.value = Math.floor(Math.random() * 6) + 1
        original.computer.value = Math.floor(Math.random() * 6) + 1
        original.disabled = true;
        if (original.player.value < original.computer.value) {
          original.computer.score = state.computer.score + 1
        }
        if (original.player.value > original.computer.value) {
          original.player.score = state.player.score + 1
        }
        original.games = state.games + 1;
        return original
      });
    }
  }
  render () {
    return (
      <div className="app">
        <Dice player={this.state.player} />
        <Dice player={this.state.computer} />
        <Score disabled={this.state.disabled} roll={this.rollDice} />
      </div>
    );
  }
}

export default App;
