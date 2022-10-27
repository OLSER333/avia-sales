import React from 'react'

import cl from './TicketItem.module.scss'
import company from '../../assets/img/company.png'

const TicketItem = () => {
  interface Ticket {
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

  return (
    <div className={cl.ticket}>
      <div className={cl.priceAndCompany}>
        <h2 className={cl.price}>13 400 Р</h2>
        <div className={cl.company}>
          <img src={company} alt={company} />
        </div>
      </div>
      <ul className={cl.ticketInfo}>
        <li className={cl.infoItem}>
          <p>MOW – HKT</p>
          <p>10:45 – 08:00</p>
        </li>
        <li className={cl.infoItem}>
          <p>В пути</p>
          <p>21ч 15м</p>
        </li>
        <li className={cl.infoItem}>
          <p>2 пересадки</p>
          <p>HKG, JNB</p>
        </li>
        <li className={cl.infoItem}>
          <p>MOW – HKT</p>
          <p>10:45 – 08:00</p>
        </li>
        <li className={cl.infoItem}>
          <p>В пути</p>
          <p>21ч 15м</p>
        </li>
        <li className={cl.infoItem}>
          <p>2 пересадки</p>
          <p>HKG, JNB</p>
        </li>
      </ul>
    </div>
  )
}

export default TicketItem
