import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { deleteToDo, createToDo, updateToDo} from '../../store/actions/toDoActions';
import './Form.css'
import {FiEdit2} from 'react-icons/fi'
import {RiDeleteBinLine} from 'react-icons/ri'

function Form({
  createToDo, deleteToDo, updateToDo}) {

  const [editAction, setEditAction] = useState([]);
  const [todoForEdit, setTodoForEdit] = useState(createEmptyToDo());

  function createEmptyToDo() {
    return {
       title: '',
       id: '',
    }
}

  useEffect(() => {
    const newTodos = JSON.parse(localStorage.getItem('editAction'));
    if (!newTodos) {
      setEditAction([])
    }else{
      setEditAction(newTodos)
    }
  }, [])

  function saveToStorage (editAction) {
    localStorage.setItem('editAction', JSON.stringify(editAction));
  }

  const deleteFromStorage= (id)=>{
    const newTodos = [...editAction.filter((todos) => todos.id !== id)]
      setEditAction(newTodos);
      saveToStorage(newTodos);
  }

  const onInputChange = (e) =>{
    setEditAction(e.target.value)
  };

  const saveTodos = (todos) => {
    if (!todos.id){
      createTodos(todos)
    }else {
      updateTodos(todos)
    }
  };

  function createTodos(todos){
    todos.id = Date.now();
    const newTodos = [...editAction, todos]
    saveToStorage(newTodos);
    setEditAction(newTodos);
    setTodoForEdit(createEmptyToDo());
    
  };

  function updateTodos(todos){
      const newTodos = editAction.map((item) => 
      item.id === todos.id ? todos : item
      );
      setEditAction(newTodos);
      setTodoForEdit(createEmptyToDo());
  };


  return (
    <form id= 'action-form' onSubmit={saveToStorage}>
      <div className = 'action-info'>
        <input
        className = 'text-field'
        placeholder='Add title'
        value={editAction}
        onChange={onInputChange}
        onKeyPress={'Enter' && saveTodos(editAction)}>
        </input>
      </div>
      <div className='btns'>
        <button id='edit' type='edit'>
          <FiEdit2 
          className='icon'
          color="rgb(242,95,76)"
          size={20}
          onClick={updateTodos}
          />
          </button>
            <button id= 'delete'
            type= 'delete'
            onClick={deleteFromStorage}>
              <RiDeleteBinLine
              className='icon'
              color="rgb(242,95,76)"
              size={20}
              onClick={deleteFromStorage}/>
            </button>
      </div>
    </form>
  )
}

const mapDispatchToProps = { 
  deleteToDo, createToDo, updateToDo
}

export default connect (null, mapDispatchToProps)(Form)