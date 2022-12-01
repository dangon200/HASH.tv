import style from './searchBar.module.css'
import { BsSearch } from 'react-icons/bs'
import { getStreamName} from '../../store/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

export default function SeachBar ({ setPage }) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [alert, setAlert] = useState(false)
  const stream = useSelector((state)=>state.streamName)
  // console.log(stream)
////////////////////////

  function handleSubmit (e) {
    e.preventDefault()
    if (!name) {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 1000)
    } else {
      setAlert(false)
      dispatch(getStreamName(name))
      setName('')
      // setPage(1)
    }
  }

  function handleChange (e) {
    e.preventDefault()
    setName(e.target.value)
  }
  return (
    <div className={style.container}>
      <form className={style.searchBar} onSubmit={handleSubmit} autoComplete='off'>
        <input
          className={`${style.inputSearch} ${alert && style.alert}`}
          type='text'
         
          placeholder={alert ? 'Ingresa una busqueda' : 'Buscar'}
          id='input'
          onChange={handleChange}
        />
        <button type='submit' className={style.submitSearch}><BsSearch className={style.icon} /></button>
      </form>
    </div>
  )
}