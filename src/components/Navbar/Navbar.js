import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='start'></span>
            {/* <h2 className='middle'>Details</h2> */}
            <a className='middle' href="">Details</a>
            <span className='end'></span>
        </div>
    );
};

export default Navbar;