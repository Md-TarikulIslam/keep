import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <div>
            <h2 className='keep'>Keep</h2>
            
            <div className='form-design'>
            <p className='dot-design'>_________________</p>
            <hr />
            <p className='extra'>Subject <span className='star'>*</span> </p>
            <input className='subject' type="text" placeholder='Enter Your Subject' />
            <p className='extra'>Text <span className='star'>*</span> </p>
            <textarea className='text' name="" id="" cols="30" rows="10" placeholder='Your Keep'></textarea>
            <button className='add-btn'>Add Now</button>
            </div>
        </div>
    );
};

export default Form;