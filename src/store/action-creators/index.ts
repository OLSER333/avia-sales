import * as transfersActionCreators from './transfers'
import * as ticketsActionCreators from './tickets'
import * as sortingBtnsActionCreators from './sortingBtns'
export default {
  ...transfersActionCreators,
  ...ticketsActionCreators,
  ...sortingBtnsActionCreators,
}
