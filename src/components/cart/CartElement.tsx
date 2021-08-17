import React, { VFC } from 'react'
import { CartProduct } from 'src/lib/types'
import Button from 'src/base/Button'

type Props = { model: CartProduct; onRemove: () => void }
const CartElement: VFC<Props> = (props) => {
  return (
    <div className="cart-element">
      <img
        className="cart-element-image"
        src={`${process.env.PUBLIC_URL}/assets/${props.model.url}`}
        alt={props.model.title}
      />
      <span className="cart-element-title">
        {props.model.count} X {props.model.title}
      </span>
      <Button variant="outlined" color="primary" onClick={props.onRemove}>
        <i className="fa fa-trash" />
      </Button>
    </div>
  )
}

export default CartElement
