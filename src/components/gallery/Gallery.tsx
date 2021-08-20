import React, { useEffect, useState, VFC } from 'react'
import { DEBOUNCE_TIME, GALLERY_ID } from 'src/lib/constant'
import { Product } from 'src/lib/types'
import { useDebounce } from 'src/lib/utils'
import GalleryElement from './GalleryElement'
import './styles.scss'

type Props = { products: Product[]; onAdd: (nextProduct: Product) => void }
const Gallery: VFC<Props> = (props) => {
  const [actualProducts, setActualProducts] = useState<Product[]>([])
  const [text, setText] = useState<string>('')
  const debouncedText = useDebounce<string>(text, DEBOUNCE_TIME)

  useEffect(() => {
    const lowerDebouncedText = debouncedText.toLowerCase()
    setActualProducts(props.products.filter((p) => p.title.toLowerCase().includes(lowerDebouncedText)))
  }, [props.products, debouncedText])

  return (
    <div id={GALLERY_ID} className="gallery">
      <p className="gallery-title">Our Products</p>
      <input
        type="text"
        className="gallery-input"
        placeholder="Find your products"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="gallery-container">
        {actualProducts.map((p, i) => (
          <GalleryElement model={p} onAdd={props.onAdd} key={i} />
        ))}
      </div>
    </div>
  )
}

export default Gallery
