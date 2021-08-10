export const getClassName = (base: string, extra?: string) => {
  if (extra) return `${base} ${extra}`
  return base
}
