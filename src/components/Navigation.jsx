import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../icons_assets/logo.svg';

const Navigation = () => {
    return (
        <section id='header'>
          <nav>
                <img src={Logo} alt='Logo' />
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/reservations'>Reservations</Link></li>
                    <li><Link to='/order-online'>Order Online</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </section>
    )
}

export default Navigation;