import * as transfersActionCreators from './transfers'
import * as ticketsActionCreators from './tickets'
export default {
  ...transfersActionCreators,
  ...ticketsActionCreators,
}
