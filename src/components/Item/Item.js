import React, { useState } from "react";
import "./Item.css";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md";
import { deleteToDo, updateToDo } from "../../store/actions/toDoActions";
import { connect } from "react-redux";

function Item({ todo, updateToDo, deleteToDo }) {
  const [title, setTitle] = useState(todo.title);
  const onInputChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmite = (event) => {
    event.preventDefault();
    updateToDo({ ...todo, title: title, complete: true });
  };
  const handleChange = (event) => {
    if (event.key === "Enter") {
      handleSubmite(event);
    }
  };

  return (
    <div className="actions">
      <div className="action-info" onSubmit={handleSubmite}>
        {todo.complete ? (
          <p className="text-field">{title}</p>
        ) : (
          <input
            className="text-field"
            placeholder="Add title"
            value={title}
            onChange={onInputChange}
            onKeyDown={handleChange}
          ></input>
        )}
      </div>
      <div className="btns">
        <button id="edit" type="edit">
          {todo.complete ? (
            <MdDoneOutline className="icon" color="rgb(242,95,76)" size={20} />
          ) : (
            <FiEdit2
              className="icon"
              color="rgb(242,95,76)"
              size={20}
              onClick={handleSubmite}
            />
          )}
        </button>
        <button id="delete" type="delete">
          <RiDeleteBinLine
            className="icon"
            color="rgb(242,95,76)"
            size={20}
            onClick={() => deleteToDo(todo.id)}
          />
        </button>
      </div>
    </div>
  );
}
const mapDispatchToProps = {
  deleteToDo,
  updateToDo,
};

export default connect(null, mapDispatchToProps)(Item);
// export default Item
