import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Info from '../Info/Info';

const Information = ({ noteOne }) => {
    const [allTodoList,setAllTodoList] = useState([]);
    console.log(allTodoList);
    
    const { text} = allTodoList;
    // const {subject}=notes
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('notes'));
        setAllTodoList(data);
        console.log('All Todo ---->', data);
    }, []);
    return (
        <div>
            <Link to='/'><Button variant='primary' className='mt-5 mb-4'>Back to Home</Button></Link>
            {
                allTodoList.map((list)=> <Info 
                list={list}
                ></Info>)
            }
       
        </div>
    );
};

export default Information;