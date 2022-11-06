import {
  allSortEnum,
  SortingBtns,
  SortingBtnsAction,
  SortingBtnsActionTypes,
} from '../../types/sortingBtns'

const initialState: SortingBtns = {
  curSortType: allSortEnum.notSelected,
  labels: [allSortEnum.price, allSortEnum.speed, allSortEnum.optimality],
}

export const sortingBtnsReducer = (
  state = initialState,
  action: SortingBtnsAction,
): SortingBtns => {
  console.log('iState', initialState, action)
  switch (action.type) {
    case SortingBtnsActionTypes.SORTING_BTNS_BY_PRICE:
      return { ...state, curSortType: action.payload.curSortTypeTo }
    case SortingBtnsActionTypes.SORTING_BTNS_BY_SPEED:
      return { ...state, curSortType: action.payload.curSortTypeTo }
    case SortingBtnsActionTypes.SORTING_BTNS_BY_OPTIMAL:
      return { ...state, curSortType: action.payload.curSortTypeTo }
    default:
      return { ...state }
  }
}
