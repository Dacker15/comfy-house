import { useEffect, useState } from 'react'
import { Product, ProductRaw } from 'src/lib/types'

export const getClassName = (base: string, extra?: string) => {
  if (extra) return `${base} ${extra}`
  return base
}

export const mapProducts = (data: ProductRaw[]): Product[] => {
  return data.map((d) => ({
    id: d.sys.id,
    title: d.fields.title,
    price: d.fields.price,
    url: d.fields.image.fields.file.url.replace('./images/', '')
  }))
}

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
