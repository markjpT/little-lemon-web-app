import React from 'react';
import { Route, Routes} from 'react-router';
import { Link } from 'react-router-dom';
import Logo from '../icons_assets/logo.svg';
import Homepage from './Homepage';

const Header = () => {
    return (
        <section id='header'>
          <nav>
                <img src={Logo} alt='Logo' />
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/reservations'>Reservations</a></li>
                    <li><a href='/order-online'>Order Online</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </nav>
            <Routes>
              <Route path='/' element={<Homepage />} />
            </Routes>
        </section>
    )
}

export default Header