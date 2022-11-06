import { allSortEnum, SortingBtnsAction, SortingBtnsActionTypes } from '../../types/sortingBtns'

export const sortByPrice = (): SortingBtnsAction => {
  return {
    type: SortingBtnsActionTypes.SORTING_BTNS_BY_PRICE,
    payload: { curSortTypeTo: allSortEnum.price },
  }
}

export const sortBySpeed = (): SortingBtnsAction => {
  return {
    type: SortingBtnsActionTypes.SORTING_BTNS_BY_SPEED,
    payload: { curSortTypeTo: allSortEnum.speed },
  }
}

export const sortByOptimality = (): SortingBtnsAction => {
  return {
    type: SortingBtnsActionTypes.SORTING_BTNS_BY_OPTIMAL,
    payload: { curSortTypeTo: allSortEnum.optimality },
  }
}
