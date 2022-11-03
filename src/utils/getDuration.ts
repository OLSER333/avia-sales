export const getDuration = (min: number) => {
  return `${Math.floor(min / 60)}ч ${min % 60}м`
}
