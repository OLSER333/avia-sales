import React from 'react'
import Button from '../../UI/Button/Button'
import cl from './SotringBtns.module.scss'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { allSortEnum } from '../../../types/sortingBtns'
import { useAction } from '../../../hooks/useAction'

export type buttonsRadiusType = 'left' | 'right' | 'both' | '' // для вёрстки

const SotringBtns = () => {
  const { curSortType, labels } = useTypedSelector((state) => state.sortingBtnsReducer)
  const { sortByPrice, sortBySpeed, sortByOptimality } = useAction()

  const isRadiused = (idx: number): buttonsRadiusType => {
    if (idx === 0) {
      return 'left'
    } else if (idx === labels.length - 1) {
      return 'right'
    } else {
      return ''
    }
  }

  const onChangeSort = (newSort: string | undefined) => {
    switch (newSort) {
      case allSortEnum.price:
        sortByPrice()
        break
      case allSortEnum.speed:
        sortBySpeed()
        break
      case allSortEnum.optimality:
        sortByOptimality()
        break
    }
  }

  return (
    <div>
      <ul className={cl.btnFilterList}>
        {labels.map((btn, idx) => {
          return (
            <li key={btn}>
              <Button
                btnTypedString={btn}
                onChangeSort={onChangeSort}
                addClass={isRadiused(idx)}
                active={curSortType}
              >
                {btn}
              </Button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SotringBtns
