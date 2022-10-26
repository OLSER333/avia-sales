import React from 'react'

import cl from './App.module.scss'
import Transfers from '../filters/Transfers/Transfers'

const App = () => {
  return (
    <div className={cl.container}>
      <div className={cl.appWrap}>
        <Transfers />
      </div>
    </div>
  )
}

export default App
