import React from 'react'

import cl from './Spin.module.scss'

interface spinProps {
  isLoading: boolean
  hasError: boolean
}

const Spin = ({ isLoading, hasError }: spinProps) => {
  return <div hidden={!isLoading && !hasError} className={cl.spin}></div>
}

export default Spin
