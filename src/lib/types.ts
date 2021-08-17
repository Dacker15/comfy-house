export type ProductRaw = {
  sys: { id: string }
  fields: {
    title: string
    price: number
    image: { fields: { file: { url: string } } }
  }
}

export type Product = {
  id: string
  title: string
  price: number
  url: string
}

export type CartProduct = { count: number } & Product

export type ThemeColor = 'primary' | 'secondary'
export type ButtonVariant = 'contained' | 'outlined'
