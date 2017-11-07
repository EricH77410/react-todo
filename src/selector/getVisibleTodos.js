
const getVisibleTodos = (todos, {text, sortBy}) => {
    return todos.filter((t)=>{
        const textMatch = t.text.toLowerCase().includes(text.toLowerCase());
        
        return textMatch;     
    })
}

export default getVisibleTodos;