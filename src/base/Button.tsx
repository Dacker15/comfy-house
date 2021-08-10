import React, { ButtonHTMLAttributes, FC, useMemo } from 'react'
import 'src/base/styles.scss'
import { getClassName } from 'src/lib/utils'

const Button: FC<ButtonHTMLAttributes<any>> = (props) => {
  const className = useMemo(() => getClassName('btn', props.className), [props.className])
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  )
}

export default Button
