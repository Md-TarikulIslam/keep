import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@font-awesome/react-font-awesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons';



import './Info.css'
import ModalStyle from '../Modal/ModalStyle';
import Footer from '../Footer/Footer';


const Info = () => {
  const [allTodoList, setAllTodoList] = useState([]);
  const [editId, setEditId] = useState("")


  // console.log(Array.isArray(allTodoList))
  const deleteHandler = (id) => {
    console.log(id)
    console.log(allTodoList)


    const newList = allTodoList.filter((item) => item.id !== id);
    setAllTodoList(newList);
    localStorage.setItem('notes', JSON.stringify(newList));
  }

  const editHandler = (id) =>{
    setEditId(id)
    // console.log(id)
    allTodoList.filter((item)=>{
      if(item.id===id){
        document.getElementById('editsub').value=item.subject;
        document.getElementById('edittext').value=item.text;
      }
    })
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('notes'));
    setAllTodoList(data);
    // console.log('All Todo ---->', data);
  }, []);

  return (
    <div >

      <Table striped bordered hover className='Arvo w-50 table-warning mid'>
        <thead className='text-start'>
          <tr>
            <th className=''>Subject</th>
            <th className=''>Text</th>
            <th className=''>Action</th>

          </tr>
        </thead>
        <tbody >
          {
            allTodoList.map((item, i) => {
              const { subject, text, id } = item;
              return (
                <tr className='text-start '>
                  <td className=''>{subject}</td>
                  <td className=''>{text}</td>
                  <td className='size icon'><FontAwesomeIcon title='edit' data-bs-toggle="modal" data-bs-target="#exampleModal" className='fa-2x ms-3 edit' icon={faPenNib} onClick={()=>editHandler(id)} /> <FontAwesomeIcon title='delete' className='fa-2x delete' icon={faTrash} onClick={() => {
                    deleteHandler(id)
                  }} /></td>
                <ModalStyle editId={editId} allTodoList={allTodoList} setAllTodoList = {setAllTodoList}></ModalStyle>
     
                </tr>
              )
            })
          }

        </tbody>
      </Table>
      <Footer></Footer>
    </div>
  );
};

export default Info;