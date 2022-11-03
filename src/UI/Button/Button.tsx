import React from 'react'

import cl from './Button.module.scss'
import { TicketsAction } from '../../types/tickets'

type btnType = {
  children?: string
  addClass: string
  onShowMore?: () => TicketsAction
}

const Button = ({ addClass, children, onShowMore }: btnType) => {
  const getRadiusClass = () => {
    if (addClass === 'first') return cl.first
    else if (addClass === 'last') return cl.last
    else if (addClass === 'both') return cl.radiused
    else return ''
  }
  return (
    <>
      <button onClick={onShowMore} className={`${cl.btn} ${getRadiusClass()}`}>
        {children}
      </button>
    </>
  )
}

export default Button
