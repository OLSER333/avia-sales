import React from 'react'

import cl from './Spin.module.scss'

type spinPropsType = {
  isLoading: boolean
  hasError: boolean
}

const Spin = ({ isLoading, hasError }: spinPropsType) => {
  return (
    <div hidden={!isLoading && !hasError} className={cl.spin}>
      123
    </div>
  )
}

export default Spin
