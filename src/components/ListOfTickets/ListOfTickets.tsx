import React, { useEffect } from 'react'
import cl from './ListOfTickets.module.scss'
import TicketItem from '../TicketItem/TicketItem'
import Button from '../../UI/Button/Button'
import { v4 as uuid } from 'uuid'
import { TicketsState } from '../../types/tickets'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Spin from '../Spin/Spin'
import { useAction } from '../../hooks/useAction'
import NoData from '../../UI/NoData/NoData'
import UseListOfTickets from './useListOfTickets'

const ListOfTickets = () => {
  const { getTickets, showMoreTickets } = useAction()

  // const [partTickets, setPartTickets] = useState<TicketsType>()

  const { tickets, isLoading, showCount }: TicketsState = useTypedSelector(
    (state) => state.ticketsReducer,
  )
  const { data } = useTypedSelector((state) => state.transfersReducer)
  const { curSortType } = useTypedSelector((state) => state.sortingBtnsReducer)

  useEffect(() => {
    getTickets()
  }, [])

  useEffect(() => {
    // setPartTickets(tickets.slice(0, showCount))
  }, [tickets, showCount])

  // ==================================================================

  const ticketsForRender = UseListOfTickets(tickets, curSortType, data, showCount)
  return (
    <>
      {isLoading && <Spin isLoading={isLoading} />}
      <div className={cl.list}>
        {ticketsForRender.length > 0 &&
          ticketsForRender.map((el) => (
            <TicketItem key={uuid()} price={el.price} carrier={el.carrier} segments={el.segments} />
          ))}
        {!isLoading && ticketsForRender.length === 0 && <NoData />}
        {ticketsForRender.length > 0 && (
          <Button active={true} onShowMore={showMoreTickets} addClass={'both'}>
            Показать еще 5 билетов!
          </Button>
        )}
      </div>
    </>
  )
}

export default ListOfTickets
