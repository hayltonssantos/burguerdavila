import React, { useState, useEffect } from 'react';
import styles from './Cards.module.css';
import stylesNew from './CardsNew.module.css';
import um from '../../assets/photos/allBurguers/1.jpg';
import dois from '../../assets/photos/allBurguers/2.jpg';
import tres from '../../assets/photos/allBurguers/3.jpg';
import quatro from '../../assets/photos/allBurguers/4.jpg';
import cinco from '../../assets/photos/allBurguers/5.jpg';
import seis from '../../assets/photos/allBurguers/6.png';
import sete from '../../assets/photos/allBurguers/7.png';
import oito from '../../assets/photos/allBurguers/8.png';
import nove from '../../assets/photos/allBurguers/9.png';
import dez from '../../assets/photos/allBurguers/10.png';
import onze from '../../assets/photos/allBurguers/11.jpg';
import doze from '../../assets/photos/allBurguers/12.jpg';
import treze from '../../assets/photos/allBurguers/13.jpg';
import quatorze from '../../assets/photos/allBurguers/14.jpg';
import quinze from '../../assets/photos/allBurguers/15.jpg';
import dezesseis from '../../assets/photos/allBurguers/16.png';
import dezessete from '../../assets/photos/allBurguers/17.png';
import dezoito from '../../assets/photos/allBurguers/18.png';
import dezenove from '../../assets/photos/allBurguers/19.jpg';

export default function Cards({ food, type = '', color = '', idPhoto }) {
  if (!food) {
    return null;
  }

  const [photo, setPhotos] = useState(null);


  const loadPhoto = (photo) => {
    switch (photo) {
      case 0: return um;
      case 1: return dois;
      case 2: return tres;
      case 3: return quatro;
      case 4: return cinco;
      case 5: return seis;
      case 6: return sete;
      case 7: return oito;
      case 8: return nove;
      case 9: return dez;
      case 10: return onze;
      case 11: return doze;
      case 12: return treze;
      case 13: return quatorze;
      case 14: return quinze;
      case 15: return dezesseis;
      case 16: return dezessete;
      case 17: return dezoito;
      case 18: return dezenove;
    }
    return photo
  };

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
        <img src={loadPhoto(parseInt(idPhoto))} alt={`Hamburguer ${food.name}`} className={mouse} />
      </div>
      {type !== 'newCard' ? (
        <div className={contentBox}>
          <h3>{food.name}</h3>
          <h4>{food.desc}</h4>
          <h2 className={price}>
            {parteInteira}.<small>{parteDecimal}</small> €
          </h2>
          <a href={`/food/${food.name}`} key={food.name} className={buy}>
            Buy Now
          </a>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
