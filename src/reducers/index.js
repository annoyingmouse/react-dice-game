const initialState = {
  games: 0,
  disabled: false,
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
  },
  message: "Games: 0 "
}


const game = (state = initialState, action) => {
  switch (action.type) {
    case 'ENABLE_BUTTON':
      const newState = { ...state }
      newState.disabled = false
      return newState
    case 'ROLL_DICE':
      if (!state.disabled) {
        const newState = { ...state }
        newState.disabled = true
        const playerValue = state.player.value
        const computerValue = state.computer.value
        newState.games++
        newState.message = `Games ${newState.games}, `
        newState.player.value = Math.floor(Math.random() * 6) + 1
        newState.computer.value = Math.floor(Math.random() * 6) + 1
        const samePlayer = newState.player.value === playerValue
        const sameComputer = newState.computer.value === computerValue
        if (samePlayer && sameComputer) {
          newState.message += `no change, `
        }
        if (samePlayer && !sameComputer) {
          newState.message += `no change for you, `
        }
        if (!samePlayer && sameComputer) {
          newState.message += `no change for the computer, `
        }
        if (newState.player.value < newState.computer.value) {
          newState.computer.score++
          newState.message += `Computer wins! `
        }
        if (newState.player.value > newState.computer.value) {
          newState.player.score++
          newState.message += `Player wins! `
        }
        if (newState.player.value === newState.computer.value) {
          newState.message += `a draw! `
        }
        return newState
      }
      break
    default:
      break
  }
  return state
}

export default game
