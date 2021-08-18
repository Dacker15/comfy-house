import React, { useEffect, useRef, VFC } from 'react'
import { CartProduct } from 'src/lib/types'
import Button from 'src/base/Button'
import CartElement from './CartElement'
import './styles.scss'

type Props = {
  products: CartProduct[]
  price: string
  isOpen: boolean
  onRemove: (index: number) => void
  onClear: () => void
  onCheckout: () => void
}
const Cart: VFC<Props> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (props.isOpen) containerRef.current?.classList.add('cart--open')
    else containerRef.current?.classList.remove('cart--open')
  }, [props.isOpen])

  return (
    <div className="cart" ref={containerRef}>
      <div className="cart-container">
        {props.products.length ? (
          props.products.map((p, i) => <CartElement key={i} model={p} onRemove={() => props.onRemove(i)} />)
        ) : (
          <p className="cart-empty">Empty cart</p>
        )}
      </div>
      <p className="cart-total">
        <span>Total:</span>
        <span>${props.price}</span>
      </p>
      <div className="cart-actions">
        <Button color="primary" variant="outlined" onClick={props.onClear}>
          Clear
        </Button>
        <Button color="secondary" variant="outlined" onClick={props.onCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart
