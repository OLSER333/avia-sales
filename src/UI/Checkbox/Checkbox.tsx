import React from 'react'

import cl from './Checkbox.module.scss'
import { useAction } from '../../hooks/useAction'

type CheckboxPropsType = {
  label: string
  id: string
  checked: boolean
  isAll: boolean
}
// label, id получаю из

const Checkbox = ({ label, id, checked, isAll }: CheckboxPropsType) => {
  const { toggleTransfers, toggleAllTransfers } = useAction()

  const toggleInp = () => {
    if (isAll) {
      toggleAllTransfers(!checked)
    } else {
      toggleTransfers(id, !checked)
    }
  }

  return (
    <div className={cl.checkbox} onClick={toggleInp}>
      <input className={cl.inp} id={String(id)} type='checkbox' checked={checked} />
      <label className={cl.label} htmlFor={String(id)}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
