export const getSpacedPrice = (price: number) => {
  const str = String(price)
  switch (str.length % 3) {
    case 0:
      return `${str.replace(/(\d{3})/gi, '$1 ')}`
    case 1:
      return `${str.slice(0, 1)} ${str.slice(1).replace(/(\d{3})/gi, '$1 ')}`
    case 2:
      return `${str.slice(0, 2)} ${str.slice(2).replace(/(\d{3})/gi, '$1 ')}`
  }
}
