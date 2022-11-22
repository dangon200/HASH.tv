import style from './searchBar.module.css'
import { BsSearch } from 'react-icons/bs'
import { searchByName } from '../../store/actions/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export default function SeachBar ({ setPage }) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [alert, setAlert] = useState(false)

  function handleSubmit (e) {
    e.preventDefault()
    if (!name) {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 1000)
    } else {
      setAlert(false)
      dispatch(searchByName(name))
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
          value={name}
          placeholder={alert ? 'Ingresa una busqueda' : 'Buscar'}
          id='input'
          onChange={handleChange}
        />
        <button type='submit' className={style.submitSearch}><BsSearch className={style.icon} /></button>
      </form>
    </div>
  )
}