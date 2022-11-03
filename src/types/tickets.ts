export interface Ticket {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
  ]
}
export type TicketsType = Array<Ticket>
export interface TicketPoolingData {
  stop: boolean
  tickets: Array<Ticket>
}
export interface TicketsState {
  tickets: TicketsType
  isLoading: boolean
  showCount: number
}

export enum TicketsActionsTypes {
  TICKETS_SET = 'TICKETS_SET',
  TICKETS_LOADING = 'TICKETS_LOADING',
  TICKETS_MORE = 'TICKETS_MORE',
  TICKETS_RESET_SHOW_COUNT = 'TICKETS_RESET_SHOW_COUNT',
}

export interface setTicketsAction {
  type: TicketsActionsTypes.TICKETS_SET
  payload: {
    ticketPart: TicketsType
  }
}

export interface setLoadingAction {
  type: TicketsActionsTypes.TICKETS_LOADING
  payload: {
    loadingTo: boolean
  }
}

export interface showMoreTicketsAction {
  type: TicketsActionsTypes.TICKETS_MORE
}

export interface resetShowCountAction {
  type: TicketsActionsTypes.TICKETS_RESET_SHOW_COUNT
}

export type TicketsAction =
  | setTicketsAction
  | setLoadingAction
  | showMoreTicketsAction
  | resetShowCountAction
