import React from "react";
import styles from './Bottom.module.css'
import { FaFacebookF } from "react-icons/fa"; 
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function Bottom(){
  return(
    <bottom className={styles.bottom}>
      <div className={styles.icons}>
        <a href="https://www.instagram.com/burgerdavila_/">
          <FaInstagram style={{color: 'white', fontSize: '30px', padding:'10px'}}/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100083197551213">
          <FaFacebookF style={{color: 'white', fontSize: '30px', padding:'10px'}}/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=351933115425&text=Ol%C3%A1">
          <FaWhatsapp style={{color: 'white', fontSize: '30px', padding:'10px'}}/>
        </a>
      </div>
      <div className={styles.text}>
        <h3>LOJA FISICA - Avenida Dr Joaquim de Albuquerque, n40 B - Bombarral</h3>
      </div>
      <div className={styles.more}>
      Contacto - 933 115 425
      </div>
    </bottom>
  )
}