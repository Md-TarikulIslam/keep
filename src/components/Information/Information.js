import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Info from '../Info/Info';
import './Information.css'

const Information = () => {

    return (
        <div>
            <Link to='/'><Button variant='primary' className='mt-5 mb-4 back-btn'>Back to Home</Button></Link>
            <Info></Info>
        </div>
    );
};

export default Information;