import React from 'react'
import './Item.css';

function Item({todos,onEdit}) {


    const onToDoEdit = (e) => {
        e.stopPropagation()
        onEdit(todos)
    }

  return (
    <div className="action-item"
    onDoubleClick={onToDoEdit}>
        <p className="title">
            {todos}
        </p>
    </div>
  )
}

export default Item