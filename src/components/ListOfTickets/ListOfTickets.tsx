import React from 'react'
import cl from './ListOfTickets.module.scss'
import TicketItem from '../TicketItem/TicketItem'
import Button from '../../UI/Button/Button'
const ListOfTickets = () => {
  return (
    <div className={cl.list}>
      <TicketItem />
      <TicketItem />
      <TicketItem />
      <Button addClass={'both'}>Показать еще 5 билетов!</Button>
    </div>
  )
}

export default ListOfTickets
