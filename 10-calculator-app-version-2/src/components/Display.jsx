import { useState } from 'react'
import styles from './Display.module.css'

const Display = (props) => {



  return (
    <>
      <div>
        <input value={props.btn} className={styles.display} type="text"></input> 
      </div>
    </>
  )
}

export default Display