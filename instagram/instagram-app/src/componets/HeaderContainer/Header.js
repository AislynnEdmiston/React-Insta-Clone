import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header-container'>
        <div className='logo'>
           <i className="fab fa-instagram icon"></i> 
        </div>
        <div className="header-title"> 
            <h1>Instagram</h1>
        </div>
        <input className='header-input' type='text' placeholder='Search'/>
        <div className='icon-container'>
            <i className="far fa-compass icon"></i>
            <i className="far fa-heart icon"></i>
            <i className="far fa-user icon"></i>
        </div>
    </div>
  )
}
