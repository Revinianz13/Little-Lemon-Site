import { Link } from "react-router-dom";
import React from 'react';
import './ButtonEle.css';

function ButtonEle(props) {
  if (props.value === 'Book') {
    return (
      <Link to="/BookTable" >
        <button  className='button-31'>{props.name}</button>
      </Link>
    );
  } else {
    return (
      <button className='button-31'>
        {props.name}
      </button>
    );
  }
}

export default ButtonEle;