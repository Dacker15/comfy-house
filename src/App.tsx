import React, { useCallback, useEffect, useState, VFC } from 'react'
import { ABOUT_ID, GALLERY_ID } from 'src/lib/constant'
import { CartProduct, Product, ProductRaw } from 'src/lib/types'
import { mapProducts } from 'src/lib/utils'
import About from 'src/components/about/About'
import Appbar from 'src/components/appbar/Appbar'
import Cart from './components/cart/Cart'
import Gallery from 'src/components/gallery/Gallery'
import Splash from 'src/components/splash/Splash'

const App: VFC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
  const [isCartOpen, setCartOpen] = useState<boolean>(false)

  const onAdd = useCallback((nextProduct: Product) => {
    setCartProducts((prev) => {
      const next = [...prev]
      const index = next.findIndex((p) => p.id === nextProduct.id)
      if (index !== -1) next[index] = { ...next[index], count: next[index].count++ }
      else next.push({ ...nextProduct, count: 1 })
      return next
    })
  }, [])

  const onRemove = useCallback((index: number) => {
    setCartProducts((prev) => {
      const next = [...prev]
      if (next[index].count >= 1) next[index] = { ...next[index], count: next[index].count-- }
      else next.splice(index, 1)
      return next
    })
  }, [])

  const onClear = useCallback(() => {
    setCartProducts([])
  }, [])

  const onCheckout = useCallback(() => {
    alert('You will redirect to checkout page')
  }, [])

  const onToggle = useCallback(() => {
    setCartOpen((prev) => !prev)
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
      <Appbar onToggle={onToggle}>
        <Cart
          products={cartProducts}
          isOpen={isCartOpen}
          onRemove={onRemove}
          onClear={onClear}
          onCheckout={onCheckout}
        />
      </Appbar>
      <Splash onScroll={scrollToAbout} />
      <About onScroll={scrollToGallery} />
      <Gallery products={products} onAdd={onAdd} />
    </div>
  )
}

export default App
