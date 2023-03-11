import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items'
import TotalPrice from './TotalPrice/TotalPrice'
import Modal from './Modal/Modal'

const Builder = ({items, price, add, remove, scoops}) => {
  return(
    <div>
      <div className={classes.builder}>
        <h3>Build your own Ice Cream Sundae</h3>
        <Items add={add} items={items} remove={remove} scoops={scoops}/>
        <TotalPrice price={price}/>
        <button className={[classes.order, "rounded"].join(" ")} type="button">
          Add to Cart
        </button>
      </div>
      <Modal>
        Hello Modal
      </Modal>
    </div>
  )
}

export default Builder;
