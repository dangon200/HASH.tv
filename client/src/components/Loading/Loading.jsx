import React from 'react'
import s from './Loading.module.css'

export default function Loading () {
  return (
    <div className={s.content}>
      <img className={s.gif} src='https://i.gifer.com/ZZ5H.gif' alt='Loading gif' />
    </div>
  )
}
