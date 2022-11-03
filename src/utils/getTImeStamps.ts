export const getTimeStamps = (date: string, diffMin: number) => {
  const begin = new Date(date)
  const end = new Date(begin.getTime() + diffMin * 60000)
  return `${String(begin.getHours()).padStart(2, '0')}:${String(begin.getMinutes()).padStart(
    2,
    '0',
  )}
     - ${String(end.getHours()).padStart(2, '0')}:${String(end.getMinutes()).padStart(2, '0')}`
}
