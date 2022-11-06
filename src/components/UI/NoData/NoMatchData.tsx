import React from 'react'

import cl from './NoData.module.scss'
import Button from '../Button/Button'
import { useAction } from '../../../hooks/useAction'

const NoMatchData = () => {
  const { toggleAllTransfers } = useAction()

  return (
    <>
      <h2 className={cl.noData}>Слишком жёсткие фильтры</h2>
      <Button turnOnAllTransfers={() => toggleAllTransfers(true)} active={true} addClass={'both'}>
        Сбросить фильтры
      </Button>
    </>
  )
}

export default NoMatchData
