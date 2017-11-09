import moment from 'moment';

const filterReducerInitialState = {
    text:'',
    sortBy:'done',
    type:'',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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
        case 'SET_START_DATE':
          const startDate = action.start;
          return {
            ...state,
            startDate
          }
        case 'SET_END_DATE':
          const endDate = action.end;
          return {
            ...state,
            endDate
          }
        default:
            return state;
    }
}

export default filterReducer;
