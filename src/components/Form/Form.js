import React from "react";
import { connect } from "react-redux";
import { createToDo } from "../../store/actions/toDoActions";
import "./Form.css";
import Item from "../Item/Item";
import { IoAddCircle } from "react-icons/io5";

function Form({ todos, createToDo }) {
  return (
    <div id="form">
      <div className="list-container">
        <div className="item-container">
          {todos.map((todo) => {
            return <Item key={todo.id} title={todo.title} todo={todo} />;
          })}
        </div>
        <div className="add-icon">
          <IoAddCircle
            className="icon"
            color="rgb(229,49,112)"
            size={60}
            onClick={createToDo}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const mapDispatchToProps = {
  createToDo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
