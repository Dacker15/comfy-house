import React, { VFC } from 'react'
import Button from 'src/base/Button'
import { Product } from 'src/lib/types'
import './styles.scss'

type Props = { model: Product; onAdd: (nextProduct: Product) => void }
const Card: VFC<Props> = (props) => {
  return (
    <div className="card">
      <div className="card-cover">
        <img
          className="card-cover-image"
          src={`${process.env.PUBLIC_URL}/assets/${props.model.url}`}
          alt={props.model.title}
        />
        <Button className="card-cover-shop-button" onClick={() => props.onAdd(props.model)}>
          <i className="fa fa-shopping-cart" />
        </Button>
      </div>
      <p className="card-description">
        <span className="card-description-title">{props.model.title}</span>
        <span>$ {props.model.price}</span>
      </p>
    </div>
  )
}

export default Card
