import React, { useEffect } from 'react'
import cl from './App.module.scss'
import Transfers from '../filters/Transfers/Transfers'
import SotringBtns from '../filters/SotringBtns/SotringBtns'
import Logo from '../UI/Logo/Logo'
import ListOfTickets from '../ListOfTickets/ListOfTickets'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const App = () => {
  const { error } = useTypedSelector((state) => state.ticketsReducer)
  const notify = () =>
    toast.error(error.message, {
      position: 'top-right',
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })

  useEffect(() => {
    if (error.hasBadError) notify()
  }, [error])
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
      <ToastContainer />
    </div>
  )
}

export default App
