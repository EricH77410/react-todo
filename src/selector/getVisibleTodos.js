import moment from 'moment';

const getVisibleTodos = (todos, {text, sortBy, startDate, endDate}) => {
    return todos.filter((t)=>{
        const textMatch = t.text.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = startDate ? startDate.isSameOrBefore(moment(t.deadLine)): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(moment(t.deadline)): true

        return textMatch && startDateMatch && endDateMatch ;
    })
}

export default getVisibleTodos;
