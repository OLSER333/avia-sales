import React from 'react'

import cl from './Button.module.scss'

type btnType = {
  children: string
  addClass: string
}

const Button = ({ addClass, children }: btnType) => {
  const getFarClassPart = () => {
    if (addClass === 'first') return cl.first
    else if (addClass === 'last') return cl.last
    else if (addClass === 'both') return cl.radiused
    else return ''
  }
  return (
    <>
      <button className={`${cl.btn} ${getFarClassPart()}`}>{children}</button>
    </>
  )
}

export default Button
