import React, { FC } from 'react'
import Button from 'src/base/Button'
import { PHONE_NUM } from 'src/lib/constant'
import './styles.scss'

type Props = { cartPrice: string; cartItems: number; onToggle: () => void }
const Appbar: FC<Props> = (props) => {
  return (
    <div className="appbar">
      <img className="appbar-logo" src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Store's logo" />
      <div className="appbar-spacer" />
      <a href={`tel:${PHONE_NUM}`} className="appbar-phone">
        <i className="fa fa-phone" />
        <span className="appbar-phone-text">{PHONE_NUM}</span>
      </a>
      <Button className="appbar-shop" variant="outlined" color="primary" onClick={props.onToggle}>
        <i className="fa fa-shopping-cart" />
        <span className="appbar-shop-text">{props.cartItems}</span>
        <span className="appbar-shop-text appbar-shop-text--hidden">{`item${props.cartItems !== 1 ? 's' : ''}`}</span>
        <span className="appbar-shop-text">-</span>
        <span className="appbar-shop-text">${props.cartPrice}</span>
      </Button>
      {props.children}
    </div>
  )
}

export default Appbar
