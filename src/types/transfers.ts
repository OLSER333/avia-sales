export interface TransferBox {
  id: string
  isChecked: boolean
  label: string
  transfersCount?: number
}

export interface Transfers {
  data: Array<TransferBox>
  activeCount: number
}
export enum TransfersActionTypes {
  TRANSFERS_TOGGLE = 'TRANSFERS_TOGGLE',
  TRANSFERS_TOGGLE_ALL = 'TRANSFERS_TOGGLE_ALL',
}

interface TransfersToggleAction {
  type: TransfersActionTypes.TRANSFERS_TOGGLE
  payload: {
    id: string
    changeTo: boolean
  }
}

interface TransfersToggleAllAction {
  type: TransfersActionTypes.TRANSFERS_TOGGLE_ALL
  payload: {
    changeTo: boolean
  }
}

export type TransfersAction = TransfersToggleAction | TransfersToggleAllAction
