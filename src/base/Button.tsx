import React, { ButtonHTMLAttributes, FC, useMemo } from 'react'
import 'src/base/styles.scss'
import { getClassName } from 'src/lib/utils'
import { ButtonVariant, ThemeColor } from 'src/lib/types'

type Props = ButtonHTMLAttributes<any> & { variant?: ButtonVariant; color?: ThemeColor }
const Button: FC<Props> = ({ variant = 'contained', color = 'primary', ...props }) => {
  const className = useMemo(() => {
    const base = `btn btn--${variant} btn--${color}`
    return getClassName(base, props.className)
  }, [variant, color, props.className])
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  )
}

export default Button
