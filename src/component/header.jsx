import React from 'react';
import './style.css'
import headerimg from '../img/headerimg.jpeg'
import logo from '../img/logo.png'
import Button from '@mui/material/Button';


const header = () => {
  return (
    <div className='header'>
      <img src={headerimg} alt='headerimg' />
      <div className="logo">
        <img src={logo} alt='logo' />
      </div>
      <div className="button">
        <Button variant="contained">Register Now</Button>
      </div>
    </div>
  )
}

export default header;