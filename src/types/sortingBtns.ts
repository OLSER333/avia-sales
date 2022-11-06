export enum allSortEnum {
  notSelected = '',
  price = 'Самый дешевый',
  speed = 'Самый быстрый',
  optimality = 'Оптимальный',
}

export type allSortTypes =
  | allSortEnum.price
  | allSortEnum.speed
  | allSortEnum.optimality
  | allSortEnum.notSelected

export interface SortingBtns {
  curSortType: allSortTypes
  labels: Array<allSortEnum.price | allSortEnum.speed | allSortEnum.optimality>
}

export enum SortingBtnsActionTypes {
  SORTING_BTNS_BY_PRICE = 'SORTING_BTNS_BY_PRICE',
  SORTING_BTNS_BY_SPEED = 'SORTING_BTNS_BY_SPEED',
  SORTING_BTNS_BY_OPTIMAL = 'SORTING_BTNS_BY_OPTIMAL',
}

interface SortingBtnsPriceAction {
  type: SortingBtnsActionTypes.SORTING_BTNS_BY_PRICE
  payload: {
    curSortTypeTo: allSortTypes
  }
}
interface SortingBtnsSpeedAction {
  type: SortingBtnsActionTypes.SORTING_BTNS_BY_SPEED
  payload: {
    curSortTypeTo: allSortTypes
  }
}
interface SortingBtnsOptimalAction {
  type: SortingBtnsActionTypes.SORTING_BTNS_BY_OPTIMAL
  payload: {
    curSortTypeTo: allSortTypes
  }
}

export type SortingBtnsAction =
  | SortingBtnsOptimalAction
  | SortingBtnsSpeedAction
  | SortingBtnsPriceAction
