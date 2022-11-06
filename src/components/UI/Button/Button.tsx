import React from 'react'

import cl from './Button.module.scss'
import { TicketsAction } from '../../../types/tickets'
import { buttonsRadiusType } from '../../filters/SotringBtns/SotringBtns'
import { allSortEnum } from '../../../types/sortingBtns'
import { TransfersAction } from '../../../types/transfers'

type btnType = {
  addClass: buttonsRadiusType
  active: allSortEnum | boolean
  btnTypedString?: allSortEnum
  children?: string
  onShowMore?: () => TicketsAction
  onChangeSort?: (newSort: allSortEnum | undefined) => void
  turnOnAllTransfers?: (changeTo: boolean) => TransfersAction
}

const Button = ({
  addClass,
  children,
  onShowMore,
  onChangeSort,
  btnTypedString,
  active,
  turnOnAllTransfers,
}: btnType) => {
  const getRadiusClass = () => {
    if (addClass === 'left') return cl.first
    else if (addClass === 'right') return cl.last
    else if (addClass === 'both') return cl.radiused
    else return ''
  }

  const getActiveClass = () => {
    if (active === true || active === btnTypedString) return cl.btn_active
  }

  const doFn = () => {
    if (onShowMore) {
      onShowMore()
    } else if (onChangeSort) {
      onChangeSort(btnTypedString)
    } else {
      if (turnOnAllTransfers) turnOnAllTransfers(true)
    }
  }
  return (
    <>
      <button onClick={doFn} className={`${cl.btn} ${getRadiusClass()} ${getActiveClass()}`}>
        {children}
      </button>
    </>
  )
}

export default Button
