

const todosReducerDefaultState = [];

const todosReducer = (state = todosReducerDefaultState,action) => {
    switch (action.type) {
        case 'LOAD_TODO':
            const td = JSON.parse(localStorage.getItem('todos'))
            if (td) {
                return td
            }
            break;
        case 'SAVE_ALL':
          const json = JSON.stringify(this.state.todos);
          localStorage.setItem('todos',json)
          break;
        case 'ADD_TODO':
            return [...state,action.todo] //state.concat(action.expense)
        case 'REMOVE_TODO':
            return state.filter((e)=>e.id !== action.id)
        case 'EDIT_TODO':
            return state.map((e)=>{
                if (e.id === action.id){
                    return {
                        ...e,
                        ...action.payload
                    }
                } else {
                    return e
                }
            })
        default:
            return state;
    }
}

export default todosReducer;
