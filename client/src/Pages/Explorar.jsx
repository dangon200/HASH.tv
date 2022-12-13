import React from 'react';
import Filters from '../components/Filters/Filters.jsx'
import Card from '../components/Card/Card2'
// import Pagination from '../components/pagination/Pagination'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from './Explorar.module.css'
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import InfiniteScroll from 'react-infinite-scroll-component';
// import App from '../components/StreamVideo/App.js'
// import generateMuiTheme from "../components/StreamVideo/mui/theme";
// import { ThemeProvider } from "@material-ui/styles";

function Explorar() {
  const Streams = useSelector(state => state.streams)
  const [page, setPage] = useState(1)
  const [hasMore,setHasMore]=useState(true)
  const StreamsPerPage = 6
  const lastStreamsPerPage = page * StreamsPerPage
  const firstStreamsPerPage = lastStreamsPerPage - StreamsPerPage
  const currentPageStreams = Streams.slice(firstStreamsPerPage, lastStreamsPerPage)
  const [stream, setStream] = useState([])

  useEffect(() => {
    setStream(stream.concat(currentPageStreams))
    setHasMore(page < currentPageStreams.length)
  }, [page])

  // const pages = []
  // for (let i = 1; i <= Math.ceil(Streams.length / StreamsPerPage); i++) {
  //   pages.push(i)
  // }
  // function pagination (num) {
  //   setPage(num)
  // }
  // function paginationBef () {
  //   setPage(page - 1)
  // }
  // function paginationAft () {
  //   setPage(page + 1)
  // }

  return (
    <>
      <div className={style.filter}>
      <Filters setPage={setPage} />
      </div>
            {/* {typeof Streams !== 'string' &&
        <div className={style.divPagination}>
          {page !== 1 ? <div onClick={() => paginationBef()}><MdOutlineKeyboardArrowLeft className={style.buttonLeft} /></div> : null}
          <Pagination
            Streams={Streams.length}
            StreamsPerPage={StreamsPerPage}
            pagination={pagination}
            page={page}
          />
          {page !== pages.length && Streams.length ? <div onClick={() => paginationAft()}><MdOutlineKeyboardArrowRight className={style.buttonRight} /></div> : null}
        </div>} */}
            
       
        <div className={`${style.containerProducts}`}>
          {stream.map((p, index) => {
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
          })}
        </div>
           <InfiniteScroll
      dataLength={stream.length}
      next={() => setPage(prevPage => prevPage + 1)}
      hasMore={hasMore}
      loader={<h3>Loading</h3>}>
        </InfiniteScroll>

    </>
  );
}

{/* <ThemeProvider theme={generateMuiTheme()}>
      <App/>
      </ThemeProvider> */}
export default Explorar;