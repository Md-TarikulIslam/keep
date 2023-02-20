import React from 'react';
import Form from '../Form/Form';
import Navbar from '../Navbar/Navbar';
import './Frame.css'

const Frame = () => {
    return (
        <div>
            <div className='full-form'>
                <span className='red'>.</span><span className='yellow'>.</span><span className='green'>.</span>
                <Navbar></Navbar>
                <Form></Form>
            </div>
        </div>
    );
};

export default Frame;