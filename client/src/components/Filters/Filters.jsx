import React, { useState, useEffect } from 'react'
import { categoria, lenguaje, continente } from '../utilities/data.js'
import { useDispatch } from 'react-redux'
import { filterCanalesStream, clearFilter, getStreams } from '../../store/actions/actions'
import s from './Filters.module.css'

function Filters ({ setPage }) {
  const [filter, setFilter] = useState({
    opt: '',
    categoria: '',
    lenguaje: '',
    continente: ''
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
    <div className={`dropdown-toggle px-5 py-2 ${s.filtros}`} href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
        Filtros
      </div>
      <ul className='dropdown-menu fs-4'>
        <li>
          <select className={s.optSelect} name='opt' onChange={e => handleSort(e)}>
            <option value='' id='opt'> Ordernar </option>
            <option value='az'> A-Z </option>
            <option value='za'> Z-A </option>
            <option value='more'> Mas suscriptores</option>
            <option value='less'> Menos suscriptores </option>
          </select>
        </li>
         <li>
          <select className={s.optSelect} name='categoria' onChange={e => handleSort(e)}>
            <option value='' id='categoria'> Categoria </option>
            {categoria && categoria.map((e, index) => {
              return (
                <option key={index} value={e}> {e} </option>
              )
            })}
          </select>
        </li>
        <li>
          <select className={s.optSelect} name='lenguaje' onChange={e => handleSort(e)}>
            <option value='' id='lenguaje'> Lenguaje </option>
            {lenguaje && lenguaje.map((e, index) => {
              return (
                <option key={index} value={e}> {e} </option>
              )
            })}
          </select>
        </li> 
        <li>
          <select className={s.optSelect} name='continente' onChange={e => handleSort(e)}>
            <option value='' id='continente'> Origen </option>
            {continente && continente.map((e, index) => {
              return (
                <option key={index} value={e}> {e} </option>
              )
            })}
          </select>
        </li>
      </ul>

      <button
        className={s.limpiarFiltros} onClick={() => {
          setFilter({
            opt: '',
            categoria: '',
            lenguaje: '',
            origin: ''
          })
          dispatch(clearFilter())
          dispatch(getStreams())
          document.getElementById('opt').selected = true
          document.getElementById('lenguaje').selected = true
          document.getElementById('categoria').selected = true
          document.getElementById('continente').selected = true
        }}
      > Limpiar Filtros
      </button>
    </div>
      )
    }
    export default Filters

    {/* <div className={`dropdown-toggle px-5 py-2 ${s.filtros}`} href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
        Filtros
      </div> */}