import React, { useContext, useState } from "react";
import Header from '../../components/header/Header'
import Cards from "../../components/cards/Cards";
import styles from './Foods.module.css'
import { HamburguersContext } from "../../context/hamburguers";

export default function Foods(){
  const {foods} = useContext(HamburguersContext)
  return(
      <div>
        <Header header={'relativeHeader'}/>
        
        <div className={styles.allCards}>
          <h1>Cárdapio Burguer</h1>
          <div className={styles.cardsBox}> 
            {foods.map((food) => parseInt(food.id) <= 4 ? <Cards key={food.id} food={food} idPhoto={food.id}/> : null)}
          </div>
        </div>

        <div className={styles.allCards}>
           <h1>Gourmet Simple</h1>
          <div className={styles.cardsBox}> 
            {foods.map((food) => parseInt(food.id) >= 5 && parseInt(food.id) <= 9 ? <Cards key={food.id} food={food} idPhoto={food.id} /> : null)}
          </div>
        </div>
          
        <div className={styles.allCards}>
          <h1>Gourmet</h1>
          <div className={styles.cardsBox}> 
            {foods.map((food) => parseInt(food.id) >= 10 && parseInt(food.id) <= 14 ? <Cards key={food.id} food={food} idPhoto={food.id} /> : null)}
          </div>
        </div>
      </div>
  )
}