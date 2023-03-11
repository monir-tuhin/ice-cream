import React from 'react';
import classes from './Modal.module.css'

const Modal = ({children}) => {
  return(
    <div>
      <div className={classes.backdrop}/>
      <div className={classes.modalBody}>{children}</div>
    </div>
  )
}


export default Modal;

/*
<div className="modalBody">
  <div className="formContainer react" id="orderForm">
    <h1>Complete the form below and hit submit</h1>
    <form className="orderForm">
      <ul>
        <li>
          <input
            type="text"
            name="name"
            className="fieldStyle fieldSplit alignLeft"
            placeholder="Name"
          />
          <input
            type="text"
            name="phone"
            className="fieldStyle fieldSplit alignRight"
            placeholder="Phone no."
          />
        </li>
        <li>
          <input
            type="text"
            name="email"
            className="fieldStyle fieldFull"
            placeholder="Email"
          />
        </li>
        <li>
                        <textarea
                          name="address"
                          className="fieldStyle"
                          placeholder="Address"
                        ></textarea>
        </li>
        <li>
          <input type="submit" value="Submit Order" />
        </li>
      </ul>
    </form>
  </div>
</div>*/
