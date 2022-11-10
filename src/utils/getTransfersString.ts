export const getTransfersString = (length: number) => {
  switch (true) {
    case length === 0:
      return 'нет пересадок '
    case length === 1:
      return `${length} пересадка`
    case length > 1 && length < 5:
      return `${length} пересадки`
    case length > 4:
      return `${length} пересадок`
  }
}
