
export const setTextFilter = (term)=>{
    return {
        type:'SET_TEXT_FILTER',
        term
    }
}

export const setDoneFilter = (value)=>{
    return {
        type:'SORT_BY_DONE',
        value
    }
}
