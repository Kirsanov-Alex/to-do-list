import {
  CREATE_TO_DO,
  DELETE_TO_DO,
  UPDATE_TO_DO,
} from "../actions/toDoActions";

const TODOS_ID = "todos";
const newTodos = JSON.parse(localStorage.getItem(TODOS_ID));
const initialState = {
  todos: newTodos || [],
};

export default function toDoReducer(state = initialState, { type, payload }) {
  let newTodos;
  switch (type) {
    case DELETE_TO_DO:
      newTodos = state.todos.filter((todo) => todo.id !== payload);
      localStorage.setItem(TODOS_ID, JSON.stringify(newTodos));
      return { ...state, todos: newTodos };
    case UPDATE_TO_DO:
      newTodos = state.todos.map((todo) =>
        todo.id !== payload.id ? todo : payload
      );
      localStorage.setItem(TODOS_ID, JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    case CREATE_TO_DO:
      newTodos = [...state.todos, createEmptyToDo()];
      localStorage.setItem(TODOS_ID, JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
}

function createEmptyToDo() {
  return {
    title: "",
    id: Date.now(),
    complete: false,
  };
}
