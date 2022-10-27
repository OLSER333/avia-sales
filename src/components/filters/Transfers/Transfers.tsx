import React, { useEffect, useState } from 'react'
import cl from './Transfers.module.scss'

import { v4 as uuidv4 } from 'uuid'
import Checkbox from '../../../UI/Checkbox/Checkbox'
// import Button from '../../../UI/Button/Button'
import TransfersToggleBtn from '../../../UI/TransfersToggleBtn/TransfersToggleBtn'
const Transfers = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(document.documentElement.clientWidth < 700)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    function onResize(e) {
      const width = e.currentTarget.innerWidth
      if (width <= 700 && !isOpen) {
        setIsMobile(true)
      } else if (width > 700) {
        setIsMobile(false)
      }
    }

    window.addEventListener('resize', (e) => onResize(e))
    return () => {
      window.removeEventListener('resize', (e) => onResize(e))
    }
  })

  const formCheckBoxes: Array<string> = [
    'Всё',
    'Без пересадок',
    '1 пересадка',
    '2 пересадки',
    '3 пересадки',
  ]
  return (
    <div className={`${cl.window} ${isOpen ? cl.windowIsOpen : ''}`}>
      <h2 className={cl.header}>Количество пересадок</h2>
      <form action=''>
        {formCheckBoxes.map((el, idx) => (
          <Checkbox key={uuidv4()} label={el} id={idx} />
        ))}
      </form>
      {isMobile && (
        <TransfersToggleBtn isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
      )}
    </div>
  )
}

export default Transfers
