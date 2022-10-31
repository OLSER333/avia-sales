import { combineReducers } from 'redux'
import { transfersReducer } from './transfersReducer'

export const rootReducer = combineReducers({
  transfersReducer,
})

export type RootState = ReturnType<typeof rootReducer>
