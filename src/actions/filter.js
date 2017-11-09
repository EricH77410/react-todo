
export const setTextFilter = (term)=>{
    return {
        type:'SET_TEXT_FILTER',
        term
    }
}

export const setTodoDoneFilter = (value)=>{
    return {
        type:'SORT_BY_DONE',
        value
    }
}

export const setTodoTypeFilter = (value)=>{
    return {
        type:'SORT_BY_TYPE',
        value
    }
}

export const setStartDate = (start) => {
  return {
    type:'SET_START_DATE',
    start
  }
}

export const setEndDate = (end) => {
  return {
    type:'SET_END_DATE',
    end
  }
}
