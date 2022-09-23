import { CREATE_TO_DO, DELETE_TO_DO,  SELECT_TO_DO,  UPDATE_TO_DO } from "../actions/toDoActions";


const initialState = {
    todos: [{
        title: 'Go walk',
        id: 1223123
    }],
    selectedToDo: createEmptyToDo()
}

export default function toDoReducer(state = initialState, type, payload) {

    switch (type) {

        case DELETE_TO_DO : return {...state, todos: [...state.todos.filter((todos)=>todos.id !== payload)]};
        case UPDATE_TO_DO : return {...state, todos: state.todos.map((todos)=>todos.id !== payload.id ? todos : payload), selectedToDo: createEmptyToDo()};
        case CREATE_TO_DO : return {...state, todos: [...state.todos, payload], selectedToDo: createEmptyToDo()};
        case SELECT_TO_DO: return{...state, selectedToDo:payload}
        default: return state;
    }
}

function createEmptyToDo() {
    return {
       title: '',
       id: '',
    }
}