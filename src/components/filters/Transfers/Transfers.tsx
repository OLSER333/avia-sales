import React, { useEffect, useState } from 'react'
import cl from './Transfers.module.scss'

import Checkbox from '../../UI/Checkbox/Checkbox'
import TransfersToggleBtn from '../../UI/TransfersToggleBtn/TransfersToggleBtn'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
const Transfers = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(document.documentElement.clientWidth < 700)

  useEffect(() => {
    const onResize: (e: UIEvent) => void = (e) => {
      const w = e.target as Window
      if (w.innerWidth <= 700 && !isOpen) {
        setIsMobile(true)
      } else if (w.innerWidth > 700) {
        setIsMobile(false)
      }
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const { data } = useTypedSelector((state) => state.transfersReducer)

  return (
    <div className={`${cl.window} ${isOpen ? cl.windowIsOpen : ''}`}>
      <h2 className={cl.header}>Количество пересадок</h2>
      <form action=''>
        {data.map((el) => (
          <Checkbox
            key={el.id}
            label={el.label}
            id={el.id}
            checked={el.isChecked}
            isAll={el.id === data[0].id}
          />
        ))}
      </form>
      {isMobile && (
        <TransfersToggleBtn isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
      )}
    </div>
  )
}

export default Transfers
