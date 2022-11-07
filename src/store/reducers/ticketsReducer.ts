import {
  Ticket,
  TicketsAction,
  TicketsActionsTypes,
  TicketsState,
  TicketsType,
} from '../../types/tickets'
import { v4 as uuid } from 'uuid'
const initialState: TicketsState = {
  tickets: [],
  isLoading: true,
  showCount: 1000,
  error: {
    hasBadError: false,
    message: '',
  },
}

const setUID = (tickets: TicketsType): TicketsType => {
  return tickets.map((el: Ticket) => {
    el.id = uuid()
    return el
  })
}

export const ticketsReducer = (state = initialState, action: TicketsAction): TicketsState => {
  switch (action.type) {
    case TicketsActionsTypes.TICKETS_SET:
      return {
        ...state,
        tickets:
          state.tickets.length !== 0
            ? [...state.tickets, ...setUID(action.payload.ticketPart)]
            : [...setUID(action.payload.ticketPart)],
      }
    case TicketsActionsTypes.TICKETS_LOADING:
      return { ...state, isLoading: action.payload.loadingTo }
    case TicketsActionsTypes.TICKETS_MORE:
      return { ...state, showCount: state.showCount + 5 }
    case TicketsActionsTypes.TICKETS_RESET_SHOW_COUNT:
      return { ...state, showCount: 5 }
    case TicketsActionsTypes.TICKETS_SET_ERROR:
      return {
        ...state,
        error: { hasBadError: action.payload.errorTo, message: action.payload.message },
      }
    default:
      return { ...state }
  }
}
