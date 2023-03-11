import { countBy } from 'lodash';
import React from 'react';
import classes from './Item.module.css';

const Item = ({name, add, remove, scoops}) => {
  const scoopByCount = countBy(scoops);
  return(
    <li className={classes.item}>
      <span>{name}</span>
      {scoopByCount[name] >= 0 ? <span className={classes.quantity}>{scoopByCount[name]}</span> : null }
      <div className="right">
        <button className={[classes.plus, "rounded"].join(' ')} onClick={add.bind(this, name)} type="button">+</button>
        <button className={[classes.minus, "rounded"].join(' ')} onClick={remove.bind(this, name)} type="button">-</button>
      </div>
    </li>
  )
}

export default Item;
