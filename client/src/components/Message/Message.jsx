import React from 'react'

import styles from './Message.module.css'

import Loading from '../Loading/Loading.jsx'

export default function Message (props) {
  return (
    <div className={styles.globalContainer}>
      <Loading />
      {props.message}
    </div>
  )
}

