import { Dispatch } from 'redux'
import { TicketPoolingData, TicketsAction, TicketsActionsTypes } from '../../types/tickets'
import axios from 'axios'
//
const doRequest = async (query = '', params = '') => {
  console.log('query, params', query, params)
  const apiBase = 'https://front-test.dev.aviasales.ru'
  const res = await axios.get(`${apiBase}${query}${params}`)
  if (res && res.status === 200) {
    return res.data
  }
}

export const getTickets = () => {
  return async (dispatch: Dispatch<TicketsAction>) => {
    const { searchId } = await doRequest('/search')
    console.log('search', searchId)

    dispatch({ type: TicketsActionsTypes.TICKETS_LOADING, payload: { loadingTo: true } })
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        const res: TicketPoolingData = await doRequest('/tickets', `?searchId=${searchId}`)
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
      } catch (e) {
        console.log(e)
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
