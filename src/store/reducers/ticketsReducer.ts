import { TicketsAction, TicketsActionsTypes, TicketsState } from '../../types/tickets'

const initialState: TicketsState = {
  tickets: [],
  isLoading: true,
  showCount: 5,
}

export const ticketsReducer = (state = initialState, action: TicketsAction): TicketsState => {
  switch (action.type) {
    case TicketsActionsTypes.TICKETS_SET:
      return { ...state, tickets: [...state.tickets, ...action.payload.ticketPart] }
    case TicketsActionsTypes.TICKETS_LOADING:
      return { ...state, isLoading: action.payload.loadingTo }
    case TicketsActionsTypes.TICKETS_MORE:
      return { ...state, showCount: state.showCount + 5 }
    case TicketsActionsTypes.TICKETS_RESET_SHOW_COUNT:
      return { ...state, showCount: 5 }
    default:
      return { ...state }
  }
}
