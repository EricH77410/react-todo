const filterReducerInitialState = {
    text:'',
    sortBy:'done',
    type:''
}

const filterReducer = (state = filterReducerInitialState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.term
            }
        case 'SORT_BY_DONE':
            const sortBy = action.value==='done' ? 'done':'pending'
            return {
                ...state,
                sortBy
            }
        case 'SORT_BY_TYPE':
            const type = action.value;
            return {
                ...state,
                type
            }
        default:
            return state;
    }
}

export default filterReducer;