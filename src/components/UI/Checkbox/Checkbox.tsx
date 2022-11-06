import React from 'react'

import cl from './Checkbox.module.scss'
import { useAction } from '../../../hooks/useAction'

type CheckboxPropsType = {
  label: string
  id: string
  checked: boolean
  isAll: boolean
}
// label, id получаю из

const Checkbox = ({ label, id, checked, isAll }: CheckboxPropsType) => {
  const { toggleTransfers, toggleAllTransfers, resetShowCount } = useAction()

  const toggleInp = () => {
    if (isAll) {
      toggleAllTransfers(!checked)
    } else {
      toggleTransfers(id, !checked)
    }
    resetShowCount()
  }

  return (
    <div className={cl.checkbox} onClick={toggleInp}>
      <input className={cl.inp} id={id} type='checkbox' checked={checked} />
      <label className={cl.label} htmlFor={`#${id}`}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
