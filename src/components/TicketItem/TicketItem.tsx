import React from 'react'

import cl from './TicketItem.module.scss'
import company from '../../assets/img/company.png'
import { Ticket } from '../../types/tickets'
import { getDuration } from '../../utils/getDuration'
import { getTimeStamps } from '../../utils/getTImeStamps'
import { getTransfersString } from '../../utils/getTransfersString'

const TicketItem = ({ carrier, price, segments }: Ticket) => {
  return (
    <div className={cl.ticket}>
      <div className={cl.priceAndCompany}>
        <h2 className={cl.price}>{price}</h2>
        <div className={cl.company}>
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={company} />
        </div>
      </div>
      <ul className={cl.ticketInfo}>
        {segments.map((el) => {
          return (
            <>
              <li className={cl.infoItem}>
                <p>{`${el.origin} – ${el.destination}`}</p>
                <p>{getTimeStamps(el.date, el.duration)}</p>
              </li>
              <li className={cl.infoItem}>
                <p>В пути</p>
                <p>{getDuration(el.duration)}</p>
              </li>
              <li className={cl.infoItem}>
                <p>{getTransfersString(el.stops.length)}</p>
                <p>{el.stops.join(', ')}</p>
              </li>
            </>
          )
        })}

        {/* <li className={cl.infoItem}>*/}
        {/*  <p>{`${flightTo.origin}-${flightBack.destination}`}</p>*/}
        {/*  <p>10:45 – 08:00</p>*/}
        {/* </li>*/}
        {/* <li className={cl.infoItem}>*/}
        {/*  <p>В пути</p>*/}
        {/*  <p>21ч 15м</p>*/}
        {/* </li>*/}
        {/* <li className={cl.infoItem}>*/}
        {/*  <p>2 пересадки</p>*/}
        {/*  <p>HKG, JNB</p>*/}
        {/* </li>*/}
      </ul>
    </div>
  )
}

export default TicketItem
