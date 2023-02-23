import React from "react";

const ModalStyle = ({editId, allTodoList, setAllTodoList}) => {
  const updateHandler=()=>{
   const updatedNotes= allTodoList.map((item)=>{
      if(editId === item.id){
     return  ({
          ...item,  subject:document.getElementById('editsub').value,
          text: document.getElementById('edittext').value
      })
      }
      else{
        return item
      }
    })
    console.log(updatedNotes)
    setAllTodoList(updatedNotes)
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  }
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Subject: <input id="editsub" type="text" /> </div>
            <div className="modal-body">Text: <textarea name="" id="edittext" cols="30" rows="5"></textarea></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={updateHandler}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalStyle;
