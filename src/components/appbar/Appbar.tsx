import React, { VFC } from 'react'
import Button from 'src/base/Button'
import { PHONE_NUM } from 'src/lib/constant'
import './styles.scss'

const Appbar: VFC = () => {
  return (
    <div className="appbar">
      <img className="appbar-logo" src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Store's logo" />
      <div className="appbar-spacer" />
      <span className="appbar-phone">
        <i className="fa fa-phone" />
        {PHONE_NUM}
      </span>
      <Button className="appbar-shop">
        <i className="fa fa-shopping-cart" />
        Shop
      </Button>
    </div>
  )
}

export default Appbar