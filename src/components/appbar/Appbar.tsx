import React, { FC } from 'react'
import Button from 'src/base/Button'
import { LOGO_URL, PHONE_NUM } from 'src/lib/constant'
import { fromPublicFolder } from 'src/lib/utils'
import './styles.scss'

type Props = { cartPrice: string; cartItems: number; onToggle: () => void; onScrollToTop: () => void }
const Appbar: FC<Props> = (props) => {
  return (
    <div className="appbar">
      <img className="appbar-logo" src={fromPublicFolder(LOGO_URL)} alt="Store's logo" onClick={props.onScrollToTop} />
      <div className="appbar-spacer" />
      <a href={`tel:${PHONE_NUM}`} className="appbar-phone">
        <i className="fa fa-phone" />
        <span className="appbar-phone-text">{PHONE_NUM}</span>
      </a>
      <Button className="appbar-shop" variant="outlined" color="primary" onClick={props.onToggle}>
        <i className="fa fa-shopping-cart" />
        <span className="appbar-shop-text appbar-shop-text--hidden">{props.cartItems}</span>
        <span className="appbar-shop-text appbar-shop-text--hidden">{`item${props.cartItems !== 1 ? 's' : ''}`}</span>
        <span className="appbar-shop-text appbar-shop-text--hidden">-</span>
        <span className="appbar-shop-text">${props.cartPrice}</span>
      </Button>
      {props.children}
    </div>
  )
}

export default Appbar
