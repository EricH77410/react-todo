import { createStore, combineReducers } from 'redux';

import todosReducer from '../reducers/todosReducer';
//import filtersReducer from '../reducers/filters';

export default () => {
    // Store creation

    const store = createStore(
        combineReducers({
            todos: todosReducer
        })
    );

    return store;
}
