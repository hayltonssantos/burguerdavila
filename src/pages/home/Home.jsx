import React from 'react'
import styles from './Home.module.css'
import photo from '../../assets/photos/Hamburguer.png'
import back from '../../assets/photos/background/back.jpg'
import Header from '../../components/header/Header'
import Bottom from '../../components/bottom/Bottom'
import TopBurguers from '../../components/topBurguers/TopBurguers'
import BrBurguers from '../../components/brBurguers/BrBurguers'

export default function Home() {
  return (
    <div className={styles.homeBody}>
      <Header header='relativeHeader'/>
      <div className={styles.home}>
        
        <div className={styles.divImg}>
          <div  className={styles.title}>
            <h1 className={styles.text}>BURGUER DA VILA</h1>
          </div>
          <img className={styles.img} src={photo}></img>
        </div>
      </div>
      <div id='topburguers' className={styles.topBurguers}>
        <div className={styles.desclittleTitle}>
          <h3 className={styles.littleTitle}>Top Burguers</h3>
        </div>
        <TopBurguers 
          name='BIG BURGER' 
          photo={'bigburguer'} 
          items={[
            "DOIS HAMBURGUERS",
            "DOIS CHEDDARS",
            "ALFACE E CEBOLA ROXA",
            "MOLHO ESPECIAL"
          ]}
        />
          <TopBurguers 
            name='TEXAS BURGUER' 
            photo={'texasBurguer'} 
            items={[
              "HAMBURGUER ARTESANAL 160G DE CARNE",
              "2 FATIAS DE CHEDDAR",
              "SALADA COLESLAW",
              "FAROFA DE BACON"
            ]}
          />
        <TopBurguers 
          name='TRIPLO CHEESE BACON' 
          photo={'triplocheesbacon'} 
          items={[
            "HAMBURGUER ARTESANAL 160G DE CARNE",
            "2 FATIAS DE CHEDDAR",
            "SALADA COLESLAW",
            "FAROFA DE BACON"
          ]}
        />
      </div>
      <div id='brburguers'>
        <div className={styles.desclittleTitle}>
          <h3 className={styles.littleTitle}>Top Burguers</h3>
        </div>
        <BrBurguers/>
      </div>
      <Bottom/> 
    </div>
  )
}
