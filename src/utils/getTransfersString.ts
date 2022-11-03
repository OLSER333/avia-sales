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

// 0 - нет пересадок
// 1 - пересадка
// 2, 3, 4 - пересадки
// 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18, 19, 20 - пересадок
