export const incrementCount = () => ({
  type: 'INCREMENT_GAME_COUNTER'
})

export const disableButton = () => ({
  type: 'DISABLED_BUTTON'
})

export const undisableButton = () => ({
  type: 'UNDISABLED_BUTTON'
})

export const playerWin = () => ({
  type: 'PLAYER_WIN'
})

export const computerWin = () => ({
  type: 'COMPUTER_WIN'
})

export const setMessage = (message) => ({
  type: 'SET_MESSAGE',
  message
})
