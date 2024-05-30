import React from 'react';
import styles from './TopBurguers.module.css';
import texasBurguer from '../../assets/photos/burguers/texasBurguer.png';
import triplocheesbacon from '../../assets/photos/burguers/triplocheesbacon.png';
import bigburguer from '../../assets/photos/burguers/bigburguer.png';

export default function TopBurguers({ name = 'texasBurguer', photo = '', items = [] }) {
  switch (photo) {
    case 'texasBurguer':
      photo = texasBurguer;
      break;
    case 'bigburguer':
      photo = bigburguer;
      break;
    case 'triplocheesbacon':
      photo = triplocheesbacon;
      break;
    default:
      photo = texasBurguer;
  }

  return (
    <div className={styles.topBurguers}>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
