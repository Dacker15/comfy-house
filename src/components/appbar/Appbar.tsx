import React, { VFC } from 'react'
import Button from 'src/base/Button'
import { PHONE_NUM } from 'src/lib/constant'
import './styles.scss'

const Appbar: VFC = () => {
  return (
    <div className="appbar">
      <img className="appbar-logo" src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Store's logo" />
      <div className="appbar-spacer" />
      <a href={`tel:${PHONE_NUM}`} className="appbar-phone">
        <i className="fa fa-phone" />
        <span className="appbar-phone-text">{PHONE_NUM}</span>
      </a>
      <Button className="appbar-shop" variant="outlined" color="primary">
        <i className="fa fa-shopping-cart" />
        Shop
      </Button>
    </div>
  )
}

export default Appbar
