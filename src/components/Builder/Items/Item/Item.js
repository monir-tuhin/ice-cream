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
        <button type="button" onClick={add.bind(this, name)} className={[classes.plus, "rounded"].join(' ')}>+</button>
        <button type="button" onClick={remove.bind(this, name)} className={[classes.minus, "rounded"].join(' ')}>-</button>
      </div>
    </li>
  )
}

export default Item;
