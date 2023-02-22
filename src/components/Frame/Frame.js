import React, { useState } from 'react';
import Form from '../Form/Form';
import Navbar from '../Navbar/Navbar';
import './Frame.css'

const Frame = () => {
    const [subject, setSubject] = useState("")
    const [text, setText] = useState("")
    const [notes, setNotes] = useState(getNotesFromStorage)
    // console.log(notes);

    localStorage.setItem("notes", JSON.stringify(notes))
   
    return (
        <div className='Arvo'>
            <div className='full-form'>
                <span className='red'>.</span><span className='yellow'>.</span><span className='green'>.</span>
                <Navbar></Navbar>
                <Form 
                subject={subject}
                setSubject={setSubject}
                text={text}
                setText={setText}
                notes={notes}
                setNotes={setNotes}
                ></Form>
            </div>
        </div>
    );
    function getNotesFromStorage(){
        const note=JSON.parse(localStorage.getItem("notes"));
        if(note){
            return note;
        }
        else{
            return []
        }
    }
};

export default Frame;