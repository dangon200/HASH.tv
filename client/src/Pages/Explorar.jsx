import React from 'react';
import Filters from '../components/Filters/Filters.jsx'
import Card from '../components/Card/Card2'
import Pagination from '../components/pagination/Pagination'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStreams } from '../store/actions/actions'
import style from './Explorar.module.css'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Message from '../components/Message/Message'
// import App from '../components/StreamVideo/App.js'
// import generateMuiTheme from "../components/StreamVideo/mui/theme";
// import { ThemeProvider } from "@material-ui/styles";

function Explorar() {
  const dispatch = useDispatch()
  const Streams = useSelector(state => state.streams)
  const [page, setPage] = useState(1)
  const StreamsPerPage = 6
  const lastStreamsPerPage = page * StreamsPerPage
  const firstStreamsPerPage = lastStreamsPerPage - StreamsPerPage
  const currentPageStreams = Streams.slice(firstStreamsPerPage, lastStreamsPerPage)
  console.log(currentPageStreams)

  useEffect(() => {
    dispatch(getStreams())
  }, [])
  const pages = []
  for (let i = 1; i <= Math.ceil(Streams.length / StreamsPerPage); i++) {
    pages.push(i)
  }
  function pagination (num) {
    setPage(num)
  }
  function paginationBef () {
    setPage(page - 1)
  }
  function paginationAft () {
    setPage(page + 1)
  }
  
  return (

     <div className={style.globalContainer}>
      <div className={style.searchFilter}>
        <div className={style.filtersContainer}>
        {typeof Streams !== 'string' &&
        <div className={style.divPagination}>
          {page !== 1 ? <div onClick={() => paginationBef()}><MdOutlineKeyboardArrowLeft className={style.buttonLeft} /></div> : null}
          <Pagination
            Streams={Streams.length}
            StreamsPerPage={StreamsPerPage}
            pagination={pagination}
            page={page}
          />
          {page !== pages.length && Streams.length ? <div onClick={() => paginationAft()}><MdOutlineKeyboardArrowRight className={style.buttonRight} /></div> : null}
        </div>}
          <Filters setPage={setPage} />
        </div>
      </div>
      <div className={`${style.containerProducts}`}>
        {typeof Streams !== 'string'
          ? currentPageStreams.map((p, index) => {
            return (
              <section className={style.sectionCards} key={index}>
                <div>
                  <Card
                    id={p._id}
                    name={p.name}
                    image={p.image}
                    description={p.description}
                    language={p.language}
                    key={index}
                  />
                </div>
              </section>
            )
          })
          : <Message message={Streams} />}
      </div>
    </div>
  );
}

{/* <ThemeProvider theme={generateMuiTheme()}>
      <App/>
      </ThemeProvider> */}
export default Explorar;