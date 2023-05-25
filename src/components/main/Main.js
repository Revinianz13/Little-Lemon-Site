import React from 'react';
import './Main.css';
import HeaderMain from './Specials';
import MenuItems from '../menu/Menu'


function Main() {
	return (
		<>
    <div style={{backgroundColor:'#495E57'}}>
			<HeaderMain />
      <MenuItems />
    </div>
		</>
	);
}

export default Main;
