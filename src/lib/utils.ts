import { useEffect, useMemo, useState } from 'react'
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

export const findElementByClassName = (element: HTMLElement | null, classNames: string[]): boolean => {
  if (element) {
    const isRoot = element.classList.contains('root')
    const isCorrect = classNames.some((className) => element.classList.contains(className))
    if (isCorrect) return true
    else if (isRoot) return false
    else return findElementByClassName(element.parentElement, classNames)
  }
  return false
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

export const useAnimation = (element: HTMLElement | null, animationClass: string, once = true) => {
  const [done, setDone] = useState<boolean>(false)
  const canRepeat = useMemo(() => !once || !done, [once, done])
  const observer = useMemo(
    () =>
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const target = entry.target
          if (entry.isIntersecting) {
            if (canRepeat) {
              target.classList.add(animationClass)
              setDone(true)
            }
          } else {
            target.classList.remove(animationClass)
          }
        })
      }),
    [animationClass, canRepeat]
  )

  useEffect(() => {
    if (element) observer.observe(element)
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [element, observer])
}
