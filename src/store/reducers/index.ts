import { combineReducers } from 'redux'
import { transfersReducer } from './transfersReducer'
import { ticketsReducer } from './ticketsReducer'

export const rootReducer = combineReducers({
  transfersReducer,
  ticketsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
