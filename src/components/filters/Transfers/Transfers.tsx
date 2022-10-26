import React from 'react'
import cl from './Transfers.module.scss'

import { v4 as uuidv4 } from 'uuid'
import Checkbox from '../../../UI/Checkbox/Checkbox'
const Transfers = () => {
  const formCheckBoxes: Array<string> = [
    'Всё',
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки',
  ]
  return (
    <div className={cl.window}>
      <h2 className={cl.header}>Количество пересадок</h2>
      <form action=''>
        {formCheckBoxes.map((el, idx) => (
          <Checkbox key={uuidv4()} label={el} id={idx} />
        ))}
      </form>
    </div>
  )
}

export default Transfers
