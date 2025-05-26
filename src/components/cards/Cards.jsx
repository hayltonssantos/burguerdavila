import React from 'react';
import styles from './Cards.module.css';
import stylesNew from './CardsNew.module.css';
import photo from '../../assets/photos/Hamburguer.png';

export default function Cards({ food, type = '' }) {
  if (!food) {
    return null;
  }

  let card = '';
  let imgBox = '';
  let mouse = '';
  let contentBox = '';
  let price = '';
  let buy = '';

  if (type === 'newCard') {
    card = stylesNew.card;
    imgBox = stylesNew.imgBox;
    mouse = stylesNew.mouse;
    contentBox = stylesNew.contentBox;
    price = stylesNew.price;
    buy = stylesNew.buy;
  } else {
    card = styles.card;
    imgBox = styles.imgBox;
    mouse = styles.mouse;
    contentBox = styles.contentBox;
    price = styles.price;
    buy = styles.buy;
  }

  const prices = String(food.price);
  const parts = prices.split('.');

  const parteInteira = parts[0];
  const parteDecimal = parts[1];

  return (
    <div className={card}>
      <div className={imgBox}>
        <img src={photo} alt={`Hamburguer ${food.name}`} className={mouse} />
      </div>
      {type !== 'newCard' ? (
        <div className={contentBox}>
          <h3>{food.name}</h3>
          <h4>{food.desc}</h4>
          <h2 className={price}>
            {parteInteira}.<small>{parteDecimal}</small> €
          </h2>

          <a href={`/food/${food.name}`} key={food.name} className={buy}>
            See more
          </a>
        </div>  
        ) : (
          ''
        )}
    </div>
  );
}
