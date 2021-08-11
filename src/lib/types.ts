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
