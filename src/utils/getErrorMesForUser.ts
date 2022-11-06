export const getErrorMesForUser = (str: string) => {
  switch (str) {
    case 'Network Error':
      return 'Пропал интернет, обновите страницу позднее'
    default:
      return 'Что-то пошло не так. Мы уже исправляем это'
  }
}
