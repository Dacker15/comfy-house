import React, { VFC } from 'react'
import { Product } from 'src/lib/types'
import Button from 'src/base/Button'
import CartElement from './CartElement'
import './styles.scss'

type Props = { products: Product[] }
const Cart: VFC<Props> = (props) => {
  return (
    <div className="cart">
      <div className="cart-container">
        {props.products.map((p) => (
          <CartElement {...p} />
        ))}
      </div>
      <p className="cart-total">
        <span>Total:</span>
        <span>$PRICE</span>
      </p>
      <div className="cart-actions">
        <Button color="primary" variant="outlined">
          Clear
        </Button>
        <Button color="secondary" variant="outlined">
          Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart
