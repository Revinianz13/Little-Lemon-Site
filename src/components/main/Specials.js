import React from "react";
import OrderButton from "../Buttons/OrderButton";
import './Main.css';

function HeaderMain() {
	return (
<div className='wrapper' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
  <h1>Specials</h1>
  <div style={{ justifyContent: 'flex-end' }}>
    <OrderButton name={'Order Now'} />
  </div>
</div>
	);
}

export default HeaderMain;