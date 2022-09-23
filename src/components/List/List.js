import React from 'react'
import Item from '../Item/Item'
import { connect } from 'react-redux';
import {selectToDo, createToDo} from '../../store/actions/toDoActions'
import {IoAddCircle} from 'react-icons/io5'
import './List.css'


function List({todos, selectToDo, createToDo}) {

  return (
    <div className='list-container'>
      <div className="item-container">
        {todos.map((todos)=>{
          return (
            <Item
            key={todos.id}
            action={todos}
            onEdit = {selectToDo}
            />
          )
        })}
      </div>
      <IoAddCircle className='icon'
      color="rgb(229,49,112)"
      size={60}
      onClick={createToDo}/>
    </div>
  )
}

const mapStateToProps = ({todos}) => ({todos});

const mapDispatchToProps = {
  selectToDo, createToDo
}

export default connect(mapStateToProps, mapDispatchToProps)(List)