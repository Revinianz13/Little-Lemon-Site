import React from "react";
import './OrderButton.css';
import cart from '../../images/cart.svg'

function OrderButton (props) {
  return (
    <button className='buttonforNew'>
    <img src={cart} alt="Cart Icon"/>
      {props.name}</button>
  );

}

export default OrderButton;