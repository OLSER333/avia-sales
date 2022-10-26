import React from 'react'

import cl from './Checkbox.module.scss'

type CheckboxPropsType = {
  label: string
  id: number
}

const Checkbox = ({ label, id }: CheckboxPropsType) => {
  return (
    <div className={cl.checkbox}>
      <input className={cl.inp} id={String(id)} type='checkbox' />
      <label className={cl.label} htmlFor={String(id)}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
