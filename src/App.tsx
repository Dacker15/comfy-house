import React, { useCallback, useEffect, useState, VFC } from 'react'
import { ABOUT_ID, GALLERY_ID } from 'src/lib/constant'
import { Product, ProductRaw } from 'src/lib/types'
import { mapProducts } from 'src/lib/utils'
import About from 'src/components/about/About'
import Appbar from 'src/components/appbar/Appbar'
import Cart from './components/cart/Cart'
import Gallery from 'src/components/gallery/Gallery'
import Splash from 'src/components/splash/Splash'

const App: VFC = () => {
  const [products, setProducts] = useState<Product[]>([])

  const onAdd = useCallback((nextProduct: Product) => {
    console.log('We will add this product to your cart', nextProduct)
  }, [])

  const onScroll = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }, [])
  const scrollToAbout = useCallback(() => onScroll(ABOUT_ID), [onScroll])
  const scrollToGallery = useCallback(() => onScroll(GALLERY_ID), [onScroll])

  useEffect(() => {
    fetch('products.json').then((response) => {
      response.json().then((data: { items: ProductRaw[] }) => setProducts(mapProducts(data.items)))
    })
  }, [])

  return (
    <div>
      <Appbar>
        <Cart products={products} />
      </Appbar>
      <Splash onScroll={scrollToAbout} />
      <About onScroll={scrollToGallery} />
      <Gallery products={products} onAdd={onAdd} />
    </div>
  )
}

export default App
