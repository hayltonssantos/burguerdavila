import React from "react";
import styles from './Menu.module.css'

export default function Menu(){
  return(
    <ul className={styles.ulMenu}>
      <li className={styles.liMenu}>
        <a href="/home" className={styles.a}>Home</a>
      </li>
      <li className={styles.liMenu}>
        <a href="/foods" className={styles.a}>Menu</a>
      </li>
      <li className={styles.liMenu}>
        <a href="home#topburguers" className={styles.a}>Top Burguers</a>
      </li>
      <li className={styles.liMenu}>
        <a href="home#brburguers" className={styles.a}>Burguers Br</a>
      </li>
      <li className={styles.liMenu}>
        <a href="https://maps.google.com/maps?ll=39.268917,-9.16261&z=17&t=m&hl=pt-BR&gl=US&mapclient=embed&cid=6022707666166689307" className={styles.a}>Maps</a>
      </li>
      
    </ul>
  )
}