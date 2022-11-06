import { Ticket, TicketsType } from '../../types/tickets'
import { allSortEnum, allSortTypes } from '../../types/sortingBtns'
import { TransferBox } from '../../types/transfers'

export default function (
  tickets: Array<Ticket>,
  curSortType: allSortTypes,
  data: Array<TransferBox>,
  showCount: number,
) {
  const sortBy = (a: Ticket, b: Ticket) => {
    if (curSortType === allSortEnum.price) {
      return a.price - b.price
    } else if (curSortType === allSortEnum.speed) {
      return (
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
      )
    } else {
      return (
        a.price -
        b.price +
        (a.segments[0].duration + a.segments[1].duration) -
        (b.segments[0].duration + b.segments[1].duration)
      )
    }
  }

  const getSortedTickets = (checkedFilters: (number | undefined)[]) => {
    const filteredTickets = tickets.filter((el) => {
      const from = el.segments[0].stops.length
      const to = el.segments[1].stops.length

      if (checkedFilters.includes(from) && checkedFilters.includes(to)) {
        return el
      }
    })

    return curSortType !== allSortEnum.notSelected ? filteredTickets.sort(sortBy) : filteredTickets
  }

  const getPartOfSortedTickets = (): TicketsType => {
    const checkedFilters = data
      .slice(1)
      .filter((el) => el.isChecked)
      .map((el) => el.transfersCount)
    return getSortedTickets(checkedFilters).slice(0, showCount)
  }

  return getPartOfSortedTickets()
}
