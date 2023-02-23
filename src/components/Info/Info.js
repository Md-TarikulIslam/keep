import React from 'react';
import { Table } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@font-awesome/react-font-awesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons';


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
          <th className='size'>Action</th>

        </tr>
      </thead>
      <tbody >
        <tr className='text-start '>
          <td className='size'>{subject}</td>
          <td className='size'>{text}</td>
          <td className='size'><FontAwesomeIcon title='edit' className='fa-2x me-5 ms-3' icon={faPenNib} /> <FontAwesomeIcon title='delete' className='fa-2x ms-4' icon={faTrash} /></td>
        </tr>
     
      </tbody>
    </Table>
      
        </div>
    );
};

export default Info;