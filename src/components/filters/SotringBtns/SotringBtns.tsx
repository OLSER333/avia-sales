import React from 'react'
import Button from '../../../UI/Button/Button'
import cl from './SotringBtns.module.scss'

const SotringBtns = () => {
  const btnsFilterList: Array<string> = ['Самый дешевый', 'Самый быстрый', 'Оптимальный']

  // хочу сделать два типа first | last -> присваивать соотв. класс для

  const isRadiused = (idx: number) => {
    if (idx === 0) {
      return 'first'
    } else if (idx === btnsFilterList.length - 1) {
      return 'last'
    } else {
      return ''
    }
  }

  return (
    <div>
      <ul className={cl.btnFilterList}>
        {btnsFilterList.map((btn, idx) => {
          return (
            <li key={btn}>
              <Button addClass={isRadiused(idx)}>{btn}</Button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SotringBtns
