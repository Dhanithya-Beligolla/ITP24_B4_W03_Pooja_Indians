import React from 'react';
import { Link } from 'react-router-dom';

import classes from './header.module.css';
import { useCart } from '../../hooks/useCart';


export default function Header() {
  
  const {cart} = useCart();


  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          POOJA INDIANS
        </Link>
        <nav>
          <ul>
            
          <li>
              <Link to="/cart">
                Cart
                
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}