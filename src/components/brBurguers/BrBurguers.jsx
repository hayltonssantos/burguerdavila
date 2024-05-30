import React from 'react'
import styles from './BrBurguers.module.css'
import one from '../../assets/photos/brBurguers/1.png'
import two from '../../assets/photos/brBurguers/2.png'
import three from '../../assets/photos/brBurguers/3.png'
import four from '../../assets/photos/brBurguers/4.png'


export default function BrBurguers() {
  return (
    <div className={styles.photos}>
      <img src={one}></img>
      <img src={two}></img>
      <img src={three}></img>
      <img src={four}></img>
    </div>
  )
}
