import React from 'react'

import cl from './Button.module.scss'
import { TicketsAction } from '../../types/tickets'
import { buttonsRadiusType } from '../../components/filters/SotringBtns/SotringBtns'
import { allSortEnum } from '../../types/sortingBtns'

type btnType = {
  addClass: buttonsRadiusType
  btnTypedString?: allSortEnum
  children?: string
  onShowMore?: () => TicketsAction
  onChangeSort?: (newSort: allSortEnum | undefined) => void
  active: allSortEnum | boolean
}

const Button = ({
  addClass,
  children,
  onShowMore,
  onChangeSort,
  btnTypedString,
  active,
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
    } else {
      if (onChangeSort) {
        onChangeSort(btnTypedString)
      }
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
