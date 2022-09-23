import { createStore} from 'redux';
import toDoReducers from './reducers/toDoReducers';


export default createStore(toDoReducers)