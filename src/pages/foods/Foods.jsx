import React, { useContext, useState, useEffect } from "react";
import Header from '../../components/header/Header';
import Cards from "../../components/cards/Cards";
import styles from './Foods.module.css';
import { HamburguersContext } from "../../context/hamburguers";

export default function Foods() {
  const { foods } = useContext(HamburguersContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (foods) {
      setLoading(false);
    }
  }, [foods]);

  if (loading) {
    return (
      <div>
        <Header />
        <div className={styles.cardsBox}>
          <h1>Carregando nossos deliciosos hambúrguers...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <div className={styles.cardsBox}>
          <h1>Ops! Algo deu errado</h1>
          <p>Não foi possível carregar o cardápio. Tente novamente.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className={styles.cardsBox}>
        <h1>Nosso Cardápio</h1>
        <div className={styles.allCards}>
          {foods && foods.length > 0 ? (
            foods.map((food)=><Cards key={food.id} food={food}/>)
          ) : (
            <p>Nenhum hambúrguer disponível no momento.</p>
          )}
        </div>
      </div>
    </div>
  );
}
