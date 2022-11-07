export const getTransfersString = (length: number) => {
  if (length === 0) {
    return 'нет пересадок '
  }
  if (length === 1) {
    return `${length} пересадка`
  }
  if (length > 1 && length < 5) {
    return `${length} пересадки`
  }
  if (length > 4) {
    return `${length} пересадок`
  }
}
