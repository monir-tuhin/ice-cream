import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

const IceCream = ({scoops}) => {
  return(
    <div>
      <div className={classes.icecream}>
        <p className={classes.cone}></p>
        {scoops.map(se => <Scoop key={`${se}${Math.random()}`} scoop={se}/>)}
        <div className={classes.cherry}></div>
      </div>
    </div>
  )
}

export default IceCream;
