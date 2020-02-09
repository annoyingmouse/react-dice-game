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
    case 'INCREMENT_GAME_COUNTER':
      state.games++
      break
    case 'DISABLED_BUTTON':
      state.disabled = true
      break
    case 'UNDISABLED_BUTTON':
      console.log(state.disabled)
      state.disabled = false
      console.log(state.disabled)
      break
    case 'PLAYER_WIN':
      state.player.score++
      break
    case 'COMPUTER_WIN':
      state.computer.score++
      break
    case 'SET_MESSAGE':
      state.message = action.message.message
      break
    default:
      break
  }
  return state
}

export default game
