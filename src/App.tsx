import React, { useCallback, useEffect, useState, VFC } from 'react'
import { Product, ProductRaw } from 'src/lib/types'
import { mapProducts } from 'src/lib/utils'
import About from 'src/components/about/About'
import Appbar from 'src/components/appbar/Appbar'
import Gallery from 'src/components/gallery/Gallery'

const App: VFC = () => {
  const [products, setProducts] = useState<Product[]>([])

  const onAdd = useCallback((nextProduct: Product) => {
    console.log('We will add this product to your cart', nextProduct)
  }, [])

  useEffect(() => {
    fetch('products.json').then((response) => {
      response.json().then((data: { items: ProductRaw[] }) => setProducts(mapProducts(data.items)))
    })
  }, [])

  return (
    <div>
      <Appbar />
      <About />
      <Gallery products={products} onAdd={onAdd} />
    </div>
  )
}

export default App
