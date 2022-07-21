import React from 'react'
import Logo from '../../Assets/logo.jpeg'
import './Navbar.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Services from '../Services/Services'

const Navbar = () => {





  return (
    <BrowserRouter>
    <div className='navbar'>
      <img src={Logo} className='logo'></img>
      <ul>
        <li>About</li>
        <li> <a href='../../Services'>Services</a> </li>
        <li><a href='../../Contacts'>Contacts</a></li>
      </ul>

      

    </div>
    </BrowserRouter>
  )
}

export default Navbar