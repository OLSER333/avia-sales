// Если включается галочка "Все" - проставляются галочки всем остальным фильтрам
// Если снимается галочка "Все" - снимаются все остальные фильтры
// Если при включенной галочке "Все" снимается любая другая галочка - галочка "Все" тоже снимается
// Если проставить каждую галочку по пересадкам - галочка "Все" автоматически включится
import { v4 as uuid } from 'uuid'

import { Transfers, TransfersAction, TransfersActionTypes } from '../../types/transfers'

const initialState: Transfers = {
  data: [
    {
      id: uuid(),
      isChecked: true,
      label: 'Всё',
    },
    {
      id: uuid(),
      isChecked: true,
      label: 'Без пересадок',
      transfersCount: 0,
    },
    {
      id: uuid(),
      isChecked: true,
      label: '1 пересадка',
      transfersCount: 1,
    },
    {
      id: uuid(),
      isChecked: true,
      label: '2 пересадки',
      transfersCount: 2,
    },
    {
      id: uuid(),
      isChecked: true,
      label: '3 пересадки',
      transfersCount: 3,
    },
  ],
  activeCount: 0,
}
export const transfersReducer = (state = initialState, action: TransfersAction): Transfers => {
  console.log('acitve', state.activeCount)
  switch (action.type) {
    case TransfersActionTypes.TRANSFERS_TOGGLE:
      // eslint-disable-next-line no-case-declarations
      const { data, activeCount } = state
      // eslint-disable-next-line no-case-declarations
      const { id, changeTo } = action.payload

      return {
        ...state,
        data: [
          ...data.map((el) => {
            if (el.id === data[0].id) {
              // Всё
              if (activeCount === data.length - 2 && changeTo) {
                // тыкаем 4-ую галку
                return { ...el, isChecked: true } // всё -> true
              } else if (activeCount === data.length && !changeTo) {
                // убираем галку на "всё", если все активные и отменяем одну.
                return { ...el, isChecked: false }
              }
            }
            if (el.id !== id) return el // нетронутые - возвращаем
            else {
              return { ...el, isChecked: changeTo } // либо меняем
            }
          }),
        ],
        activeCount:
          activeCount +
          (changeTo ? 1 : -1) +
          (activeCount === data.length - 2 && changeTo ? 1 : 0) +
          (activeCount === data.length && !changeTo ? -1 : 0),
      }
    case TransfersActionTypes.TRANSFERS_TOGGLE_ALL:
      return {
        ...state,
        data: [
          ...state.data.map((el) => {
            return { ...el, isChecked: action.payload.changeTo }
          }),
        ],
        activeCount: action.payload.changeTo ? state.data.length : 0,
      }
    default:
      return { ...state }
  }
}
