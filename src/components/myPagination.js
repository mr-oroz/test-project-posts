import { Pagination } from "react-bootstrap";

export const MyPagination = ({ total, current, onChangePage }) => {
  let items = [];

  // назад пагинацю
  if (current > 1) {
    items.push(<Pagination.Prev
      key='prev'
      onClick={() => onChangePage(current - 1)} />)
  }

  // вывести всех цифры страничку с помошью цикл
  for (let page = 1; page <= total; page++) {
    items.push(
      <Pagination.Item
        key={page}
        data-page={page}
        active={page === current}
        onClick={() => onChangePage(page)}>
        {page}
      </Pagination.Item>
    )
  }

  // вперед пагинацю
  if (current < total) {
    items.push(<Pagination.Next
      key='next'
      onClick={() => onChangePage(current + 1)} />)
  }
  return (
    <Pagination>{items}</Pagination>
  )

}
