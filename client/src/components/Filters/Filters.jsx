import React, { useState, useEffect } from 'react'
// import { types, varietales, provinces } from '../utilities/data.js'
import { useDispatch } from 'react-redux'
import { filterCanalesStream, clearFilter } from '../../store/actions/actions'
import s from './Filters.module.css'

function Filters ({ setPage }) {
  const [filter, setFilter] = useState({
    opt: '',
    varietal: '',
    type: '',
    origin: ''
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(filterCanalesStream(filter))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter])
  function handleSort (e) {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    })
    setPage(1)
  }

  return (
    <div className={`dropdown ${s.general}`}>
      <a className={`dropdown-toggle px-5 py-2 ${s.filtros}`} href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
        Filtros
      </a>
      <ul className='dropdown-menu fs-4'>
        <li>
          <select className={s.optSelect} name='opt' onChange={e => handleSort(e)}>
            <option value='' id='opt'> Ordernar </option>
            <option value='az'> A-Z </option>
            <option value='za'> Z-A </option>
            <option value='more'> Mayor Precio </option>
            <option value='less'> Menor Precio </option>
          </select>
        </li>
        {/* <li>
          <select className={s.optSelect} name='varietal' onChange={e => handleSort(e)}>
            <option value='' id='varietal'> Varietal</option>
            {varietales && varietales.map(e => {
              return (
                <option key={e} value={e}> {e} </option>
              )
            })}
          </select>
        </li> */}
        {/* <li>
          <select className={s.optSelect} name='type' onChange={e => handleSort(e)}>
            <option value='' id='type'> Tipo </option>
            {types && types.map(e => {
              return (
                <option key={e} value={e}> {e} </option>
              )
            })}
          </select>
        </li> */}
        {/* <li>
          <select className={s.optSelect} name='origin' onChange={e => handleSort(e)}>
            <option value='' id='origin'> Origen </option>
            {provinces && provinces.map(e => {
              return (
                <option key={e} value={e}> {e} </option>
              )
            })}
          </select>
        </li> */}
      </ul>

      <button
        className={s.limpiarFiltros} onClick={() => {
          setFilter({
            order: '',
            varietal: '',
            type: '',
            origin: ''
          })
          dispatch(clearFilter())
          document.getElementById('opt').selected = true
          document.getElementById('type').selected = true
          document.getElementById('varietal').selected = true
          document.getElementById('origin').selected = true
        }}
      > Limpiar Filtros
      </button>
    </div>
      )
    }
    export default Filters