import React from 'react'

import cl from './TicketItem.module.scss'
import { Ticket } from '../../types/tickets'
import { getDuration } from '../../utils/getDuration'
import { getTimeStamps } from '../../utils/getTImeStamps'
import { getTransfersString } from '../../utils/getTransfersString'
import { getSpacedPrice } from '../../utils/getSpacedPrice'

const TicketItem = ({ carrier, price, segments }: Ticket) => {
  return (
    <div className={cl.ticket}>
      <div className={cl.priceAndCompany}>
        <h2 className={cl.price}>{getSpacedPrice(price)} ₽</h2>
        <div className={cl.company}>
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </div>
      </div>
      <ul className={cl.ticketInfo}>
        {segments.map((el) => {
          return (
            <>
              <li className={cl.infoItem}>
                <p className={cl.supTxt}>{`${el.origin} – ${el.destination}`}</p>
                <p>{getTimeStamps(el.date, el.duration)}</p>
              </li>
              <li className={cl.infoItem}>
                <p className={cl.supTxt}>В пути</p>
                <p>{getDuration(el.duration)}</p>
              </li>
              <li className={cl.infoItem}>
                <p className={cl.supTxt}>{getTransfersString(el.stops.length)}</p>
                <p>{el.stops.join(', ')}</p>
              </li>
            </>
          )
        })}
      </ul>
    </div>
  )
}

export default TicketItem
