import React, { VFC } from 'react'
import { Product } from 'src/lib/types'
import Button from 'src/base/Button'

type Props = Product
const CartElement: VFC<Props> = (props) => {
  return (
    <div className="cart-element">
      <img className="cart-element-image" src={`${process.env.PUBLIC_URL}/assets/${props.url}`} alt={props.title} />
      <span className="cart-element-title">{props.title}</span>
      <Button variant="outlined" color="primary">
        <i className="fa fa-trash" />
      </Button>
    </div>
  )
}

export default CartElement
