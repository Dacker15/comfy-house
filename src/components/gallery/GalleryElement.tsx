import React, { VFC } from 'react'
import Button from 'src/base/Button'
import { fromPublicFolder } from 'src/lib/utils'
import { Product } from 'src/lib/types'
import './styles.scss'

type Props = { model: Product; onAdd: (nextProduct: Product) => void }
const GalleryElement: VFC<Props> = (props) => {
  return (
    <div className="gallery-element">
      <div className="gallery-element-cover">
        <img className="gallery-element-cover-image" src={fromPublicFolder(props.model.url)} alt={props.model.title} />
        <Button
          className="gallery-element-cover-shop-button"
          variant="contained"
          color="secondary"
          onClick={() => props.onAdd(props.model)}
        >
          <i className="fa fa-shopping-cart" />
        </Button>
      </div>
      <p className="gallery-element-description">
        <span className="gallery-element-description-title">{props.model.title}</span>
        <span>$ {props.model.price}</span>
      </p>
    </div>
  )
}

export default GalleryElement
