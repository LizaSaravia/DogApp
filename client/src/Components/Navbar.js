import React from 'react';
import './Navbar.css';
import heart from '../Images/heart.png'



function Navbar() {
	return (
		<div className = "Navbar">

			<a href='/home' className='link'>
			<div className = 'Name'>
				<h1 className='Title1'>D</h1>
				
				<img src={heart} className='heart' />
				
				<h1 className='Title1'>gcyclopedia</h1>
			</div>			
			</a>

		</div>

	)
}

export default Navbar
