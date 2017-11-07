const filterReducerInitialState = {
    text:'',
    sortBy:'done'
}

const filterReducer = (state = filterReducerInitialState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.term
            }
        case 'SORT_BY_DONE':
        console.log(action);
            const sortBy = action.value==='done' ? 'done':'pending'
            return {
                ...state,
                sortBy
            }
        default:
            return state;
    }
}

export default filterReducer;