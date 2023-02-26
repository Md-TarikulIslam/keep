import React from 'react';
// import Information from '../Information/Information';
import './Form.css'

const Form = ({ subject, setSubject, text, setText, notes, setNotes }) => {

    const inputHandler = (e) => {
        if (e.target.name === "subject") {
            setSubject(e.target.value)
        }
        else {
            setText(e.target.value)
        }
        console.log(subject, text)
    }

    const addNotesHandler = (e) => {
        setNotes((note => {
            return [...note,
            {
                subject: subject,
                text: text,
                id: Math.round(Math.random() * 1000000000000000000)
            }]

        }))
        setSubject("")
        setText("")

    }


    return (
        <div>
            <h2 className='keep'>Keep</h2>

            <div className='form-design'>
                <p className='dot-design'>_________________</p>
                <hr />
                <p className='extra'>Subject <span className='star'>*</span> </p>
                <input className='subject' name='subject' type="text" placeholder='Enter Your Subject' value={subject} onChange={inputHandler} />
                <p className='extra'>Text <span className='star'>*</span> </p>
                <textarea className='text' name="text" cols="30" rows="10" placeholder='Your Keep' value={text} onChange={inputHandler}></textarea>
                <button className='add-btn' onClick={addNotesHandler}>Add Now</button>

            </div>
            
        </div>
    );
};

export default Form;