import { Dispatch } from 'redux'
import {
  IsearchId,
  TicketPoolingData,
  TicketsAction,
  TicketsActionsTypes,
} from '../../types/tickets'
import axios from 'axios'
import { getErrorMesForUser } from '../../utils/getErrorMesForUser'

const doRequest = async (query = '', params = '') => {
  const apiBase = 'https://front-test.dev.aviasales.ru'
  const res = await axios.get(`${apiBase}${query}${params}`)
  if (res && res.status === 200) {
    return res.data
  }
}

export const getTickets = () => {
  return async (dispatch: Dispatch<TicketsAction>) => {
    dispatch({ type: TicketsActionsTypes.TICKETS_LOADING, payload: { loadingTo: true } })
    let searchObj: IsearchId | null = null
    try {
      searchObj = await doRequest('/search')
    } catch (e: any) {
      dispatch({ type: TicketsActionsTypes.TICKETS_LOADING, payload: { loadingTo: false } })
      dispatch({
        type: TicketsActionsTypes.TICKETS_SET_ERROR,
        payload: { errorTo: true, message: getErrorMesForUser(e.message) },
      })
    }

    let errorsCount = 0

    while (searchObj) {
      // infinity loop
      try {
        const res: TicketPoolingData = await doRequest(
          '/tickets',
          `?searchId=${searchObj.searchId}`,
        )
        dispatch({
          type: TicketsActionsTypes.TICKETS_SET,
          payload: {
            ticketPart: res.tickets,
          },
        })

        if (res.stop) {
          dispatch({ type: TicketsActionsTypes.TICKETS_LOADING, payload: { loadingTo: false } })
          break
        }
      } catch (e: any) {
        errorsCount++ // обработка случайных ошибок 500 (вдруг оффлайн)
        if (errorsCount > 10) {
          dispatch({ type: TicketsActionsTypes.TICKETS_LOADING, payload: { loadingTo: false } })
          dispatch({
            type: TicketsActionsTypes.TICKETS_SET_ERROR,
            payload: { errorTo: true, message: getErrorMesForUser(e.message) },
          })
          break
        }
      }
    }
  }
}

export const showMoreTickets = (): TicketsAction => {
  return {
    type: TicketsActionsTypes.TICKETS_MORE,
  }
}

export const resetShowCount = (): TicketsAction => {
  return {
    type: TicketsActionsTypes.TICKETS_RESET_SHOW_COUNT,
  }
}

export const setError = (errorTo: boolean, errMessage: string): TicketsAction => {
  return {
    type: TicketsActionsTypes.TICKETS_SET_ERROR,
    payload: { errorTo: errorTo, message: getErrorMesForUser(errMessage) },
  }
}
