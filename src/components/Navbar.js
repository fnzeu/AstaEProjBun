import React from "react";
import { Link } from 'react-router-dom';
import { SiFerrarinv } from 'react-icons/si';

import { Button } from "./Button";

import "./Navbar.css";

function Navbar(){

    return (
        <>
         <nav className='navbar'>
        <div className='navbar-container'>
          <div to='/' className='navbar-logo'>
            AUTODROMO
          </div>
          <SiFerrarinv className='navbar-icon'/>
          <ul className='nav-menu active'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/F1Grid'
                className='nav-links'
              >
                F1 Grid
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
              >
                About Us
              </Link>
            </li>
          </ul>
          <Button buttonStyle='btn--outline' link='login'>SIGN UP</Button>
        </div>
      </nav>
        </>        
    );
}

export default Navbar;