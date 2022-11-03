import React from 'react'

import cl from './Spin.module.scss'

type spinPropsType = {
  isLoading: boolean
}

const Spin = ({ isLoading }: spinPropsType) => {
  return <div hidden={!isLoading} className={cl.spin}></div>
}

export default Spin
