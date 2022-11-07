import React, { useEffect } from 'react'
import cl from './ListOfTickets.module.scss'
import TicketItem from '../TicketItem/TicketItem'
import Button from '../UI/Button/Button'
import { TicketsState } from '../../types/tickets'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Spin from '../Spin/Spin'
import { useAction } from '../../hooks/useAction'
import NoMatchData from '../UI/NoData/NoMatchData'
import UseListOfTickets from './useListOfTickets'

const ListOfTickets = () => {
  const { getTickets, showMoreTickets } = useAction()

  // const [partTickets, setPartTickets] = useState<TicketsType>()

  const { tickets, isLoading, showCount }: TicketsState = useTypedSelector(
    (state) => state.ticketsReducer,
  )
  const { data } = useTypedSelector((state) => state.transfersReducer)
  const { curSortType } = useTypedSelector((state) => state.sortingBtnsReducer)
  const { error } = useTypedSelector((state) => state.ticketsReducer)

  useEffect(() => {
    getTickets()
  }, [])

  // sort logic here
  const ticketsForRender = UseListOfTickets(tickets, curSortType, data, showCount)

  const hasData = ticketsForRender.length > 0 && !error.hasBadError
  return (
    <>
      {isLoading && <Spin isLoading={isLoading} />}

      <div className={cl.list}>
        {' '}
        {hasData &&
          ticketsForRender.map((el) => (
            <TicketItem key={el.id} price={el.price} carrier={el.carrier} segments={el.segments} />
          ))}
        {!isLoading && ticketsForRender.length === 0 && !error.hasBadError && <NoMatchData />}
        {hasData && (
          <Button active={true} onShowMore={showMoreTickets} addClass={'both'}>
            Показать еще 5 билетов!
          </Button>
        )}
        {error.hasBadError && (
          <div className={cl.noData}>Что-то пошло не так.. Мы скоро все исправим</div>
        )}
      </div>
    </>
  )
}

export default ListOfTickets
