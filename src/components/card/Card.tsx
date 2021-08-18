import React, { VFC } from 'react'
import Button from 'src/base/Button'
import { fromPublicFolder } from 'src/lib/utils'
import { Product } from 'src/lib/types'
import './styles.scss'

type Props = { model: Product; onAdd: (nextProduct: Product) => void }
const Card: VFC<Props> = (props) => {
  return (
    <div className="card">
      <div className="card-cover">
        <img className="card-cover-image" src={fromPublicFolder(props.model.url)} alt={props.model.title} />
        <Button
          className="card-cover-shop-button"
          variant="contained"
          color="secondary"
          onClick={() => props.onAdd(props.model)}
        >
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
