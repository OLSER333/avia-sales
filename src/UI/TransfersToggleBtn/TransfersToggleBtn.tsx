import React from 'react'
import cl from './TransfersToggleBtn.module.scss'

type closePropsType = { onToggle: () => void; isOpen: boolean }

const TransfersToggleBtn = ({ onToggle, isOpen }: closePropsType) => {
  return (
    <>
      <button
        onClick={() => onToggle()}
        className={`${cl.btn} ${isOpen ? cl.closeBtn : cl.openBtn}`}
      >
        {`${isOpen ? '' : 'Пересадки'} `}
      </button>
    </>
  )
}

export default TransfersToggleBtn
