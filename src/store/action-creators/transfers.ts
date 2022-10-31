import { TransfersAction, TransfersActionTypes } from '../../types/transfers'

export const toggleTransfers = (changeId: string, changeTo: boolean): TransfersAction => {
  return {
    type: TransfersActionTypes.TRANSFERS_TOGGLE,
    payload: {
      id: changeId,
      changeTo: changeTo,
    },
  }
}

export const toggleAllTransfers = (changeTo: boolean): TransfersAction => {
  return {
    type: TransfersActionTypes.TRANSFERS_TOGGLE_ALL,
    payload: {
      changeTo: changeTo,
    },
  }
}
