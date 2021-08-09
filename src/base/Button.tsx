import React, { ButtonHTMLAttributes, FC } from 'react'
import './styles.css'

const Button: FC<ButtonHTMLAttributes<any>> = (props) => {
  return (
    <div className="btn" {...props}>
      {props.children}
    </div>
  )
}

export default Button
