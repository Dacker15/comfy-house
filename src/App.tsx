import React, { useCallback, useEffect, useMemo, useState, VFC } from 'react'
import { ABOUT_ID, GALLERY_ID } from 'src/lib/constant'
import { CartProduct, Product, ProductRaw } from 'src/lib/types'
import { findHierarchyElementByClassName, mapProducts } from 'src/lib/utils'
import About from 'src/components/about'
import Appbar from 'src/components/appbar'
import Cart from './components/cart'
import Gallery from 'src/components/gallery'
import Splash from 'src/components/splash'

const App: VFC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])
  const [isCartOpen, setCartOpen] = useState<boolean>(false)
  const totalItems = useMemo(
    () => cartProducts.reduce<number>((acc, current) => acc + current.count, 0),
    [cartProducts]
  )
  const price = useMemo(
    () => cartProducts.reduce<number>((acc, current) => acc + current.price * current.count, 0).toFixed(2),
    [cartProducts]
  )

  const onAdd = useCallback((nextProduct: Product) => {
    setCartProducts((prev) => {
      const next = [...prev]
      const index = next.findIndex((p) => p.id === nextProduct.id)
      if (index !== -1) next[index] = { ...next[index], count: next[index].count + 1 }
      else next.push({ ...nextProduct, count: 1 })
      return next
    })
  }, [])

  const onRemove = useCallback((index: number) => {
    setCartProducts((prev) => {
      const next = [...prev]
      if (next[index].count > 1) next[index] = { ...next[index], count: next[index].count - 1 }
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
  const onScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const onClickAwayCart = useCallback(
    (event: MouseEvent) => {
      // @ts-ignore
      const isCartClicked = findHierarchyElementByClassName(event.target, [
        'cart',
        'cart-element',
        'appbar-shop',
        'appbar-shop-text',
        'gallery-element-cover-shop-button'
      ])
      if (!isCartClicked && isCartOpen) {
        setCartOpen(false)
      }
    },
    [isCartOpen]
  )

  useEffect(() => {
    fetch('products.json').then((response) => {
      response.json().then((data: { items: ProductRaw[] }) => setProducts(mapProducts(data.items)))
    })
  }, [])

  useEffect(() => {
    window.addEventListener('click', onClickAwayCart)
    return () => {
      window.removeEventListener('click', onClickAwayCart)
    }
  }, [onClickAwayCart])

  return (
    <div>
      <Appbar cartPrice={price} cartItems={totalItems} onToggle={onToggle} onScrollToTop={onScrollToTop}>
        <Cart
          products={cartProducts}
          price={price}
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
