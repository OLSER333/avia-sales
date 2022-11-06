import { combineReducers } from 'redux'
import { transfersReducer } from './transfersReducer'
import { ticketsReducer } from './ticketsReducer'
import { sortingBtnsReducer } from './sortingBtnsReducer'

export const rootReducer = combineReducers({
  transfersReducer,
  ticketsReducer,
  sortingBtnsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
