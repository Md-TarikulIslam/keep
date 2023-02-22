import React from 'react';
import { Table } from 'react-bootstrap';
import './Info.css'


const Info = ({list}) => {
    const {subject, text, id} = list
    return (
        <div >
    
            <Table striped bordered hover className='Arvo w-50  mid'>
      <thead className='text-start'>
        <tr>
          <th className='size'>Subject</th>
          <th className='size'>Text</th>

        </tr>
      </thead>
      <tbody >
        <tr className='text-start '>
          <td className='size'>{subject}</td>
          <td className='size'>{text}</td>
        
        </tr>
     
      </tbody>
    </Table>
      
        </div>
    );
};

export default Info;