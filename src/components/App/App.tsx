import React from 'react'
import cl from './App.module.scss'
import Transfers from '../filters/Transfers/Transfers'
import SotringBtns from '../filters/SotringBtns/SotringBtns'
import Logo from '../../UI/Logo/Logo'
import ListOfTickets from '../ListOfTickets/ListOfTickets'

const App = () => {
  return (
    <div className={cl.container}>
      <div className={cl.appWrap}>
        <Logo />
        <div className={cl.wrapWithoutLogo}>
          <Transfers />
          <div className={cl.mainInfo}>
            <SotringBtns />
            <ListOfTickets />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
