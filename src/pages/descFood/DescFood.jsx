import React from 'react'
import Header from '../../components/header/Header'
import Cards from '../../components/cards/Cards'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import firebaseApp from '../../../services/firebase'
import {getFirestore, collection, onSnapshot, query, where} from 'firebase/firestore'
import styles from './DescFood.module.css'

export default function DescFood() {
  const db = getFirestore(firebaseApp)
  const {name} = useParams()
  const [selectionFood, setSelectionFood] = useState([])
  
  useEffect(()=>{
    const q = query(collection(db,`hamburguers`), where('name', '==', `${name}`))

     onSnapshot(q,(querySnapshot)=>{
      const aux = []
      querySnapshot.forEach((doc)=>{
        /* console.log(doc.id, doc.data) */

        aux.push({
          id:doc.id,
          ...doc.data()
        })

      })
      setSelectionFood([...aux][0])
    })
  }, [])
  return (
    <div>
      <Header header='relativeHeader'/>
      <section  className={styles.index}>
        <aside><Cards food={selectionFood} key={selectionFood.name} type='newCard'/></aside>
        <aside className={styles.desc}>
          <h1>{selectionFood.name}</h1>
          <h2>{selectionFood.desc}</h2>
          <h3>{selectionFood.price}€</h3>
        </aside>
        <button className={styles.btn}>
          <a href="/buynow">BUY NOW</a>
        </button>
      </section>
    </div>
  )
}
