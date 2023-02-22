import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='start'></span>
            <Link to='/info' className='middle'>Show</Link>
            <span className='end'></span>
        </div>
    );
};

export default Navbar;