import React from 'react'

import cl from './Spin.module.scss'

type spinPropsType = {
  isLoading: boolean
  hasError: boolean
}

type ffType = (a: number, b: number) => number

const Spin = ({ isLoading, hasError }: spinPropsType) => {
  const ff: ffType = (a, b) => {
    return a + b
  }

  return (
    <div hidden={!isLoading && !hasError} className={cl.spin}>
      {ff(1, 3)}
    </div>
  )
}

export default Spin
