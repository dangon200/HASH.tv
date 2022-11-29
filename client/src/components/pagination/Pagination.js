import style from './pagination.module.css'

export default function Pagination ({ Streams, StreamsPerPage, pagination, page }) {
  const pageNumber = []
  const numOfPages = Math.ceil(Streams / StreamsPerPage)
  for (let i = 1; i <= numOfPages; i++) {
    pageNumber.push(i)
  }

  return (
    <nav className={style.nav_pagination}>
      {pageNumber && pageNumber.map((num) => {
        return <button className={num === page ? `${style.button_pagination}` : `${style.noButton}`} key={num} onClick={() => pagination(num)}>{num}</button>
      })}
    </nav>
  )
}
