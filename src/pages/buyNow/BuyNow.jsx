import React from 'react'
import styles from './BuyNow.module.css'
import photo from '../../assets/photos/Hamburguer.png'
import back from '../../assets/photos/background/back.jpg'
import Header from '../../components/header/Header'
import Bottom from '../../components/bottom/Bottom'
import TopBurguers from '../../components/topBurguers/TopBurguers'
import BrBurguers from '../../components/brBurguers/BrBurguers'

export default function BuyNow() {
  return (
    <div className={styles.homeBody}>
      <Header header='relativeHeader'/>
      <div className={styles.home}>
        
        <div className={styles.divImg}>
          <div  className={styles.title}>
            <h1 className={styles.text}>EM CONSTRUÇÃO</h1>
          </div>
          <img className={styles.img} src={photo}></img>
        </div>
      </div>
      
      <Bottom/> 
    </div>
  )
}
