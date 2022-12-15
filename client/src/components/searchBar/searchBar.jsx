import style from './searchBar.module.css'
import { GrSearch } from 'react-icons/gr'
import { getStreamName} from '../../store/actions/actions.js'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function SeachBar ({ setPage }) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [name, setName] = useState('')
  const [alert, setAlert] = useState(false)
  
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
      
      history.push("/explorar")
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
        <button type='submit' className={style.submitSearch}><GrSearch className={style.icon} /></button>
      </form>
    </div>
  )
}