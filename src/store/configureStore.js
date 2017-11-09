import { createStore, combineReducers } from 'redux';

import todosReducer from '../reducers/todosReducer';
import filterReducer from '../reducers/filterReducer.js';

export default () => {
    // Store creation

    const store = createStore(
        combineReducers({
            todos: todosReducer,
            filter: filterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}
