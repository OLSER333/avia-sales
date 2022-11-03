import React, { useEffect } from 'react'
import cl from './ListOfTickets.module.scss'
import TicketItem from '../TicketItem/TicketItem'
import Button from '../../UI/Button/Button'
import { v4 as uuid } from 'uuid'
import { TicketsState, TicketsType } from '../../types/tickets'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Spin from '../Spin/Spin'
import { useAction } from '../../hooks/useAction'
const ListOfTickets = () => {
  const { getTickets, showMoreTickets } = useAction()

  // const [partTickets, setPartTickets] = useState<TicketsType>()

  const { tickets, isLoading, showCount }: TicketsState = useTypedSelector(
    (state) => state.ticketsReducer,
  )
  const { data } = useTypedSelector((state) => state.transfersReducer)

  useEffect(() => {
    getTickets()
  }, [])

  useEffect(() => {
    // setPartTickets(tickets.slice(0, showCount))
  }, [tickets, showCount])

  const getPartOfSortedTickets = (tickets: TicketsType): TicketsType => {
    const checkedFilters = data
      .slice(1)
      .filter((el) => el.isChecked)
      .map((el) => el.transfersCount)
    return tickets
      .filter((el) => {
        const from = el.segments[0].stops.length
        const to = el.segments[1].stops.length

        if (checkedFilters.includes(from) && checkedFilters.includes(to)) {
          return el
        }
      })
      .slice(0, showCount)
    // return
  }
  //
  // data: [
  //   {
  //     id: uuid(),
  //     isChecked: false,
  //     label: 'Всё',
  //   },
  //   {
  //     id: uuid(),
  //     isChecked: true,
  //     label: 'Без пересадок',
  //   },
  //   {
  //     id: uuid(),
  //     isChecked: false,
  //     label: '1 пересадка',
  //   },
  //   {
  //     id: uuid(),
  //     isChecked: true,
  //     label: '2 пересадки',
  //   },
  //   {
  //     id: uuid(),
  //     isChecked: true,
  //     label: '3 пересадки',
  //   },
  // ],

  return (
    <>
      {isLoading && <Spin isLoading={isLoading} />}
      <div className={cl.list}>
        {/* <button onClick={getTickets}>Do request</button>*/}

        {getPartOfSortedTickets(tickets).map((el) => (
          <TicketItem key={uuid()} price={el.price} carrier={el.carrier} segments={el.segments} />
        ))}
        <Button onShowMore={showMoreTickets} addClass={'both'}>
          Показать еще 5 билетов!
        </Button>
      </div>
    </>
  )
}

export default ListOfTickets
